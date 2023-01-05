import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userModalStateAtom, userFormDataStateAtom } from '../recoil/atoms';
import { currentUserStateAtom } from '../recoil/atoms';

const NewUserForm = () => {
    const [userFormData, setUserFormData] = useRecoilState(userFormDataStateAtom);
    const setCurrentUserState = useSetRecoilState(currentUserStateAtom);
    // const setErrorsState = useSetRecoilState(errorsStateAtom)
    const setOpen = useSetRecoilState(userModalStateAtom)


    const resetForm = () => {
        setUserFormData((userFormData) => ({
            firstName: '',
            lastName: '',
            userName: '',
            age: '',
            email: '',
            password: '',
            password_confirmation: ''
        }))
    }


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUserFormData((userFormData) => ({
            ...userFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            first_name: userFormData.firstName,
            last_name: userFormData.lastName,
            age: userFormData.age,
            user_name: userFormData.userName,
            email: userFormData.email,
            password: userFormData.password,
            password_confirmation: userFormData.passwordConfirmation
        }
        fetch(`/users`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(r => r.json())
            .then(setCurrentUserState)
            .then(setOpen(false))
            .then(resetForm())
    }

    return (
        <div className="New-user-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <h5>First Name:</h5>
                    <label htmlFor="firstName" />
                    <input type="text" name="firstName" value={userFormData.firstName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Last Name:</h5>
                    <label htmlFor="lastName" />
                    <input type="text" name="lastName" value={userFormData.lastName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Username:</h5>
                    <label htmlFor="userName" />
                    <input type="text" name="userName" value={userFormData.userName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Age:</h5>
                    <label htmlFor="age" />
                    <input type="integer" name="age" value={userFormData.age} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Email:</h5>
                    <label htmlFor="email" />
                    <input type="string" name="email" value={userFormData.email} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Password:</h5>
                    <label htmlFor="password" />
                    <input type="password" name="password" value={userFormData.password} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Confirm Password:</h5>
                    <label htmlFor="password_confirmation" />
                    <input type="password" id="password_confirmation" name="passwordConfirmation" value={userFormData.passwordConfirmation} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewUserForm;