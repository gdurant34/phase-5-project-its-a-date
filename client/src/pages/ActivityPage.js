import React, { useState } from 'react';
import ActivitiesDisplay from '../components/ActivitiesDisplay';
import SearchActivities from "../components/SearchActivities";
// import { useNavigate } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewActivityForm from "../components/NewActivityForm";


function ActivityPage() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   navigate('new')
  // }


  return(
    <div>
      <section className='display'>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section className='search'>
        <h3>Search</h3>
        <SearchActivities />
        <button onClick={onOpenModal}>Create an account</button>
        <Modal open={open} onClose={onCloseModal} center>
          <NewActivityForm />
        </Modal>
      </section>
    </div>
  );
};

export default ActivityPage;