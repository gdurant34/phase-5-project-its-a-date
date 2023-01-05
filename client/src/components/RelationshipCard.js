import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import './RelationshipCard.css'
import { Modal } from 'react-responsive-modal';
import UpdateRelationshipForm from "./UpdateRelationshipFrom";
import DeleteRelationshipForm from "./DeleteRelationshipForm";
import { currentRelationshipStateAtom } from '../recoil/atoms';
import { useSetRecoilState, useRecoilState } from 'recoil';


function RelationshipCard({ relationship }) {

    const [openEdit, setEditOpen] = useState(false);
    const [openDelete, setDeleteOpen] = useState(false);
    const setCurrentRelationship = useSetRecoilState(currentRelationshipStateAtom);
    // const [currentRelationship, setCurrentRelationship] = useRecoilState(currentRelationshipStateAtom);

    const handleEditModal = () => setEditOpen(!openEdit);
    const handleDeleteModal = () => setDeleteOpen(!openDelete)

    const handleClick = () => {
        setCurrentRelationship(relationship)
    }

    // console.log(currentRelationship)

    return (
        <Card onClick={handleClick}>
            <section>
                <Card.Content
                    header={relationship.relationship_type}
                    meta={relationship.name}
                    description={relationship.email}
                />
            </section>
            <section>
                <button id='edit-btn' onClick={handleEditModal}>Edit</button>
                <Modal open={openEdit} onClose={handleEditModal} center>
                    <UpdateRelationshipForm relationship={relationship} setOpen={setEditOpen} open={openEdit} />
                </Modal>
            </section>
            <section>
                <button id='delete-btn' onClick={handleDeleteModal}>X</button>
                <Modal open={openDelete} onClose={handleDeleteModal} center>
                    <DeleteRelationshipForm relationship={relationship} setOpen={setDeleteOpen} open={openDelete} />
                </Modal>
            </section>
        </Card>
    );
};

export default RelationshipCard;