import React from 'react';
import ActivitiesDisplay from '../components/ActivitiesDisplay';
import SearchActivities from "../components/SearchActivities";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewActivityForm from "../components/NewActivityForm"
import { useRecoilState } from 'recoil';
import { activityModalStateAtom } from '../recoil/atoms';



function ActivityPage() {
  const [open, setOpen] = useRecoilState(activityModalStateAtom);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return(
    <div>
      <section className='display'>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section className='search'>
        <h3>Search</h3>
        <SearchActivities />
        <button onClick={onOpenModal}>Add New</button>
        <Modal open={open} onClose={onCloseModal} center>
          <NewActivityForm />
        </Modal>
      </section>
    </div>
  );
};

export default ActivityPage;