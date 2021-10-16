import React from 'react';
import "./Login.css"

const Login = () => {
    return (
        <div className="login">
            <form className="login-form">
                <h1>Login Page</h1>
                <label>E-mail:</label>
                <input type="text"></input>
                <label>Password:</label>
                <input type="password"></input>
                <button className="btn" type="submit">Login</button>
                <a href="/register" className="btn2" type="submit">Sign Up</a>
            </form>
        </div>
    )
}

export default Login
