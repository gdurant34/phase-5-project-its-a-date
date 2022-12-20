import React from "react";
import ActivitiesDisplay from '../components/ActivitiesDisplay';
import SearchActivities from "../components/SearchActivities";
import { useNavigate } from 'react-router-dom';


function ActivityPage() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('new')
  }


  return(
    <div>
      <section>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section>
        <h3>Search</h3>
        <SearchActivities />
        <button onClick={handleClick}>Create New</button>
      </section>
    </div>
  );
};

export default ActivityPage;