import React from "react";
import { currentUserStateAtom } from "../recoil/atoms";
import { useRecoilValue } from "recoil";


const RelationshipDropdownNewActivity = ({ handleDropdownChange }) => {

    const currentUser = useRecoilValue(currentUserStateAtom)

    const options = currentUser.relationships.map(relationship => (
        <option key={relationship.id} value={relationship.id} name={relationship.name}>{relationship.name}</option>
        ))

return (
    <div>
        <select onChange={handleDropdownChange} className="form-select" name='relationship' >
            <option defaultValue>
                Select
            </option>
            {options}
        </select>
    </div>
);
};
export default RelationshipDropdownNewActivity;