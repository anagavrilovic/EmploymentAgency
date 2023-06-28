import * as yup from "yup";

const nameRegex = /^[a-zA-ZšŠđĐžŽčČćĆ ]+$/;
const phoneNumber = /^[0-9]{9,10}$/;
const postalCode = /^[0-9]+$/;

const schema = yup.object().shape({
    firstName: 
        yup.string()
        .required("First name is required.")
        .matches(nameRegex, "First name should be letters only."),
    lastName: 
        yup.string()
        .required("Last name is required.")
        .matches(nameRegex, "Last name should be letters only."),
    email: 
        yup.string()
        .email("Invalid e-mail address.")
        .required("Email is required."),
    phoneNumber: 
        yup.string()
        .required("Phone number is required.")
        .matches(phoneNumber, "Phone number contains 9 or 10 digits."),
    educationDegree: 
        yup.string()
        .required("Education degree is required."),
    streetName:
        yup.string()
        .required("Street name is required."),
    streetNumber:
        yup.string()
        .required("Street number is required."),
    city:
        yup.string()
        .required("City is required.")
        .matches(nameRegex, "First name should be letters only."),
    postalCode:
        yup.string()
        .required("Postal code is required.")
        .matches(postalCode, "Postal code should be digits only."),
    country:
        yup.string()
        .required("Country is required.")
        .matches(nameRegex, "Country should be letters only."),
});

export default schema;