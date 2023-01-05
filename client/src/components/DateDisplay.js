import React, { useEffect } from "react";
import './DateDisplay.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { datesStateAtom } from '../recoil/atoms';
import DateCard from "./DateCard";
import { Card } from 'semantic-ui-react';
import { currentUserStateAtom, currentRelationshipStateAtom } from '../recoil/atoms'


const DateDisplay = () => {

  const [dates, setDates] = useRecoilState(datesStateAtom)
  const currentUser = useRecoilValue(currentUserStateAtom)
  const currentRelationship = useRecoilValue(currentRelationshipStateAtom)


  useEffect(() => {
    if (currentUser) {
      fetch('/dayts')
        .then(r => r.json())
        .then(setDates)
    }
  }, [currentUser])

  const cards = dates.map(date => (
    <DateCard key={date.id} date={date} />
  ))

  const filteredRelationships = dates.map(date => {
    if (currentRelationship !== null && date.relationship.id === currentRelationship.id) {
      return <DateCard key={date.id} date={date} />
    }
  })

  return (
    <div className="container">
      <Card.Group itemsPerRow={3}>
        {!currentRelationship ? cards : filteredRelationships}
      </Card.Group>
    </div>
  );
};

export default DateDisplay;