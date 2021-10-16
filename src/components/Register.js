import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div className="register">
            <form className="register-form">
                <h1>Register Page</h1>
                <label>E-mail:</label>
                <input type="text"></input>
                <label>Password:</label>
                <input type="password"></input>
                <button className="btn" type="submit">Sign Up</button>
                <a  href="/login" className="btn2" type="submit">Login</a>

            </form>
        </div>
    )
}

export default Register
