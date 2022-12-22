import React, { useEffect } from "react";
import './DateDisplay.css';
import { useRecoilState } from 'recoil';
import { datesStateAtom } from '../recoil/atoms';
import DateCard from "./DateCard";
import { Card } from 'semantic-ui-react';


function DateDisplay() {

  const [dates, setDates] = useRecoilState(datesStateAtom)

  useEffect(() => {
    fetch('/dayts')
      .then(r => r.json())
      .then(setDates)
  }, [])

  // const cards = dates.map(date => (
  //   <DateCard key={date.id} date={date} />
  // ))

  return (
    <div className="container">
      <Card.Group itemsPerRow={5}>
        {dates.map(date => (
          <DateCard key={date.id} date={date}
          />
        ))}
      </Card.Group>
    </div>
  );
};

export default DateDisplay;