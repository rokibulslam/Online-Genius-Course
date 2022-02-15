import { Alert, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";



const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInWithGoogle, isLoading, authError, loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // Login Control
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  const handleGoogleSign = () => {

    signInWithGoogle(location, navigate);
  }
  return (
    <div className="login-body">
      <div class="form-wrapper">
        <div class="user-photo">
          <i class="fa fa-user"></i>
        </div>

        <div class="heading">Login your account</div>

        <form onSubmit={handleLoginSubmit} className="input-text">
          <div class="username">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
            </svg>
            <input
              onBlur={handleOnBlur}
              name="email"
              type="email"
              className="user-input"
              placeholder="email address*"
            />
          </div>

          <div class="password">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input
              onBlur={handleOnBlur}
              name="password"
              type="password"
              className="pass-input"
              placeholder="password*"
            />
          </div>
          <h5 style={{ color: "red" }}>Forgot Password ?</h5>
          <button type="submit" className="sign-btn">
            LOGIN
          </button>
        </form>

        <div style={{ textAlign: "center" }}>
          {authError && <Alert severity="warning">{authError}</Alert>}
          <p>Or login with</p>
          {/* Google Icon  */}
          <button onClick={handleGoogleSign} className="social-button">
            <img
              style={{ width: "35px", borderRadius: "50%" }}
              src="https://i.ibb.co/MPcSmVD/download.png"
              alt=""
            />
          </button>
          {/* Github Icon  */}
          <button className="social-button">
            <img
              style={{ width: "35px", borderRadius: "50%" }}
              src="https://i.ibb.co/8YNdYgm/download-1.png"
              alt=""
            />
          </button>
        </div>
        <div class="link">
          Create a new account? <NavLink to="/register">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
