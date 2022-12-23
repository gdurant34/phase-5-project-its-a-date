import React, { useState } from "react";
import './ActivityCard.css'
import { Card } from 'semantic-ui-react';
import DateActivities from "./DateActivities";
import UpdateDateForm from "./UpdateDateFrom";
import { Modal } from 'react-responsive-modal';


function DateCard({ date }) {

    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    const activities = date.activities.map(activity => (
        <DateActivities key={activity.id} activity={activity} />
    ))

    return (
        <Card>
            <section>
                <Card.Content>
                    <Card.Header content={date.time} />
                    <Card.Meta content={date.category} />
                    <Card.Meta>
                        {activities}
                    </Card.Meta>
                    <Card.Description content={date.location} />
                </Card.Content>
            </section>
            <section>
                <button onClick={handleModal}>Edit</button>
                <Modal open={open} onClose={handleModal} center>
                    <UpdateDateForm date={date} setOpen={setOpen} open={open} />
                </Modal>
            </section>
        </Card>
    );
};

export default DateCard;