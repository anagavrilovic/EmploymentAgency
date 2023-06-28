import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import classes from './Search.module.css';

function Search() {

    const [mandatorySearchInput, setMandatorySearchInput] = useState({text: "", parameter: ""});
    const [optionalSearchInputs, setOptionalSearchInputs] = useState([]);

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
    }

    function handleSelectMandatorySearchField(event) {

    }

    function handleSelectOperation(event) {

    }

    function handleSelectOptionalSearchField(event) {

    }

    function handleClickRemoveOptional(searchInput) {
        console.log(searchInput)
        setOptionalSearchInputs(optionalSearchInputs.filter(item => item.id !== searchInput.id));
    }

    function handleClickAddField() {
        var newField = {
            id: uuidv4(),
            operation: "AND",
            input: "",
            parameter: ""
        }; 
        console.log(newField);

        setOptionalSearchInputs(optionalSearchInputs => [...optionalSearchInputs, newField])
    }

    function handleClickClearFields() {

    }

    function handleClickSearch() {

    }

    return (
        <div className={classes.page}>
            <div className={`${classes.background}`}>
                <h1 className={classes.title}> FIND CANDIDATES </h1>
                <p className={classes.description}>
                    Our advanced search functionality allows you to easily find candidates based on specific criteria such as name, 
                    education degree, CV content, and motivational letter content. Streamline your hiring process and discover the perfect 
                    candidates that match your requirements with just a few clicks. Or 
                </p>
                <button className={classes.backToHomeButton} onClick={goToHomepage}>
                    Go back to homepage
                </button>

                <div className={classes.form}>
                    <div className={classes.mandatorySearchParam}>
                        <input type="text" className={classes.mandatorySearchInput} />
                        <select name="Field" defaultValue="" className={classes.mandatorySearchSelect} onChange={handleSelectMandatorySearchField} >
                            <option value="" disabled>Choose Parameter</option>
                            <option value="FirstName" >First Name</option>
                            <option value="LastName" >Last Name</option>
                            <option value="EducationDegree" >Education Degree</option>
                            <option value="CV" >CV</option>
                            <option value="MotivationalLetter">Motivational Letter</option>
                        </select>
                    </div>

                    {optionalSearchInputs.map((s, index) => ( 
                        <div className={classes.optionalSearchParam} key={index}> 
                            <select name="Operation" defaultValue="AND" className={classes.operationSelect} onChange={handleSelectOperation} >
                                <option value="AND" >AND</option>
                                <option value="OR" >OR</option>
                            </select>
                            <input type="text" className={classes.optionalSearchInput} />
                            <select name="Field" defaultValue="" className={classes.optionalSearchSelect} onChange={handleSelectOptionalSearchField} >
                                <option value="" disabled>Choose Parameter</option>
                                <option value="FirstName" >First Name</option>
                                <option value="LastName" >Last Name</option>
                                <option value="EducationDegree" >Education Degree</option>
                                <option value="CV" >CV</option>
                                <option value="MotivationalLetter">Motivational Letter</option>
                            </select>
                            <button className={classes.removeOptionalSearch} onClick={() => handleClickRemoveOptional(s)}>X</button>
                        </div> ) 
                    )}

                    <div className={classes.options}>
                        <label className={classes.addField} onClick={handleClickAddField}> + Add Another Field </label>
                        <label> | </label>
                        <label className={classes.clearFields} onClick={handleClickClearFields}> Clear All Fields </label>
                    </div>

                    <button className={classes.searchButton} onClick={handleClickSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search;