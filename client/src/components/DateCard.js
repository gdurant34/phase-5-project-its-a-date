import React, { useState } from "react";
import './DateCard.css';
import { Card } from 'semantic-ui-react';
import DateActivities from "./DateActivities";
import UpdateDateForm from "./UpdateDateFrom";
import { Modal } from 'react-responsive-modal';
import DeleteDateForm from "./DeleteDateForm";
import DropdownActivityToDate from "./DropdownActivityToDate";


function DateCard({ date }) {

    const [openEdit, setEditOpen] = useState(false);
    const [openDelete, setDeleteOpen] = useState(false);
    const [openAddActivity, setOpenAddActivity] = useState(false);

    const handleEditModal = () => setEditOpen(!openEdit);
    const handleDeleteModal = () => setDeleteOpen(!openDelete)
    const handleAddActivityModal = () => setOpenAddActivity(!openAddActivity)

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
                <button id='edit-btn' onClick={handleEditModal}>Edit</button>
                <Modal open={openEdit} onClose={handleEditModal} center>
                    <UpdateDateForm date={date} setOpen={setEditOpen} open={openEdit} />
                </Modal>
            </section>
            <section>
                <button id='add-activity-btn' className='card-btns' onClick={handleAddActivityModal}>Add Activity</button>
                <Modal classNames='add-activity-modal' open={openAddActivity} onClose={handleAddActivityModal} center>
                    <DropdownActivityToDate date={date} setOpen={setOpenAddActivity} open={openAddActivity} />
                </Modal>
            </section>
            <section>
                <button id='delete-btn' onClick={handleDeleteModal}>X</button>
                <Modal open={openDelete} onClose={handleDeleteModal} center>
                    <DeleteDateForm date={date} setOpen={setDeleteOpen} open={openDelete} />
                </Modal>
            </section>
        </Card>
    );
};

export default DateCard;