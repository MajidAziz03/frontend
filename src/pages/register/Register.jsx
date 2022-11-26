import "./Register.scss";
import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Register = () => {
    const [email, setEmail] = useState('')
    let emailRef = useRef()


    const handleOpen = () => {
    setEmail(emailRef.current.value)
}


    return (
        <>
            <div className="register">
                <div className="top">
                    <div className="wrapper">
                        <img
                            className="logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""
                        />
                        <button className="loginButton">Sign in</button>
                    </div>
                </div>
                <div className="container">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your
                        membership.
                    </p>
                    <div className="input">
                        <input type="email" placeholder="Enter your Email Address" ref={emailRef} />
                        <button  className="registerButton" onClick={handleOpen}> Get Started </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
