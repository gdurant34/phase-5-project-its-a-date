import React from "react";
import DatesPage from "./DatesPage";
import RelationshipsPage from './RelationshipsPage';


const Dashboard = () => {

  return (
    <div>
      <section>
        {/* <h3>Upcoming Dates</h3> */}
        <DatesPage />
      </section>
      <section>
        {/* <h3>Relationships</h3> */}
        <RelationshipsPage />
      </section>
      {/* <section>
        <h3>Suggested Dates</h3>
      </section>
      <section>
        <h3>Messages</h3>
      </section> */}
    </div>
  );
};

export default Dashboard;