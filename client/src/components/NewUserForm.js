import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userModalStateAtom, userFormDataStateAtom } from '../recoil/atoms';

const NewUserForm = () => {
    const [userFormData, setUserFormData] = useRecoilState(userFormDataStateAtom);
    // const setCurrentUserState = useSetRecoilState(currentUserStateAtom);
    // const setErrorsState = useSetRecoilState(errorsStateAtom)
    const setOpen = useSetRecoilState(userModalStateAtom)


    const resetForm = () => {
        setUserFormData((userFormData) => ({
            firstName: '',
            lastName: '',
            userName: '',
            age: '',
            email: ''
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

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            first_name: userFormData.firstName,
            last_name: userFormData.lastName,
            age: userFormData.age,
            user_name: userFormData.userName,
            email: userFormData.email
        }
        fetch(`/users`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(r => r.json())
            .then(console.log)
            .then(setOpen(false))
            .then(resetForm())
    }

    return (
        <div className="New-user-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={userFormData.firstName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={userFormData.lastName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" name="userName" value={userFormData.userName} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="integer" name="age" value={userFormData.age} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="string" name="email" value={userFormData.email} onChange={(e) => handleChange(e)} />
                </div>
                {/* <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"  />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input type="password" id="password_confirmation" name="passwordConfirmation" />
                </div> */}
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewUserForm;