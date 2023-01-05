import React from 'react';
import ActivitiesDisplay from '../components/ActivitiesDisplay'
import DateDisplay from "../components/DateDisplay";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewDateForm from '../components/NewDateForm';
import { dateModalStateAtom, currentRelationshipStateAtom } from '../recoil/atoms';
import { useRecoilState, useRecoilValue } from 'recoil'



function DatesPage() {
  const [open, setOpen] = useRecoilState(dateModalStateAtom);
  const currentRelationship = useRecoilValue(currentRelationshipStateAtom);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return(
    <div>
      <section>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section>
      {!currentRelationship ? "All Dates" : <h3>Dates with {currentRelationship.name}</h3>}
        <DateDisplay />
        <button onClick={onOpenModal}>Add New</button>
        <Modal open={open} onClose={onCloseModal} center>
          <NewDateForm />
        </Modal>
      </section>
    </div>
  );
};

export default DatesPage;