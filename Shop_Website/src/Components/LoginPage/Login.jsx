import React, { useState  } from "react";
import {useNavigate, } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [login, setLogin] = useState(
    {
      email: "",
      password: ""
    }
  )

  const [signup, setSignup] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }
  )

  const navigate = useNavigate()

  const characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()>?"

  const generateToken = (characters) => {
    let token = "";
    for (let i = 1; i <= 10; i++) {
      const words = Math.floor(Math.random() * characters.length);
      token += characters[words];
    }
    return token;
  }

const handleLogin = () => {
  if (!login.email || !login.password) {
    alert("all fields are required");
    return;
  }

  const loggedUser = JSON.parse(localStorage.getItem("signeduser"));

  if (!loggedUser) {
    alert("User not found, sign up first");
    return;
  }

  if (loggedUser.email === login.email && loggedUser.password === login.password) {
    const token = generateToken(characters);
    localStorage.setItem("token", token);
    alert("login successful");
    navigate("/products");
  } else {
    alert("invalid credentials");
  }
};


  const handleSignup = () => {
    if (!signup.firstname ||  !signup.lastname || !signup.email || !signup.password) {
      alert("all fields are mandatory");
      return
    }
    else {
      alert("signup successfull");
    }

  localStorage.setItem("signeduser" , JSON.stringify(signup))

      const token = generateToken(characters);
      localStorage.setItem("token", token);

      console.log(token);

      navigate("/login")

    setSignup({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    })
  }

  return (
    <div className="container-login">
      {!showSignup ? (
        /* ---------- LOGIN FORM ---------- */
        <div className="form-body">
          <h2>Login here</h2>

          <label>Enter your email</label>
          <input type="email" placeholder="example@gmail.com" required
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })} />

          <label>Password</label>
          <input type="password" minLength={5} maxLength={8} required
           value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })} />

          <button className="link-btn" onClick={handleLogin}>Login</button>

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
          <input type="text" required
          value={signup.firstname}
          onChange={(e) => setSignup({ ...signup, firstname: e.target.value })} />

          <label>Lastname</label>
          <input type="text" required
          value={signup.lastname}
          onChange={(e) => setSignup({ ...signup, lastname: e.target.value })} />

          <label>Enter your email</label>
          <input type="email" placeholder="example@gmail.com" required 
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })} />

          <label>Set Your Password</label>
          <input type="password" minLength={5} maxLength={8} required
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })} />

          <button className="link-btn" onClick={handleSignup}>Sign Up</button>

          <span>
            Already a user?{" "}
            <button
              type="button"
              className="link-btn"
              onClick={() => setShowSignup(!showSignup)}
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
