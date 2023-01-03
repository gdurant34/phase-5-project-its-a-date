import React, { useEffect, useState } from "react";
import { activitiesStateAtom } from "../recoil/atoms";
import { datesStateAtom } from "../recoil/atoms";
import { useRecoilState, useResetRecoilState } from 'recoil';
import Select from 'react-select';


const DropdownUpdateDateActivities = ({ date, setOpen, open }) => {

  const [activities, setActivities] = useRecoilState(activitiesStateAtom);
  const setDates = useResetRecoilState(datesStateAtom);
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    const startingValues = date.activities.map(activity => {
      return(
        {
          value: activity.id,
          label: activity.title,
        }
      )
    })
    setSelected(startingValues)
  }, [])

  // console.log(selected)
  console.log(date.dayt_activities[1])
  // console.log(activities)
  // console.log(date["dayt_activities"])

  const handleDropdownChange = (e) => {
    setSelected(e)
    // filter out duplicates then set selected
  }

  const options = activities.map(activity => {
    return (
      { value: activity.id, label: activity.title }
    )
  })

const handleClick = () => {
  selected.map(activity => {
    const dateActivity = {
      dayt_id: date.id,
      activity_id: activity.value
    }

    fetch(`dayts${date.id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dateActivity)
    })
      .then(r => r.json())
      .then(setDates)
      .then(setOpen(!open))
  })
}

  return (
    <div>
        <h3>Pick Your Activity / Activities</h3>
        <Select
          isSearchable={true}
          isMulti={true}
          value={selected}
          onChange={handleDropdownChange}
          options={options}
        />
        <button onClick={handleClick}>Save</button>
    </div>
  );
};
export default DropdownUpdateDateActivities;