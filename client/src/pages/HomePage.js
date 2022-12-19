import React from "react";


function Home() {
  return(
    <div>
      <section>
        <h3>About</h3>
        <div>This is an app to help people come up with fun things, and store ideas, and plan them out. Also when you haven't had time to plan something fun, but what to do something fun, but aren't sure what you can checkout you ideas you've had previously.</div>
      </section>
      <section>
        <h4>Not a member?</h4>
        <button>Create an account</button>
      </section>
      <section>
        <h3>Features</h3>
        <div>
          <ul>
            <li>Search ideas</li>
            <li>Add activities</li>
            <li>Schedule your dates</li>
            <li>You can save activities you want to try later</li>
            <li>You can save activities to specific relationships</li>
            <li>The other person in each relationship you have can also do all these things</li>
            <li>You can both build out fun ideas together</li>
            <li>You can both save fun ideas y'all want to try together later</li>
          </ul>
        </div>
      </section>
      <section>
        <h3>Who's it for?</h3>
        <div>Anyone that wants to have a backlog of ideas to do with a friend, family member, romantic partner etc. </div>
      </section>
    </div>
  );
};

export default Home;