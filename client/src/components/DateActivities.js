import React from "react";
import './ActivityCard.css'

function DateActivities({ activity }) {

    return (
        <ul>
            <li>Activity: {activity.title}</li>
            <br />
            <li>Description: {activity.description}</li>
            <br />
            <li>Estimated Cost: ${activity.est_price}</li>
        </ul>
    );
};

export default DateActivities;