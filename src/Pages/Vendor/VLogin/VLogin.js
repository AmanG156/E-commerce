// import React from "react";
// import{Formik,Form} from 'formik';
// import TextField  from "./TextField";
// import * as Yup from 'yup';
// import "./VLogin.css";

// export default function SignUp() {
//     const validate=Yup.object({
//         email:Yup.string()
//         .email('email is invalid')
//         .required('Email is required'),
//         password:Yup.string()
//         .min(6,'Password must be atleast 6 charachter')
//         .required('Password is required'),
    
//       })
//   return (
//     <Formik
// initialValues={{
//     email:'',
//     password:'',
// }}
// validationSchema={validate}
// onSubmit={values=>{
//     console.log(values)
// }}
// >
// {formik=>(
// <div className="VLogin_div">
//     <h1 className="my-4 font-weight-bold .display-4 heading_signup">Login</h1>
//     <div  className="VLogin">

//     <Form>
//         <TextField  placeholder="Email" name="email" type="email" />
//         <TextField  placeholder="Password" name="password" type="password" />
//         <div className="VSwtich_forgot">Forgot Password ?</div>
//          <button className="VLogin_btn" type="submit">Register</button>
//    </Form>
//    </div>
//    <div className="border"></div>
//       <p className="already">
//            I already have an account 
//          </p>
//          <div className="Login_register">Register Now</div>
// </div>
// )}
// </Formik>

//   )
// }
