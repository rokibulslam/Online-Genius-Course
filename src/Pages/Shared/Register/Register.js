import { Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [userRegisterData, setUserRegisterData] = useState({});
  const navigate = useNavigate();
  const { registerUser, authError } = useAuth();

  // Handling input field
  const handleOnBlur = (e) => {
    const nameField = e.target.name;
    const value = e.target.value;
    const finalRegisterData = { ...userRegisterData };
    finalRegisterData[nameField] = value;
    setUserRegisterData(finalRegisterData);
  };
  // handle submit button for register
  const handleRegisterSubmit = (e) => {
    if (userRegisterData.password !== userRegisterData.password2) {
      alert("Your password did not match");
      return;
    }
    //   Sending parameter to firebase hook for registering user
    registerUser(userRegisterData.email, userRegisterData.password, userRegisterData.name, navigate);
    e.preventDefault();
  };

  return (
    <div className="register-body">
      <div className="form-wrapper-register">
        <div className="user-photo">
          <i className="fa fa-user"></i>
        </div>

        <div className="heading">Create A New Account</div>
        <form onSubmit={handleRegisterSubmit} className="input-text">
          <div className="username">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
            <input onClick={handleOnBlur} type="text" name="name" className="user-input" placeholder="username*" />
          </div>{" "}
          <div className="email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
            </svg>
            <input onClick={handleOnBlur} name="email" type="email" className="user-input" placeholder="email address*" />
          </div>
          <div className="password">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input onClick={handleOnBlur} name="password" type="password" className="pass-input" placeholder="password*" />
          </div>
          <div className="password2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input onClick={handleOnBlur} type="password" name="password2" className="pass-input" placeholder="confirm password*" />
          </div>
          <button type="submit" className="sign-btn2">
            SIGNUP
          </button>
        </form>
        {authError && <Alert severity="warning">{authError}</Alert>}
        <div className="link">
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
