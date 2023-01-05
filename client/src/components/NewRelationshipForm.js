import React, { useEffect } from "react";
import NewRelationshipDropdown from './NewRelationshipDropdown';
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
    relationshipFormDataStateAtom,
    relationshipModalStateAtom,
    relationshipsStateAtom, 
} from "../recoil/atoms";


const NewRelationshipForm = () => {

    const [relationshipFormData, setRelationshipFormData] = useRecoilState(relationshipFormDataStateAtom);
    const setOpen = useSetRecoilState(relationshipModalStateAtom)
    const [relationships, setRelationships] = useRecoilState(relationshipsStateAtom)

    useEffect(() => {
        resetForm();
    }, [])

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const relationship = {
            relationship_type: relationshipFormData.relationshipType,
            name: relationshipFormData.name,
            email: relationshipFormData.email
        }
        // console.log(relationship)
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

export default NewRelationshipForm;