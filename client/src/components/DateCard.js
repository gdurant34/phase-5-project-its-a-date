import React from "react";
// import { Card, Image } from "semantic-ui-react";
import './ActivityCard.css'
import { Card } from 'semantic-ui-react';

function DateCard({ date }) {

    console.log(date)


    return (
        <Card>
            <Card.Content
                    header={date.dayt_activities[1]}
                    meta={date.category}
                    description={date.location}
                />
        </Card>
    );
};

export default DateCard;