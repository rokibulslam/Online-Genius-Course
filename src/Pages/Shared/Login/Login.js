import { Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInWithGoogle, authError, loginUser } = useAuth();

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
  };
  return (
    <div className="container_custom">
      <div className="screen">
        <div className="screen__content">
          <form onSubmit={handleLoginSubmit} className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input type="email" onBlur={handleOnBlur} name="email" className="login__input" placeholder="User Email*" />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input onBlur={handleOnBlur} name="password" type="password" className="login__input" placeholder="Password*" />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in with</h3>
            <div className="social-icons">
              <button onClick={handleGoogleSign} className="social-button">
                <span>
                  <i className="fab fa-google"></i>
                </span>
              </button>

              <button className="social-button">
                <span>
                  {" "}
                  <i className="fab fa-github"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="card-footer">
            <div>{authError && <Alert severity="warning">{authError}</Alert>}</div>
            <div className="d-flex justify-content-center links">
              Don't have an account?{" "}
              <NavLink to="/register" className="text-decoration-none">
                Sign up
              </NavLink>
            </div>
            <div className="d-flex justify-content-center">
              <NavLink to="/register" className="text-decoration-none">
                {" "}
                Forgot your password?
              </NavLink>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
