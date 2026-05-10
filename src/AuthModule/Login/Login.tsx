import { useState, type FormEvent } from "react";
import "../../assets/CSS/login.css";
import loginImage from "../../assets/login-image.png";
import { Link, useNavigate } from "react-router-dom";
import { getApiErrorMessage, useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

function LoginForm() {
  const navigate = useNavigate();
  const { login, pendingTwoFactor } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await toast.promise(
        login({
          email,
          password,
          rememberDevice: false,
        }),
        {
          loading: "Signing you in...",
          success: (response) =>
            response.requiresTwoFactor
              ? "Verification required. Continue with OTP."
              : "Welcome back.",
          error: (err) => getApiErrorMessage(err),
        },
      );

      if (result.requiresTwoFactor) {
        navigate("/otp");
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      setError(getApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* LEFT IMAGE */}
        <div className="login-image">
          <img src={loginImage} alt="Home setup" />
        </div>

      {/* RIGHT FORM */}
      <div className="login-form">
        <div className="form-box">
          <h2>Login to HomeHub</h2>
          <p className="subtitle">Manage all your home devices in one place.</p>

          <button className="google-btn" type="button">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>

          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="ex. johnsmith@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="..........."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {/* SVG eye icon black */}
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                ) : (
                  "👁️‍🗨️"
                )}
              </button>
            </div>

            <p className="forgot">Forgot password?</p>

            {/* ERROR MESSAGE */}
            {error && <p className="error">{error}</p>}
            {!error && pendingTwoFactor && (
              <p className="subtitle">{pendingTwoFactor.message}</p>
            )}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="signup">
            Don’t have an account? <span>
               <Link to="/signup">Create an account</Link>
               </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;
