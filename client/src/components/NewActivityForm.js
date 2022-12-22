import React from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { activityModalStateAtom, activityFormDataStateAtom, activitiesStateAtom } from '../recoil/atoms';



const NewActivityForm = () => {
    const [activityFormData, setActivityFormData] = useRecoilState(activityFormDataStateAtom);
    const setOpen = useSetRecoilState(activityModalStateAtom)
    const [activities, setActivities] = useRecoilState(activitiesStateAtom)

    const resetForm = () => {
        setActivityFormData((activityFormData) => ({
            title: '',
            category: '',
            location: '',
            description: '',
            image: '',
            estPrice: '',
            userId: '',
            relationshipId: ''
        }))
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setActivityFormData((activityFormData) => ({
            ...activityFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const activity = {
            title: activityFormData.title,
            category: activityFormData.category,
            location: activityFormData.location,
            description: activityFormData.description,
            image: activityFormData.image,
            est_price: activityFormData.estPrice,
            user_id: activityFormData.userId,
            relationship_id: activityFormData.relationshipId
        }
        fetch(`/activities`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(activity)
        })
            .then(r => r.json())
            .then(newActivity => setActivities([...activities, newActivity]))
            .then(setOpen(false))
            .then(resetForm())
    }

    return (
        <div className="New-date-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={activityFormData.title} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" value={activityFormData.category} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" name="location" value={activityFormData.location} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" value={activityFormData.description} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" value={activityFormData.image} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="est-price">Estimated Price:</label>
                    <input type="text" name="estPrice" value={activityFormData.estPrice} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="user">User:</label>
                    <input type="text" name="userId" value={activityFormData.userId} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="relationship">Relationship:</label>
                    <input type="text" name="relationshipId" value={activityFormData.relationshipId} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
};

export default NewActivityForm;