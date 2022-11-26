import "./Login.scss";

import React from 'react'

const Login = () => {
    return (
    <>
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <form>
            <h1> Sign In</h1>
            <input type="email" placeholder="Enter Your Email" />
            <input type="password" placeholder="Enter Your Password" />
            <button className="loginButton">Sign in </button>
            <span>
              New to Netflix? <b>Sign up now</b>
            </span>
            <small>
              The page is protected by google eCAPCTHA to ensure you're not a robot
              <b>Learn more</b>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login
