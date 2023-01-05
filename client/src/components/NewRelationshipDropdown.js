import React from "react";


const NewRelationshipDropdown = ({ handleDropdownChange }) => {


  return (
    <div>
      <select onChange={handleDropdownChange} className="form-select" name='relationshipType' >
        <option defaultValue>
          Select
        </option>
        <option value="Friend" name="relationshipType" >Friend</option>
        <option value="Family" name="relationshipType">Family</option>
        <option value="Romantic" name="relationshipType">Romantic</option>
      </select>
    </div>
  );
};
export default NewRelationshipDropdown;
