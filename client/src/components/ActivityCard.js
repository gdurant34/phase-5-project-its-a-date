import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import { Modal } from 'react-responsive-modal';
import './ActivityCard.css'
import UpdateActivityForm from "./UpdateActivityForm";
import DeleteActivityForm from "./DeleteActivityForm";


function ActivityCard({ activity }) {
    
    const [openEdit, setEditOpen] = useState(false);
    const [openDelete, setDeleteOpen] = useState(false);
    const handleEditModal = () => setEditOpen(!openEdit);
    const handleDeleteModal = () => setDeleteOpen(!openDelete)


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
                <button onClick={handleEditModal}>Edit</button>
                <Modal open={openEdit} onClose={handleEditModal} center>
                    <UpdateActivityForm activity={activity} setOpen={setEditOpen} open={openEdit} />
                </Modal>
            </section>
            <section>
                <button onClick={handleDeleteModal}>X</button>
                <Modal open={openDelete} onClose={handleDeleteModal} center>
                    <DeleteActivityForm activity={activity} setOpen={setDeleteOpen} open={openDelete} />
                </Modal>
            </section>
        </Card>
    );
};

export default ActivityCard;