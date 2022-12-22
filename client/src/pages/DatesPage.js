import React, { useState } from 'react';
import ActivitiesDisplay from '../components/ActivitiesDisplay'
import DateDisplay from "../components/DateDisplay";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewDateForm from '../components/NewDateForm';




function DatesPage() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return(
    <div>
      <section>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section>
        <h3>Dates</h3>
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