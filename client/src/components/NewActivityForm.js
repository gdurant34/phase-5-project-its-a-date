import React from "react";

const NewActivityForm = () => {


return(
    <div className="New-date-card">
        <form  >
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title"  />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input type="text" name="category"  />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input type="text" name="location"  />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description"  />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="text" name="image"  />
            </div>
            <div>
                <label htmlFor="est-price">Estimated Price:</label>
                <input type="integer" name="est-price"  />
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

export default NewActivityForm;