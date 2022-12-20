import React from 'react';

const NewUserForm = () => {
    
    // function handleSubmit(e){
    //     e.preventDefault();
    //     const user = {
    //         first_name: formData.firstName,
    //         last_name: formData.lastName,
    //         age: formData.age,
    //         username: formData.username,
    //         password: formData.password,
    //         password_confirmation: formData.passwordConfirmation
    //     }
    //     fetch(`/users`,{
    //         method: "POST",
    //         headers:{'Content-Type':'application/json'},
    //         body:JSON.stringify(user)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(setCurrentUser)
    //         } else {
    //             res.json().then( e => setErrors(Object.entries(e.error).flat()))
    //         }
    //     })
    //     .then(navigate('/home'))
    // }
    
    return(
        <div className="New-user-card">
            <form >
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName"  />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName"  />
                </div>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" name="userName"  />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="integer" name="age"  />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="string" name="email"  />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password"  />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input type="password" id="password_confirmation" name="passwordConfirmation" />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
        )
}

export default NewUserForm;