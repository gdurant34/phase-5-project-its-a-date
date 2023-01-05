import React from "react";
import { currentUserStateAtom } from "../recoil/atoms";
import { useRecoilValue } from "recoil";


const ConfirmDropdownNewDate = ({ handleConfirmDropdownChange }) => {

    const currentUser = useRecoilValue(currentUserStateAtom)

    // console.log(dates)
    console.log(currentUser)

return (
    <div>
        <select onChange={handleConfirmDropdownChange} className="form-select" name='relationship' >
            <option defaultValue>
                Select
            </option>
            <option value='true' name='true'>True</option>
            <option value='false' name='false'>False</option>
        </select>
    </div>
);
};
export default  ConfirmDropdownNewDate;