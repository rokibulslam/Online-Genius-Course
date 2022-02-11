import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-body">
      <div class="form-wrapper">
        <div class="user-photo">
          <i class="fa fa-user"></i>
        </div>

        <div class="heading">Login your account</div>

        <div class="input-text">
          <div class="username">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
            </svg>
            <input type="email" class="user-input" placeholder="email*" />
          </div>

          <div class="password">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input type="password" class="pass-input" placeholder="password*" />
          </div>
        </div>

        <button class="sign-btn">LOGIN</button>

        <div class="link">
          Create a new account? <NavLink to="/register">Sign up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
