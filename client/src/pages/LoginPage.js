import React, { useState } from "react";
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { currentUserStateAtom } from "../recoil/atoms"




const LoginPage = () => {

    const navigate = useNavigate();
    const setCurrentUser = useSetRecoilState(currentUserStateAtom)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const loginParams = {
            user_name: username,
            password: password
        }

        fetch(`/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginParams)
        })
            .then(res => res.json())
            .then(setCurrentUser)
            .then(navigate('/dashboard'));
    }

    return (
        <div className='login-form-div'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => handleUsernameChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="pass" name="password" value={password} onChange={(e) => handlePasswordChange(e)} />
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