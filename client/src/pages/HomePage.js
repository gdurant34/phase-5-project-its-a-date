import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import NewUserForm from '../components/NewUserForm';
import './HomePage.css'
import { useRecoilState } from 'recoil';
import { userModalStateAtom } from '../recoil/atoms'


function Home() {
  const [open, setOpen] = useRecoilState(userModalStateAtom);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <section className='about'>
        <h3 className='header'>About</h3>
        <div className='about-div'>This is an app to help people come up with fun things, and store ideas, and plan them out. Also when you haven't had time to plan something fun, but what to do something fun, but aren't sure what you can checkout you ideas you've had previously.</div>
      </section>
      <section className='create-account'>
        <h3 className='header'>Not a member?</h3>
        <button className='btn' onClick={onOpenModal}>Create an account</button>
        <Modal open={open} onClose={onCloseModal} center>
          <NewUserForm />
        </Modal>
      </section>
      <section className='features'>
        <h3 className='header'>Features</h3>
        <div>
          <ul>
            <li>Create activities</li>
            <li>Add activities to date</li>
            <li>You can save activities you want to try later</li>
            <li>You can edit your activities at any time</li>
            <li>You can manage your dates by relationship</li>
            <li>You can both save fun ideas y'all want to try together later</li>
          </ul>
        </div>
      </section>
      <></>
      <section className='who-for'>
        <h3 className='header'>Who's it for?</h3>
        <div>Anyone that wants to have a backlog of ideas to do with a friend, family member, romantic partner etc. </div>
      </section>
    </div>
  );
};

export default Home;