import React from 'react';
import { useNavigate } from "react-router-dom";

import classes from './RegisterCandidate.module.css';

function RegisterCandidate() {

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
    }

    return (
        <div className={classes.page}>
            <div className={`${classes.background}`}>
                <h1 className={classes.title}> REGISTER NOW </h1>
                <p className={classes.description}>
                    Register a candidate and help them take the first step towards new career opportunities. 
                    Fill out the form below to create profile for the candidate and let them gain access to a wide range 
                    of job listings tailored to their skills and interests. Or 
                </p>
                <button className={classes.backToHomeButton} onClick={goToHomepage}>
                    Go back to homepage
                </button>
            </div>
        </div>
    )
}

export default RegisterCandidate;