import React, { useEffect } from "react";
import { CardGroup } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  activitiesStateAtom,
  currentUserStateAtom
} from '../recoil/atoms'




const ActivitiesDisplay = () => {


  const [activities, setActivities] = useRecoilState(activitiesStateAtom)
  const currentUser = useRecoilValue(currentUserStateAtom)

  useEffect(() => {
    if (currentUser) {
      fetch('/activities')
        .then(r => r.json())
        .then(setActivities)
    }
  }, [currentUser])

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