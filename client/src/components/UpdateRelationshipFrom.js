import React, { useEffect } from "react";
import NewRelationshipDropdown from './NewRelationshipDropdown';
import { useRecoilState } from 'recoil'
import { relationshipFormDataStateAtom, relationshipsStateAtom } from "../recoil/atoms";


const UpdateRelationshipForm = ({ relationship, setOpen, open }) => {

    const [relationshipFormData, setRelationshipFormData] = useRecoilState(relationshipFormDataStateAtom);
    const [relationships, setRelationships] = useRecoilState(relationshipsStateAtom)

    
    useEffect(() => {
        setRelationshipFormData({
            relationshipType: relationship.relationship_type,
            name: relationship.name,
            email: relationship.email
        })
    }, [])

    const handleDropdownChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRelationshipFormData((relationshipFormData) => ({
            ...relationshipFormData,
            [name]: value
        }))
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRelationshipFormData((relationshipFormData) => ({
            ...relationshipFormData,
            [name]: value
        }))
    }

    const onUpdatedRelationship = (resRelationship) => {
        const updatedRelationships = relationships.map(relationship => relationship.id === resRelationship.id ? resRelationship : relationship);
        setRelationships(updatedRelationships);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateRelationship = {
            relationship_type: relationshipFormData.relationshipType,
            name: relationshipFormData.name,
            email: relationshipFormData.email
        }
        fetch(`/relationships/${relationship.id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateRelationship)
        })
            .then(r => r.json())
            .then(resRelationship => onUpdatedRelationship(resRelationship))
            .then(setOpen(!open))
    }


    return (
        <div className="New-relationship-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <h4>Relationship Type</h4>
                    <label htmlFor="relationshipType" />
                    <NewRelationshipDropdown handleDropdownChange={handleDropdownChange} />
                </div>
                <div>
                    <h4>Name</h4>
                    <label htmlFor="name" />
                    <input type="text" name="name" value={relationshipFormData.name} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <h4>Email</h4>
                    <label htmlFor="email" />
                    <input type="text" name="email" value={relationshipFormData.email} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
};

export default UpdateRelationshipForm;