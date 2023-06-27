import React from 'react';
import { useNavigate } from "react-router-dom";

import classes from './Search.module.css';

function Search() {

    const navigate = useNavigate();

    function goToHomepage() {
        navigate("/");
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
            </div>
        </div>
    )
}

export default Search;