import React, { useState } from "react";
import { activitiesStateAtom } from "../recoil/atoms";
import { useRecoilState } from 'recoil';
import Select from 'react-select';


const DropdownActivityToDate = ({ date, setOpen, open }) => {

  const [activities, setActivities] = useRecoilState(activitiesStateAtom);
  const [selected, setSelected] = useState([]);

  // const handleDropdownChange = (e) => {
  //   //     const value = e.target.value;
  //   //     const name = e.target.name;
  //   //     setRelationshipFormData((relationshipFormData) => ({
  //   //         ...relationshipFormData,
  //   //         [name]: value
  //   //     }))
  // }

  const handleDropdownChange = (e) => {
    setSelected(e)
  }

  const options = activities.map(activity => {
    return (
      { value: activity.id, label: activity.title }
    )
  })

const handleClick = () => {
  const dateActivity = {
    
  }
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
export default DropdownActivityToDate;

