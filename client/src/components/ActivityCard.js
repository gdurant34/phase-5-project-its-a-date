import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import { Modal } from 'react-responsive-modal';
import './ActivityCard.css'
import UpdateActivityForm from "./UpdateActivityForm";

function ActivityCard({ activity }) {
    
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);


    return (
        <Card>
            <Image src={activity.image} />
            <section>
                <Card.Content
                    header={activity.title}
                    meta={activity.category}
                    description={activity.description}
                />
            </section>
            <section>
                <button onClick={handleModal}>Edit</button>
                <Modal open={open} onClose={handleModal} center>
                    <UpdateActivityForm activity={activity} setOpen={setOpen} open={open} />
                </Modal>
            </section>
        </Card>
    );
};

export default ActivityCard;