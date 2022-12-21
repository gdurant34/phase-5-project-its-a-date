import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewRelationshipForm from '../components/NewRelationshipForm'


function RelationshipsPage() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return(
    <div>
      <section>You & Romantic(name)</section>
      <section>You & Friend(name)</section>
      <section>You & Mother(name)</section>
      <section>
      <button onClick={onOpenModal}>New Relationship</button>
        <Modal open={open} onClose={onCloseModal} center>
          <NewRelationshipForm />
        </Modal>
        <br/>
        <button>Delete Relationship</button>
      </section>
    </div>
  );
};

export default RelationshipsPage;