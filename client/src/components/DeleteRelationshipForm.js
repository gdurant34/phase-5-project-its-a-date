import React from 'react'
import { useRecoilState } from 'recoil'
import { relationshipsStateAtom } from '../recoil/atoms'


function DeleteRelationshipForm({ relationship, open, setOpen }) {

    const [relationships, setRelationships] = useRecoilState(relationshipsStateAtom)

    function onDelete(deletedRelationship) {
        const updatedRelationships = relationships.filter(relationship => relationship.id !== deletedRelationship.id);
        setRelationships(updatedRelationships);
      }

    const handleDelete = () => {
        fetch(`relationships/${relationship.id}`, {
            method: "DELETE"
        })
            .then(onDelete(relationship))
    }

    const handleCancel = () => {
        setOpen(!open)
    }

    return (
        <section>
            <div>
                Are you sure you want to delete this relationship?
            </div>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={handleCancel}>Cancel</button>
        </section>
    );
};

export default DeleteRelationshipForm;