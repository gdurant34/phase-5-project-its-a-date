import React from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState, userFormDataState, errorsState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom';

const NewUserForm = () => {
    const [userFormData, setUserFormData] = useRecoilState(userFormDataState);
    const setCurrentUserState = useRecoilState(currentUserState);
    const setErrorsState = useRecoilState(errorsState)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUserFormData((userFormData) => ({
            ...userFormData,
            [name] : value
        }));
    }

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            first_name: userFormData.firstName,
            last_name: userFormData.lastName,
            age: userFormData.age,
            username: userFormData.userName,
            email: userFormData.email
        }
        fetch(`/users`,{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUserState)
            } else {
                res.json().then( e => setErrorsState(Object.entries(e.error).flat()))
            }
        })
        .then(navigate('/'))
    }
    
    return(
        <div className="New-user-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={userFormData.firstName} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={userFormData.lastName} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" name="userName" value={userFormData.userName} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="integer" name="age" value={userFormData.age} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="string" name="email" value={userFormData.email} onChange={(e)=> handleChange(e)} />
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