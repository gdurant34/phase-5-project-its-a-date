import React, { useEffect } from "react";
import { datesStateAtom, dateFormDataStateAtom } from "../recoil/atoms";
import { useRecoilState } from 'recoil';


const UpdateDateForm = ({ date, setOpen, open }) => {
    
    const [dateFormData, setDateFormData] = useRecoilState(dateFormDataStateAtom);
    const [dates, setDates] = useRecoilState(datesStateAtom)

    useEffect(() => {
        setDateFormData({
            time: date.title,
            location: date.location,
            confirmed: date.confirmed,
            category: date.category,
            userId: date.user.id,
            relationshipId: date.relationship.id
        })
    }, [])  

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setDateFormData((dateFormData) => ({
            ...dateFormData,
            [name]: value
        }))
    }


    const onUpdatedDate = (resDate) => {
        const updatedDates = dates.map(date => date.id === resDate.id ? resDate : date);
        setDates(updatedDates);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDate = {
            time: dateFormData.time,
            location: dateFormData.location,
            confirmed: dateFormData.confirmed,
            category: dateFormData.category,
            user_id: dateFormData.userId,
            relationship_id: dateFormData.relationshipId
        }
        fetch(`/dayts/${date.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedDate)
        })
            .then(r => r.json())
            .then(resDate => onUpdatedDate(resDate))
            .then(setOpen(!open))
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

export default UpdateDateForm;