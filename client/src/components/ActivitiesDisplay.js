import React, { useEffect } from "react";
import { CardGroup } from "semantic-ui-react";
import ActivityCard from "./ActivityCard";
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  activitiesStateAtom,
  currentUserStateAtom,
  currentRelationshipStateAtom
} from '../recoil/atoms'




const ActivitiesDisplay = () => {


  const [activities, setActivities] = useRecoilState(activitiesStateAtom)
  const currentUser = useRecoilValue(currentUserStateAtom)
  const currentRelationship = useRecoilValue(currentRelationshipStateAtom)

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

  const filteredRelationships = activities.map(activity => {
    if (currentRelationship !== null && activity.relationship.id === currentRelationship.id) {
      return <ActivityCard key={activity.id} activity={activity} />
    }
  })

  return (
    <div className="container">
      <CardGroup itemsPerRow={5} >
        {!currentRelationship ? cards : filteredRelationships}
      </CardGroup>
    </div>
  );
};

export default ActivitiesDisplay;