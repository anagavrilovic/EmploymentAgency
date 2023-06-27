import React from 'react';
import { useNavigate } from "react-router-dom";

import classes from "./Homepage.module.css";

function Homepage() {
    
    const navigate = useNavigate();

    function goToRegisterCandidatePage() {
        navigate("/register");
    }

    function goToSearchPage() {
        navigate("/search");
    }

    function goToCandidatesPage() {
        navigate("/candidates");
    }
 
    return (
        <div className={classes.page}>
            <div className={`${classes.optionBackground} ${classes.optionLeftBg}`}>
                <p className={classes.optionQuote}> Unlock your career </p>
                <p className={classes.optionQuoteHighlight}> POTENTIAL </p>
                <p className={classes.optionQuote}> Join us today! </p>
                <button className={`${classes.optionButton} ${classes.optionLeftButton}`} onClick={goToRegisterCandidatePage}>
                    REGISTER NOW
                </button>
            </div>
            <div className={`${classes.optionBackground} ${classes.optionCenterBg}`}>
                <p className={classes.optionQuote}> Discover talent that </p>
                <p className={classes.optionQuoteHighlight}> EXCEEDS </p>
                <p className={classes.optionQuote}> expectations </p>
                <button className={`${classes.optionButton} ${classes.optionCenterButton}`} onClick={goToSearchPage}>
                    FIND CANDIDATES
                </button>
            </div>
            <div className={`${classes.optionBackground} ${classes.optionRightBg}`}>
                <p className={classes.optionQuote}> Endless  </p>
                <p className={classes.optionQuoteHighlight}> POSSIBILITIES </p>
                <p className={classes.optionQuote}> start here </p>
                <button className={`${classes.optionButton} ${classes.optionRightButton}`} onClick={goToCandidatesPage}>
                    BROWSE CANDIDATES
                </button>
            </div>
        </div>
    )
}

export default Homepage;