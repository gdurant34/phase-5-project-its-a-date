import React from "react";
import ActivitiesDisplay from '../components/ActivitiesDisplay'
import DateDisplay from "../components/DateDisplay";


function DatesPage() {
  return(
    <div>
      <section>
        <h3>Activities</h3>
        <ActivitiesDisplay />
      </section>
      <section>
        <h3>Dates</h3>
        <DateDisplay />
        <button>Add New</button>
      </section>
    </div>
  );
};

export default DatesPage;