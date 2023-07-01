import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { axiosInstance } from '../../api/AxiosInstance';

import classes from './Search.module.css';
import SearchResults from '../../components/SearchResults/SearchResults';

import Swal from 'sweetalert2'

function Search() {

    const [mandatorySearchInput, setMandatorySearchInput] = useState({value: "", field: "", select: false});
    const [optionalSearchInputs, setOptionalSearchInputs] = useState([]);

    const [searchResults, setSearchResults] = useState(null);

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
    }

    function handleMandatorySearchInputChange(event) {
        setMandatorySearchInput({...mandatorySearchInput, value: event.target.value});
    }

    function handleSelectMandatorySearchField(event) {
        if(event.target.value === "educationDegree"){
            setMandatorySearchInput({...mandatorySearchInput, field: event.target.value, select: true, value: ""});
        } else if (mandatorySearchInput.select) {
            setMandatorySearchInput({...mandatorySearchInput, field: event.target.value, select: false, value: ""});
        } else {
            setMandatorySearchInput({...mandatorySearchInput, field: event.target.value, select: false});
        }
    }

    function handleMandatoryEducationDegreeSelect(event) {
        setMandatorySearchInput({...mandatorySearchInput, value: event.target.value});
    }

    function handleSelectOperation(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 
        newArray[index] = {...searchInput, logicalOperation: event.target.value }; 
        setOptionalSearchInputs(newArray);
    }

    function handleOptionalSearchInputChange(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 
        newArray[index] = {...searchInput, value: event.target.value }; 
        setOptionalSearchInputs(newArray);
    }

    function handleOptionalEducationDegreeSelect(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 
        newArray[index] = {...searchInput, value: event.target.value }; 
        setOptionalSearchInputs(newArray);
    }

    function handleSelectOptionalSearchField(event, searchInput, index) {
        let newArray = [...optionalSearchInputs]; 

        if(event.target.value === "educationDegree") {
            newArray[index] = {...searchInput, field: event.target.value, select: true, value: "" }; 
        } else if(searchInput.select) {
            newArray[index] = {...searchInput, field: event.target.value, select: false, value: ""}; 
        } else {
            newArray[index] = {...searchInput, field: event.target.value, select: false}; 
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
            logicalOperation: "AND",
            value: "",
            field: "",
            select: false
        }; 
        console.log(newField);

        setOptionalSearchInputs(optionalSearchInputs => [...optionalSearchInputs, newField])
    }

    function handleClickClearFields() {
        setMandatorySearchInput({value: "", field: ""});
        setOptionalSearchInputs([]);
    }

    function handleClickSearch() {

        var searchQuery = [{
            field: mandatorySearchInput.field,
            value: mandatorySearchInput.value,
            isPhrase: mandatorySearchInput.value.startsWith("^") && mandatorySearchInput.value.endsWith("^")
        }];

        optionalSearchInputs.forEach(input => {
            searchQuery.push({
                field: input.field,
                value: input.value,
                isPhrase: input.value.startsWith("^") && input.value.endsWith("^"),
                logicalOperation: input.logicalOperation
            })
        });

        console.log(searchQuery);

        axiosInstance.post("/search", searchQuery)
        .then(response => {
            setSearchResults(response.data);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
                confirmButtonColor: '#d5bf86'
            })
        })

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
                            <select name="EducationDegreeSelect" defaultValue={mandatorySearchInput.value} className={classes.mandatoryEducationDegreeSelect}
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
                            <input type="text" value={mandatorySearchInput.value} className={classes.mandatorySearchInput} onChange={handleMandatorySearchInputChange}/>
                        }
                        <select name="Field" defaultValue={mandatorySearchInput.field} className={classes.mandatorySearchSelect} onChange={handleSelectMandatorySearchField} >
                            <option value="" disabled>Choose Field</option>
                            <option value="firstName" >First Name</option>
                            <option value="lastName" >Last Name</option>
                            <option value="educationDegree" >Education Degree</option>
                            <option value="cvContent" >CV</option>
                            <option value="motivationalLetterContent">Motivational Letter</option>
                        </select>
                    </div>

                    {optionalSearchInputs.map((s, index) => ( 
                        <div className={classes.optionalSearchParam} key={index}> 
                            <select name="Operation" defaultValue={s.logicalOperation} className={classes.operationSelect} onChange={e => handleSelectOperation(e, s, index)} >
                                <option value="AND" >AND</option>
                                <option value="OR" >OR</option>
                            </select>
                            {
                                s.select ?
                                <select name="EducationDegreeSelect" defaultValue={s.value} className={classes.optionalEducationDegreeSelect}
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
                                <input type="text" value={s.value} 
                                    className={classes.optionalSearchInput} onChange={e => handleOptionalSearchInputChange(e, s, index)}/>
                            }
                            
                            <select name="Field" defaultValue={s.field} className={classes.optionalSearchSelect} onChange={e => handleSelectOptionalSearchField(e, s, index)} >
                                <option value="" disabled>Choose Field</option>
                                <option value="firstName" >First Name</option>
                                <option value="lastName" >Last Name</option>
                                <option value="educationDegree" >Education Degree</option>
                                <option value="cvContent" >CV</option>
                                <option value="motivationalLetterContent">Motivational Letter</option>
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

                {
                    searchResults ? <SearchResults searchResults={searchResults} /> : null
                }
            </div>
        </div>
    )
}

export default Search;