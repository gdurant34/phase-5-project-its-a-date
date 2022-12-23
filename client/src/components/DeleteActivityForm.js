import React from 'react'
import './ActivityCard.css'
import { useRecoilState } from 'recoil'
import { activitiesStateAtom } from '../recoil/atoms'


function DeleteActivityForm({ activity, open, setOpen }) {

    const [activities, setActivities] = useRecoilState(activitiesStateAtom)

    function onDelete(deletedActivity) {
        const updatedActivities = activities.filter(activity => activity.id !== deletedActivity.id);
        setActivities(updatedActivities);
      }

    const handleDelete = () => {
        fetch(`activities/${activity.id}`, {
            method: "DELETE"
        })
            .then(onDelete(activity))
    }

    const handleCancel = () => {
        setOpen(!open)
    }

    return (
        <section>
            <div>
                Are you sure you want to delete this activity?
            </div>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={handleCancel}>Cancel</button>
        </section>
    );
};

export default DeleteActivityForm;