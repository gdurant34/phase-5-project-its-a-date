import React from 'react';
import 'react-responsive-modal/styles.css';
import './RelationshipPage.css';
import { Modal } from 'react-responsive-modal';
import NewRelationshipForm from '../components/NewRelationshipForm'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { relationshipModalStateAtom, currentRelationshipStateAtom } from '../recoil/atoms'
import RelationshipDisplay from '../components/RelationshipDisplay';




function RelationshipsPage() {

  const [open, setOpen] = useRecoilState(relationshipModalStateAtom);
  // const setCurrentRelationship = useSetRecoilState(currentRelationshipStateAtom);
  const [currentRelationship, setCurrentRelationship] = useRecoilState(currentRelationshipStateAtom);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleClick = () => {
    setCurrentRelationship(null)
  }

// console.log(currentRelationship)

  return(
    <div>
      <section className='current-relationship'>
        {!currentRelationship ? "All Relationships" : <div>{currentRelationship.name}</div>}
      </section>
      <section>
        <button id='all-relationships-btn' className='btn' onClick={handleClick}>All Relationships</button>
      </section>
      <section>
        <RelationshipDisplay />
      </section>
      <section>
      <button id='new-relationship-btn' className='btn' onClick={onOpenModal}>New Relationship</button>
        <Modal open={open} onClose={onCloseModal} center>
          <NewRelationshipForm />
        </Modal>
      </section>
    </div>
  );
};

export default RelationshipsPage;