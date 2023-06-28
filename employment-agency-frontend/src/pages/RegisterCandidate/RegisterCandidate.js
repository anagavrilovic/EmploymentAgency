import React from 'react';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import classes from './RegisterCandidate.module.css';
import schema from "../../validationSchemas/RegisterUserValidationSchema";
import { axiosInstance } from '../../api/AxiosInstance';

import Swal from 'sweetalert2'

function RegisterCandidate() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const [serverError, setServerError] = useState(false);

    const [selectedCVFile, setSelectedCVFile] = useState(null);
    const [selectedMotivationalLetterFile, setCVSelectedMotivationalLetterFile] = useState(null);

    function handleCVFileChange(event) {
        setSelectedCVFile(event.target.files[0]);
    }

    function handleMotivationalLetterFileChange(event) {
        setCVSelectedMotivationalLetterFile(event.target.files[0]);
    }

    function goToHomepage() {
        navigate("/");
    }

    function registrationHandler(data) {
        Swal.fire({
            title: "Loading...",
            html: "Please wait a moment",
            allowOutsideClick: false,
          })
          Swal.showLoading()

        console.log(data);
        const formData = new FormData();

        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('email', data.email);
        formData.append('phoneNumber', data.phoneNumber);
        formData.append('educationDegree', data.educationDegree);
        formData.append('streetName', data.streetName);
        formData.append('streetNumber', data.streetNumber);
        formData.append('postalCode', data.postalCode);
        formData.append('city', data.city);
        formData.append('country', data.country);
        formData.append('cv', selectedCVFile);
        formData.append('motivationalLetter', selectedMotivationalLetterFile);

        axiosInstance({
            method: 'post', 
            url: 'candidate',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(() => {
            Swal.close();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Candidate registered successfully!',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                navigate("/");
            });
        })
        .catch((error) => {
            if (error.response.data.message === "Email already exists.") {
                setServerError(true);
            }
        });
    }

    function handleSelectEducationDegree(event) {
        event.target.style.color = '#ffffff';
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

                <form onSubmit={handleSubmit(registrationHandler)} className={classes.form}>
                    <div className={classes.inputs}>
                        <div className={classes.formColumn}>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='First Name'
                                    className={errors.firstName ? classes.errorInput : ''} {...register("firstName")} />
                                <div className={classes.errorMessage}>{errors.firstName?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='Last Name'
                                    className={errors.lastName ? classes.errorInput : ''} {...register("lastName")} />
                                <div className={classes.errorMessage}>{errors.lastName?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='Email'
                                    className={errors.email || serverError ? classes.errorInput : ''} {...register("email")} />
                                <div className={classes.errorMessage}>{errors.email?.message}
                                    {serverError ? "Account with this e-mail already exists." : ""}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='Phone Number'
                                    className={errors.phoneNumber ? classes.errorInput : ''} {...register("phoneNumber")} />
                                <div className={classes.errorMessage}>{errors.phoneNumber?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <select name="Education Degree" defaultValue="" className={`${classes.select} ${errors.educationDegree ? classes.errorInput : ''}`}
                                    {...register("educationDegree")} onChange={handleSelectEducationDegree}>
                                    <option value="" disabled>Education Degree</option>
                                    <option value="PRIMARY_SCHOOL_4_GRADES" >Primary school 4 grades</option>
                                    <option value="PRIMARY_SCHOOL_8_GRADES" >Primary school 8 grades</option>
                                    <option value="HIGH_SCHOOL_3_YEARS" >High school 3 years</option>
                                    <option value="HIGH_SCHOOL_4_YEARS" >High school 4 years</option>
                                    <option value="COLLEGE_3_YEARS" >College 3 years</option>
                                    <option value="COLLEGE_4_YEARS" >College 4 years</option>
                                    <option value="MASTERS" >Masters</option>
                                    <option value="PH_D" >PhD</option>
                                </select>
                                <div className={classes.errorMessage}>{errors.educationDegree?.message}</div>
                            </div>

                        </div>

                        <div className={classes.formColumn}>
                            <div className={classes.formItem}>
                                <input type='text' placeholder='Street Name'
                                    className={errors.streetName ? classes.errorInput : ''} {...register("streetName")} />
                                <div className={classes.errorMessage}>{errors.streetName?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='Street Number'
                                    className={errors.streetNumber ? classes.errorInput : ''} {...register("streetNumber")} />
                                <div className={classes.errorMessage}>{errors.streetNumber?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='City'
                                    className={errors.city ? classes.errorInput : ''} {...register("city")} />
                                <div className={classes.errorMessage}>{errors.city?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='Postal Code'
                                    className={errors.postalCode ? classes.errorInput : ''} {...register("postalCode")} />
                                <div className={classes.errorMessage}>{errors.postalCode?.message}</div>
                            </div>

                            <div className={classes.formItem}>
                                <input type='text' placeholder='Country'
                                    className={errors.country ? classes.errorInput : ''} {...register("country")} />
                                <div className={classes.errorMessage}>{errors.country?.message}</div>
                            </div>
                        </div>
                    </div>
                    

                    <hr className={classes.divider}/>

                    <div className={classes.fileContainer}>
                        <div className={classes.fileUpload}>
                            <label htmlFor="cv-upload">Upload CV</label>
                            <div className={classes.inputContainer}>
                                <input type="file" name="cv" id="cv-upload" accept=".pdf" onChange={handleCVFileChange}/>
                            </div>
                        </div>
                        <div className={classes.fileUpload}>
                            <label htmlFor="motivational-letter-upload">Upload Motivational Letter</label>
                            <div className={classes.inputContainer}>
                                <input type="file" name="motivational-letter" id="motivational-letter-upload" accept=".pdf" onChange={handleMotivationalLetterFileChange}/>
                            </div>
                            
                        </div>
                    </div>

                    <button className={classes.buttonLogIn}>REGISTER</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterCandidate;