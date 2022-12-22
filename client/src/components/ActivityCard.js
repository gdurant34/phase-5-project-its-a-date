import React from "react";
import { Card, Image } from "semantic-ui-react";
import './ActivityCard.css'

function ActivityCard({ activity }) {

    // console.log(activity)


    return (
        <Card>
            <Image src={activity.image} />
            <div>
                <Card.Content
                    header={activity.title}
                    meta={activity.category}
                    description={activity.description}
                />
            </div>
        </Card>
    );
};

export default ActivityCard;