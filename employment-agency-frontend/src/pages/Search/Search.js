import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import classes from './Search.module.css';

function Search() {

    const [mandatorySearchInput, setMandatorySearchInput] = useState({text: "", parameter: "", select: false});
    const [optionalSearchInputs, setOptionalSearchInputs] = useState([]);

    //useEffect(() => { console.log(mandatorySearchInput) }, [mandatorySearchInput])

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
    }

    function handleMandatorySearchInputChange(event) {
        setMandatorySearchInput({...mandatorySearchInput, "text": event.target.value});
    }

    function handleSelectMandatorySearchField(event) {
        if(event.target.value === "EducationDegree"){
            setMandatorySearchInput({...mandatorySearchInput, "parameter": event.target.value, "select": true, "text": ""});
        } else if (mandatorySearchInput.select) {
            setMandatorySearchInput({...mandatorySearchInput, "parameter": event.target.value, "select": false, "text": ""});
        } else {
            setMandatorySearchInput({...mandatorySearchInput, "parameter": event.target.value, "select": false});
        }
    }

    function handleMandatoryEducationDegreeSelect(event) {
        setMandatorySearchInput({...mandatorySearchInput, "text": event.target.value});
    }

    function handleSelectOperation(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 
        newArray[index] = {...searchInput, "operation": event.target.value }; 
        setOptionalSearchInputs(newArray);
    }

    function handleOptionalSearchInputChange(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 
        newArray[index] = {...searchInput, "text": event.target.value }; 
        setOptionalSearchInputs(newArray);
    }

    function handleOptionalEducationDegreeSelect(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 
        newArray[index] = {...searchInput, "text": event.target.value }; 
        setOptionalSearchInputs(newArray);
    }

    function handleSelectOptionalSearchField(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 

        if(event.target.value === "EducationDegree") {
            newArray[index] = {...searchInput, "parameter": event.target.value, "select": true, "text": "" }; 
        } else if(searchInput.select) {
            newArray[index] = {...searchInput, "parameter": event.target.value, "select": false, "text": ""}; 
        } else {
            newArray[index] = {...searchInput, "parameter": event.target.value, "select": false}; 
        }
        
        setOptionalSearchInputs(newArray);
    }

    function handleClickRemoveOptional(searchInput) {
        console.log(searchInput)
        setOptionalSearchInputs(optionalSearchInputs.filter(item => item.id !== searchInput.id));
    }

    function handleClickAddField() {
        var newField = {
            id: uuidv4(),
            operation: "AND",
            text: "",
            parameter: "",
            select: false
        }; 
        console.log(newField);

        setOptionalSearchInputs(optionalSearchInputs => [...optionalSearchInputs, newField])
    }

    function handleClickClearFields() {
        setMandatorySearchInput({text: "", parameter: ""});
        setOptionalSearchInputs([]);
    }

    function handleClickSearch() {
        console.log(mandatorySearchInput);
        console.log(optionalSearchInputs);
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
                        {
                            mandatorySearchInput.select ? 
                            <select name="EducationDegreeSelect" defaultValue={mandatorySearchInput.text} className={classes.mandatoryEducationDegreeSelect}
                                onChange={handleMandatoryEducationDegreeSelect} >
                                <option value="" disabled>Choose Education Degree</option>
                                <option value="PRIMARY_SCHOOL_4_GRADES" > Primary school - 4 grades </option>
                                <option value="PRIMARY_SCHOOL_8_GRADES" > Primary school - 8 grades </option>
                                <option value="HIGH_SCHOOL_3_YEARS" > High school - 3 years </option>
                                <option value="HIGH_SCHOOL_4_YEARS" > High school - 4 years </option>
                                <option value="COLLEGE_3_YEARS" > College - 3 years </option>
                                <option value="COLLEGE_4_YEARS" > College - 4 years </option>
                                <option value="MASTERS" > Masters </option>
                                <option value="PH_D" > PhD </option>
                            </select>
                            :
                            <input type="text" value={mandatorySearchInput.text} className={classes.mandatorySearchInput} onChange={handleMandatorySearchInputChange}/>
                        }
                        <select name="Field" defaultValue={mandatorySearchInput.parameter} className={classes.mandatorySearchSelect} onChange={handleSelectMandatorySearchField} >
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
                            <select name="Operation" defaultValue={s.operation} className={classes.operationSelect} onChange={e => handleSelectOperation(e, s, index)} >
                                <option value="AND" >AND</option>
                                <option value="OR" >OR</option>
                            </select>
                            {
                                s.select ?
                                <select name="EducationDegreeSelect" defaultValue={s.text} className={classes.optionalEducationDegreeSelect}
                                    onChange={e => handleOptionalEducationDegreeSelect(e, s, index)} >
                                    <option value="" disabled>Choose Education Degree</option>
                                    <option value="PRIMARY_SCHOOL_4_GRADES" > Primary school - 4 grades </option>
                                    <option value="PRIMARY_SCHOOL_8_GRADES" > Primary school - 8 grades </option>
                                    <option value="HIGH_SCHOOL_3_YEARS" > High school - 3 years </option>
                                    <option value="HIGH_SCHOOL_4_YEARS" > High school - 4 years </option>
                                    <option value="COLLEGE_3_YEARS" > College - 3 years </option>
                                    <option value="COLLEGE_4_YEARS" > College - 4 years </option>
                                    <option value="MASTERS" > Masters </option>
                                    <option value="PH_D" > PhD </option>
                                </select>
                                :
                                <input type="text" value={s.text} 
                                    className={classes.optionalSearchInput} onChange={e => handleOptionalSearchInputChange(e, s, index)}/>
                            }
                            
                            <select name="Field" defaultValue={s.parameter} className={classes.optionalSearchSelect} onChange={e => handleSelectOptionalSearchField(e, s, index)} >
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