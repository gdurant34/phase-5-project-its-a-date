import React from 'react'
import { useRecoilState } from 'recoil'
import { datesStateAtom } from '../recoil/atoms'


function DeleteDateForm({ date, open, setOpen }) {

    const [dates, setDates] = useRecoilState(datesStateAtom)
    
    function onDelete(deletedDate) {
        const updatedDates = dates.filter(date => date.id !== deletedDate.id);
        setDates(updatedDates);
      }

    const handleDelete = () => {
        fetch(`dayts/${date.id}`, {
            method: "DELETE"
        })
            .then(onDelete(date))
    }

    const handleCancel = () => {
        setOpen(!open)
    }

    return (
        <section>
            <div>
                Are you sure you want to delete this activity?
            </div>
            <button onClick={handleDelete}>Yes</button>
            <button onClick={handleCancel}>Cancel</button>
        </section>
    );
};

export default DeleteDateForm;