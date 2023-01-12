import React from "react";
import{Formik,Form} from 'formik';
import TextField  from "./TextField";
import * as Yup from 'yup';
import axios from "axios";
import {  useNavigate } from "react-router-dom";

import "./VSignUp.css";
// import { useState } from "react"
export default function SignUp() {
  // const navigate = useNavigate()
    const validate=Yup.object({
        fullName:Yup.string()
        .max(15,'Must be 15 character or less')
        .required('required'),
        number:Yup.number()
        .max(10,'Must be 10 character')
        .min(10,'Must be 10 Number ')
        .required('required'),
        email:Yup.string()
        .email('email is invalid')
        .required('Email is required'),
        password:Yup.string()
        .min(6,'Password must be atleast 6 charachter')
        .required('Password is required'),
        Cpassword:Yup.string()
        .min(6,'Password must be atleast 6 charachter')
        .required('Password is required'),
      })
// 
  return (
<Formik
initialValues={{
    firstName:'',
    email:'',
    password:'',
    Cpassword:"",
    number:''
}}
validationSchema={validate}
onSubmit={values=>{
    console.log(values)
    // const handleSubmit = () => {
    //   console.log(values);
    //   if (
    //     values.fullName !== "" &&
    //     values.email !== "" &&
    //     values.password !== "" &&
    //     values.contact !== "" &&
    //     values.Cpassword !== ""
    //   ) {
    //     if ( values.password ===  values.Cpassword) {
    //       alert("Form is Submitted");
    //       let payload = {
    //         name:  values.fullName,
    //         email:  values.email,
    //         mobile:  values.contact,
    //         password:  values.password,
    //         Cpassword:values.Cpassword
    //       };
    //       axios
    //         .post("http://35.154.48.64:3500/api/signup", payload)
    //         .then((val) => console.log(val),
    //         navigate("/Pages/Login"))
    //         .catch();
  
    //     } else {
    //       alert("Password is not same");
    //     }
    //   } else {
    //     alert("Invalid entry");
       
    //   }
    // };    
}}
>
{formik=>(
<div className="VSignUp_div">
    <h1 className="my-4 font-weight-bold .display-4 heading_signup">Sign Up</h1>
    <div  className="VSignup">

    <Form>
        <TextField  placeholder="FullName" name="firstName" type="text" />
        <TextField  placeholder="Contact Number" name="Contact" type="number" />
         <TextField  placeholder="Email" name="email" type="email" />
         <TextField  placeholder="Password" name="password" type="password" />
         <TextField  placeholder=" Confirm Password" name="Cpassword" type="password" />

         <button className="VSignUp_btn" type="submit">Register</button>
         {/* <button className="btn btn-danger mt-3" type="reset">Reset</button> */}
   </Form>
   </div>
   <div className="border"></div>
      <p className="already">
           I already have an account <a className="swtich_login"> Login</a>
         </p>
</div>
)}
</Formik>
)
} 