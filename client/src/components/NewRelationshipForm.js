import React from "react";
import NewRelationshipDropdown from './NewRelationshipDropdown';
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
    relationshipFormDataStateAtom,
    relationshipModalStateAtom,
    relationshipsStateAtom
} from "../recoil/atoms";


const NewRelationshipForm = () => {

    const [relationshipFormData, setRelationshipFormData] = useRecoilState(relationshipFormDataStateAtom);
    const setOpen = useSetRecoilState(relationshipModalStateAtom)
    const [relationships, setRelationships] = useRecoilState(relationshipsStateAtom)

    const resetForm = () => {
        setRelationshipFormData((relationshipFormData) => ({
            relationshipType: '',
            name: '',
            email: ''
        }))
    }

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

    // const data = useRecoilValue(relationshipFormDataStateAtom)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data)
        const relationship = {
            relationship_type: relationshipFormData.relationshipType,
            name: relationshipFormData.name,
            email: relationshipFormData.email
        }
        fetch(`/relationships`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(relationship)
        })
            .then(r => r.json())
            .then(newRelationship => setRelationships([...relationships, newRelationship]))
            .then(setOpen(false))
            .then(resetForm())
    }


    return (
        <div className="New-relationship-card">
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="relationshipType">Relationship Type:</label>
                    <NewRelationshipDropdown handleDropdownChange={handleDropdownChange} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={relationshipFormData.name} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={relationshipFormData.email} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
};

export default NewRelationshipForm;