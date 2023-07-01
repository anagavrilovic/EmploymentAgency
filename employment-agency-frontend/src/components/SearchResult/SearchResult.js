import React from 'react';

import classes from './SearchResult.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faGraduationCap, faLocationDot, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { axiosInstance, baseUrl } from '../../api/AxiosInstance';

function SearchResult({searchResult}) {

    function getEducationDegreeString(educationDegree) {
        if(educationDegree === "PRIMARY_SCHOOL_4_GRADES") return "Primary school - 4 grades";
        else if(educationDegree === "PRIMARY_SCHOOL_8_GRADES") return "Primary school - 8 grades";
        else if(educationDegree === "HIGH_SCHOOL_3_YEARS") return "High school - 3 years";
        else if(educationDegree === "HIGH_SCHOOL_4_YEARS") return "High school - 4 years";
        else if(educationDegree === "COLLEGE_3_YEARS") return "College - 3 years";
        else if(educationDegree === "COLLEGE_4_YEARS") return "College - 4 years";
        else if(educationDegree === "MASTERS") return "Masters";
        else if(educationDegree === "PH_D") return "PhD";
        else return "";
    }

    function handleDownloadCV() {
        let alink = document.createElement('a');
        alink.href = `${baseUrl}/candidate/download/${searchResult.id}/cv`;
        alink.setAttribute('download', 'cv.pdf');
        alink.click();
    }

    function handleDownloadMotivationalLetter() {
        let alink = document.createElement('a');
        alink.href = `${baseUrl}/candidate/download/${searchResult.id}/motivationalLetter`;
        alink.setAttribute('download', 'motivationalLetter.pdf');
        alink.click();
    }

    return (
        <div className={classes.component}>
            <div className={classes.info}>
                <FontAwesomeIcon icon={faUser} className={classes.icon} /> 
                <label className={classes.label}>{searchResult.firstName} {searchResult.lastName}</label>
            </div>
            <div className={classes.info}>
                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
                <label className={classes.label}>{searchResult.email}</label>
            </div>
            <div className={classes.info}>
                <FontAwesomeIcon icon={faPhone} className={classes.icon} />
                <label className={classes.label}>{searchResult.phoneNumber}</label>
            </div>
            <div className={classes.info}>
                <FontAwesomeIcon icon={faGraduationCap} className={classes.icon} />
                <label className={classes.label}>{getEducationDegreeString(searchResult.educationDegree)}</label>
            </div>
            <div className={classes.info}>
                <FontAwesomeIcon icon={faLocationDot} className={classes.icon} />
                <label className={classes.label}>{searchResult.city}</label>
            </div>
            <div className={classes.highlight}>
                <FontAwesomeIcon icon={faQuoteLeft} className={classes.icon} />
                <label className={classes.label} dangerouslySetInnerHTML={{ __html: searchResult.highlighter }}></label>
            </div>
            <div className={classes.buttons}>
                <button className={classes.downloadButton} onClick={handleDownloadCV} >Download CV</button>
                <button className={classes.downloadButton} onClick={handleDownloadMotivationalLetter}>Download Motivational Letter</button>
            </div>
        </div>
    )
}

export default SearchResult;