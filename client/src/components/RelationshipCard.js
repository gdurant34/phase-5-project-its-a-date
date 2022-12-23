import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import './RelationshipCard.css'
import { Modal } from 'react-responsive-modal';
import UpdateRelationshipForm from "./UpdateRelationshipFrom";


function RelationshipCard({ relationship,  }) {

    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    return (
        <Card>
            <section>
                <Card.Content
                    header={relationship.relationship_type}
                    meta={relationship.name}
                    description={relationship.email}
                />
            </section>
            <section>
                <button onClick={handleModal}>Edit</button>
                <Modal open={open} onClose={handleModal} center>
                    <UpdateRelationshipForm relationship={relationship} setOpen={setOpen} open={open} />
                </Modal>
            </section>
        </Card>
    );
};

export default RelationshipCard;