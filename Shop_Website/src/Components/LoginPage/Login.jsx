import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="container-login">
      {!showSignup ? (
        /* ---------- LOGIN FORM ---------- */
        <div className="form-body">
          <h2>Login here</h2>

          <label>Enter your email</label>
          <input type="email" placeholder="example@gmail.com" required />

          <label>Password</label>
          <input type="password" min={5} max={8} required />

          <button>Login</button>

          <span>
            Not a user?{" "}
            <button
              type="button"
              className="link-btn"
              onClick={() => setShowSignup(true)}
            >
              Sign Up here
            </button>
          </span>
        </div>
      ) : (
        /* ---------- SIGNUP FORM ---------- */
        <div className="form-body sign-up">
          <h2>Sign-Up here</h2>

          <label>Firstname</label>
          <input type="text" required />

          <label>Lastname</label>
          <input type="text" required />

          <label>Enter your email</label>
          <input type="email" placeholder="example@gmail.com" required />

          <label>Set Your Password</label>
          <input type="password" min={5} max={8} required />

          <button>Sign Up</button>

          <span>
            Already a user?{" "}
            <button
              type="button"
              className="link-btn"
              onClick={() => setShowSignup(false)}
            >
              Login here
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Login;
