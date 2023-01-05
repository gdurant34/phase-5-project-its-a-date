import React, { useState } from "react";
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { currentUserStateAtom } from "../recoil/atoms"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'





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
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='brown' textAlign='center'>
                    {/* <Image src='/logo.png' />  */}
                    Log-in to your account
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Form.Input
                        fluid icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        label='Username'
                        id="username"
                        name="username" value={username}
                        onChange={(e) => handleUsernameChange(e)}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        label='Password'
                        type='password'
                        id="pass"
                        name="password"
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                    />
                    <Button id='login-btn' color='teal' fluid size='large' className='button' type="submit" value="Login">
                        Login
                    </Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
};

export default LoginPage;