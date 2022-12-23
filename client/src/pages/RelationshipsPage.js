import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewRelationshipForm from '../components/NewRelationshipForm'
import { useRecoilState } from 'recoil'
import { relationshipModalStateAtom } from '../recoil/atoms'
import RelationshipDisplay from '../components/RelationshipDisplay';



function RelationshipsPage() {

  const [open, setOpen] = useRecoilState(relationshipModalStateAtom);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return(
    <div>
      <section>
        <RelationshipDisplay />
      </section>
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