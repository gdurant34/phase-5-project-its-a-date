import React, { useEffect } from "react";
import { CardGroup } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";
import { useRecoilState } from 'recoil';
import { activitiesStateAtom } from '../recoil/atoms'



function ActivitiesDisplay() {

  const [activities, setActivities] = useRecoilState(activitiesStateAtom)

  useEffect(() => {
    fetch('/activities')
      .then(r => r.json())
      .then(setActivities)
  }, [])

  const cards = activities.map(activity => (
    <ActivityCard key={activity.id} activity={activity} />
  ))

  return (
    <div className="container">
      <CardGroup itemsPerRow={5} >
        {cards}
      </CardGroup>
    </div>
  );
};

export default ActivitiesDisplay;