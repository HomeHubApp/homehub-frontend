import { useState, useRef, useEffect } from "react";
import "./Otp.css";
import { Link, useNavigate } from "react-router-dom";
import { verifyEmailCode, resendVerificationCode } from "./api";

export default function Otp({ email = "john12@example.com" }) {
  const LENGTH = 6;
  const RESEND_SECS = 30;
  const navigate = useNavigate();

  const [otp, setOtp] = useState(Array(LENGTH).fill(""));
  const [countdown, setCountdown] = useState(RESEND_SECS);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const refs = useRef([]);

  useEffect(() => { refs.current[0]?.focus(); }, []);

  useEffect(() => {
    if (countdown <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleChange = (e, i) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    setError("");
    if (val && i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      if (otp[i]) {
        const next = [...otp]; next[i] = ""; setOtp(next);
      } else if (i > 0) {
        refs.current[i - 1]?.focus();
        const next = [...otp]; next[i - 1] = ""; setOtp(next);
      }
    }
    if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    const next = Array(LENGTH).fill("");
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    refs.current[Math.min(pasted.length, LENGTH - 1)]?.focus();
  };

  // 🔌 Connected to backend
  const handleVerify = async () => {
    if (otp.join("").length < LENGTH) {
      setError("Enter all 6 digits.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await verifyEmailCode({ email, code: otp.join("") });
      navigate("/dashboard"); // redirect on success
    } catch (err) {
      setError(err.response?.data?.message || "Invalid code. Try again.");
    } finally {
      setLoading(false);
    }
  };

  //Connection to the backend
  const handleResend = async () => {
    if (!canResend) return;

    setError("");
    try {
      await resendVerificationCode({ email });
      setOtp(Array(LENGTH).fill(""));
      setCountdown(RESEND_SECS);
      setCanResend(false);
      refs.current[0]?.focus();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend. Try again.");
    }
  };

  return (
    <div className="ve-page">
      <div className="ve-card">
        <h2 className="ve-title">Verify your email</h2>
        <p className="ve-subtitle">
          Enter the code we sent to{" "}
          <strong>{email}</strong> to
          verify your email address.
        </p>

        <div className="ve-otp-row" onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => (refs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(e, i)}
              onKeyDown={e => handleKeyDown(e, i)}
              className={`ve-box${digit ? " filled" : ""}`}
              autoComplete="one-time-code"
              disabled={loading}
            />
          ))}
        </div>

        {error && <p className="ve-error">{error}</p>}

        <button
          className="ve-btn"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <div className="ve-footer">
          <span className="ve-footer-text">
            Didn't receive verification code?{" "}
            <button
              onClick={handleResend}
              disabled={!canResend}
              className="ve-link"
            >
              Resend
            </button>{" "}
            {!canResend && (
              <span className="ve-countdown">in {countdown}s</span>
            )}
          </span>
          <span className="ve-footer-text">
            Wrong email address?{" "}
            <Link to="/" className="ve-anchor">Change email</Link>
          </span>
        </div>
      </div>
    </div>
  );
}