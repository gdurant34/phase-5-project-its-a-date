import React from "react";
import { datesStateAtom, dateFormDataStateAtom, dateModalStateAtom } from "../recoil/atoms";
import { useRecoilState, useSetRecoilState } from 'recoil';


const NewDateForm = () => {
    const [dateFormData, setDateFormData] = useRecoilState(dateFormDataStateAtom);
    const setOpen = useSetRecoilState(dateModalStateAtom)
    const [dates, setDates] = useRecoilState(datesStateAtom)

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
                    <label htmlFor="time">Time:</label>
                    <input type="text" name="time" value={dateFormData.time} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" value={dateFormData.location} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="confirmed">Confirmed:</label>
                    <input type="text" name="confirmed" value={dateFormData.confirmed} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" value={dateFormData.category} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="user-id">User:</label>
                    <input type="text" name="userId" value={dateFormData.userId} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="relationship-id">Relationship:</label>
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