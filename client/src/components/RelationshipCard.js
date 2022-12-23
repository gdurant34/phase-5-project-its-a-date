import React from "react";
import { Card } from "semantic-ui-react";
import './RelationshipCard.css'

function RelationshipCard({ relationship }) {

    // console.log(activity)


    return (
        <Card>
            <Card.Content
                header={relationship.relationship_type}
                meta={relationship.name}
                description={relationship.email}
            />
        </Card>
    );
};

export default RelationshipCard;