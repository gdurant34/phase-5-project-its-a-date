import React from "react";
// import { Card, Image } from "semantic-ui-react";
import './ActivityCard.css'
import { Card } from 'semantic-ui-react';
import DateActivities from "./DateActivities";

function DateCard({ date }) {

    // console.log(date.activities)

    const activities = date.activities.map(activity => (
        <DateActivities key={activity.id} activity={activity} />
        // console.log(activity)
    ))

    // console.log(date.activities)

    return (
        <Card>
            <Card.Content>
                <Card.Header content={date.time} />
                <Card.Meta content={date.category} />
                <Card.Meta>
                    {activities}
                </Card.Meta>
                <Card.Description content={date.location} />

            </Card.Content>
        </Card>
    );
};

export default DateCard;