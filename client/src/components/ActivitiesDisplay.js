import React, { useState, useEffect } from "react";
// import { Card } from "semantic-ui-react";


function ActivitiesDisplay() {

  const [activities, setActivities] = useState({})

  useEffect(() => {
    fetch('/activities')
      .then(r => r.json())
      .then(setActivities)
  }, [])
  console.log(activities)

  return(
    <div>
    
    </div>
    );
};

export default ActivitiesDisplay;