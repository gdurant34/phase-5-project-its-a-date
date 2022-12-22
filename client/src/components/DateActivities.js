import React from "react";
import './ActivityCard.css'

function DateActivities({ activity }) {

    return (
        <ul>
            <li>{activity.title}</li>
            <br />
            <li>{activity.description}</li>
            <br />
            <li>{activity.est_price}</li>
        </ul>
    );
};

export default DateActivities;