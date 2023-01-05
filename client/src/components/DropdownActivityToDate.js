import React from "react";
import { activitiesStateAtom } from "../recoil/atoms";
import { useRecoilState } from 'recoil';
import { Dropdown } from 'semantic-ui-react'


const DropdownActivityToDate = ({ date, setOpen, open }) => {

  const [activities, setActivities] = useRecoilState(activitiesStateAtom)

  const handleDropdownChange = (e) => {
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     setRelationshipFormData((relationshipFormData) => ({
    //         ...relationshipFormData,
    //         [name]: value
    //     }))
  }

  const options = activities.map(activity => {
    return (
      { key: activity.title, text: activity.title, value: activity.title }
    )
  })

  return (
    <div>
      <form>
        <Dropdown placeholder='Select' fluid multiple selection options={options} />
        <div>
          <button className='button' type="submit" />
        </div>
      </form>
    </div>
  );
};
export default DropdownActivityToDate;