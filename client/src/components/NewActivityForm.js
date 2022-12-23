import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { activityModalStateAtom, activityFormDataStateAtom, activitiesStateAtom } from '../recoil/atoms';



const NewActivityForm = () => {
    const [activityFormData, setActivityFormData] = useRecoilState(activityFormDataStateAtom);
    const setOpen = useSetRecoilState(activityModalStateAtom)
    const [activities, setActivities] = useRecoilState(activitiesStateAtom)

    useEffect(() => {
        resetForm();
    }, [])

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
                    <h5>Title:</h5>
                    <label htmlFor="title" />
                    <input type="text" name="title" value={activityFormData.title} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Category:</h5>
                    <label htmlFor="category" />
                    <input type="text" name="category" value={activityFormData.category} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Location:</h5>
                    <label htmlFor="location" />
                    <input type="text" name="location" value={activityFormData.location} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Description:</h5>
                    <label htmlFor="description" />
                    <input type="text" name="description" value={activityFormData.description} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Image:</h5>
                    <label htmlFor="image" />
                    <input type="text" name="image" value={activityFormData.image} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Estimated Price:</h5>
                    <label htmlFor="est-price" />
                    <input type="text" name="estPrice" value={activityFormData.estPrice} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>User:</h5>
                    <label htmlFor="user" />
                    <input type="text" name="userId" value={activityFormData.userId} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h5>Relationship:</h5>
                    <label htmlFor="relationship" />
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