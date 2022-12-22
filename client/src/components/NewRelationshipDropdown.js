import React from "react";


const NewRelationshipDropdown = ({ handleDropdownChange }) => {


  return (
    <div>
      {/* <h2 className="mb-3"></h2> */}
      <select onChange={handleDropdownChange} className="form-select" name='relationshipType' >
        <option defaultValue>
          Select
        </option>
        <option value="Friend" name="relationshipType" >Friend</option>
        <option value="Family" name="relationshipType">Family</option>
        <option value="Romantic" name="relationshipType">Romantic</option>
      </select>
      {/* {selectValue && <h2 className="mt-3">{selectValue}</h2>} */}
    </div>
  );
};
export default NewRelationshipDropdown;
