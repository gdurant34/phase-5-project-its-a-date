import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import './RelationshipCard.css'
import { Modal } from 'react-responsive-modal';
import UpdateRelationshipForm from "./UpdateRelationshipFrom";
import DeleteRelationshipForm from "./DeleteRelationshipForm";


function RelationshipCard({ relationship,  }) {

    const [openEdit, setEditOpen] = useState(false);
    const [openDelete, setDeleteOpen] = useState(false);
    const handleEditModal = () => setEditOpen(!openEdit);
    const handleDeleteModal = () => setDeleteOpen(!openDelete)

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
                <button onClick={handleEditModal}>Edit</button>
                <Modal open={openEdit} onClose={handleEditModal} center>
                    <UpdateRelationshipForm relationship={relationship} setOpen={setEditOpen} open={openEdit} />
                </Modal>
            </section>
            <section>
                <button onClick={handleDeleteModal}>X</button>
                <Modal open={openDelete} onClose={handleDeleteModal} center>
                    <DeleteRelationshipForm relationship={relationship} setOpen={setDeleteOpen} open={openDelete} />
                </Modal>
            </section>
        </Card>
    );
};

export default RelationshipCard;