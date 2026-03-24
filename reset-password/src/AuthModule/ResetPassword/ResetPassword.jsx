import { useState } from "react";
import "./ResetPassword.css";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    console.log("Reset link sent to:", email);
    alert("Password reset link sent!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Reset your password</h2>

        <p className="description">
          Enter your email address you used in creating your account and we'll
          send you a password reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email address</label>

          <input
            type="email"
            placeholder="ex. johnsmith@example.com"
            value={email}
            onChange={handleChange}
          />

          <button type="submit">Reset password</button>
        </form>

        <p className="back">
          ← Back to login
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;