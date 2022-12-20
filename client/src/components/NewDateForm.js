import React from "react";

const NewDateForm = () => {

return(
    <div className="New-date-card">
        <form >
            <div>
                <label htmlFor="time">Time:</label>
                <input type="text" name="time"  />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input type="text" name="location"  />
            </div>
            <div>
                <label htmlFor="confirmed">Confirmed:</label>
                <input type="text" name="confirmed"  />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input type="integer" name="category"  />
            </div>
            <div>
                <label htmlFor="user-id">User:</label>
                <input type="string" name="user-id"  />
            </div>
            <div>
                <label htmlFor="relationship-id">Relationship:</label>
                <input type="string" name="relationship-id"  />
            </div>
            <div>
                <input className='button' type="submit" />
            </div>
        </form>
    </div>
    )
};

export default NewDateForm;