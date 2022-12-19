import React from "react";
import ActivitiesDisplay from '../components/ActivitiesDisplay'
import SearchActivities from "../components/SearchActivities";


function ActivityPage() {
  return(
    <div>
      <section>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section>
        <h3>Search</h3>
        <SearchActivities />
        <button>Create New</button>
      </section>
    </div>
  );
};

export default ActivityPage;