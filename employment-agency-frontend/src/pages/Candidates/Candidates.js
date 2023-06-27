import React from 'react';
import { useNavigate } from "react-router-dom";

import classes from './Candidates.module.css';

function Candidates() {

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
    }

    return (
        <div className={classes.page}>
            <div className={`${classes.background}`}>
                <h1 className={classes.title}> BROWSE CANDIDATES </h1>
                <p className={classes.description}>
                    Effortlessly access a comprehensive list of all registered candidates through our user-friendly 
                    functionality. Stay organized and gain a complete overview of potential talent, enabling you to 
                    efficiently browse and evaluate candidate profiles. Or 
                </p>
                <button className={classes.backToHomeButton} onClick={goToHomepage}>
                    Go back to homepage
                </button>
            </div>
        </div>
    )
}

export default Candidates;