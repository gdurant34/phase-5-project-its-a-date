import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { activityFormDataStateAtom, activitiesStateAtom, currentUserStateAtom } from '../recoil/atoms';
import RelationshipDropdownNewActivity from "./RelationshipDropdownNewActivity";



const UpdateActivityForm = ({ activity, setOpen, open }) => {

    const [activityFormData, setActivityFormData] = useRecoilState(activityFormDataStateAtom);
    const [activities, setActivities] = useRecoilState(activitiesStateAtom)
    const currentUser = useRecoilValue(currentUserStateAtom);


    useEffect(() => {
        setActivityFormData({
            title: activity.title,
            category: activity.category,
            location: activity.location,
            description: activity.description,
            image: activity.image,
            estPrice: activity.est_price,
            relationshipId: activity.relationship.id
        })
    }, [])

    const handleDropdownChange = (e) => {
        const value = e.target.value;
        const name = "relationshipId";
        setActivityFormData((activityFormData) => ({
            ...activityFormData,
            [name]: value
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

    const onUpdatedActivity = (resActivity) => {
        const updatedActivities = activities.map(activity => activity.id === resActivity.id ? resActivity : activity);
        setActivities(updatedActivities);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedActivity = {
            title: activityFormData.title,
            category: activityFormData.category,
            location: activityFormData.location,
            description: activityFormData.description,
            image: activityFormData.image,
            est_price: activityFormData.estPrice,
            user_id: currentUser.id,
            relationship_id: activityFormData.relationshipId
        }
        fetch(`/activities/${activity.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedActivity)
        })
            .then(r => r.json())
            .then(resActivity => onUpdatedActivity(resActivity))
            .then(setOpen(!open))
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
                    <h5>Relationship:</h5>
                    <label htmlFor="relationship" />
                    <RelationshipDropdownNewActivity handleDropdownChange={handleDropdownChange} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
};

export default UpdateActivityForm;