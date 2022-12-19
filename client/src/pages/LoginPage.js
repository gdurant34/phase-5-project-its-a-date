import React from "react";


function LoginPage() {
  return (
    <div className='login-form-div'>
        <form className='login-form'>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="pass" name="password" />
            </div>
            <div>
                <button className='button' type="submit" value="Login">
                Login
                </button>
            </div>
        </form>
    </div>
)
};

export default LoginPage;