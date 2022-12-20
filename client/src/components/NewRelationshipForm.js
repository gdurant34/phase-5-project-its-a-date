import React from "react";

const NewRelationshipForm = () => {

return(
    <div className="New-relationship-card">
        <form >
            <div>
                <label htmlFor="relationshipType">Relationship Type:</label>
                <input type="text" name="relationshipType"  />
            </div>
            <div>
                <input className='button' type="submit" />
            </div>
        </form>
    </div>
    )
};

export default NewRelationshipForm;