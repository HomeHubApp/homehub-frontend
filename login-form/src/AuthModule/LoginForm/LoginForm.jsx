import React, { useState } from "react";
import "./LoginForm.css";
import loginImage from "../../assets/login-image.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login success:", data);

      // 👉 Save token if backend sends one
      localStorage.setItem("token", data.token);

      // 👉 Redirect (if using React Router)
      // navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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

          <button className="google-btn">
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
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
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
              </span>
            </div>

            <p className="forgot">Forgot password?</p>

            {/* ERROR MESSAGE */}
            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="signup">
            Don’t have an account? <span>Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
