import React, { useEffect } from "react";
import { datesStateAtom, dateFormDataStateAtom, dateModalStateAtom } from "../recoil/atoms";
import { useRecoilState, useSetRecoilState } from 'recoil';


const NewDateForm = () => {

    const [dateFormData, setDateFormData] = useRecoilState(dateFormDataStateAtom);
    const setOpen = useSetRecoilState(dateModalStateAtom)
    const [dates, setDates] = useRecoilState(datesStateAtom)

    useEffect(() => {
        resetForm();
    }, [])

    const resetForm = () => {
        setDateFormData((dateFormData) => ({
            time: '',
            location: '',
            confirmed: '',
            category: '',
            userId: '',
            relationshipId: ''
        }))
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setDateFormData((dateFormData) => ({
            ...dateFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = {
            time: dateFormData.time,
            location: dateFormData.location,
            confirmed: dateFormData.confirmed,
            category: dateFormData.category,
            user_id: dateFormData.userId,
            relationship_id: dateFormData.relationshipId
        }
        fetch(`/dayts`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(date)
        })
            .then(r => r.json())
            .then(newDate => setDates([...dates, newDate]))
            .then(setOpen(false))
            .then(resetForm())
    }


    return (
        <div className="New-date-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <h5>Time:</h5>
                    <label htmlFor="time" />
                    <input type="text" name="time" value={dateFormData.time} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Location:</h5>
                    <label htmlFor="location" />
                    <input type="text" name="location" value={dateFormData.location} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Confirmed:</h5>
                    <label htmlFor="confirmed" />
                    <input type="text" name="confirmed" value={dateFormData.confirmed} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Category:</h5>
                    <label htmlFor="category" />
                    <input type="text" name="category" value={dateFormData.category} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>User:</h5>
                    <label htmlFor="user-id" />
                    <input type="text" name="userId" value={dateFormData.userId} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Relationship:</h5>
                    <label htmlFor="relationship-id" />
                    <input type="text" name="relationshipId" value={dateFormData.relationshipId} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
};

export default NewDateForm;