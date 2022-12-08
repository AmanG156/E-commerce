import React from "react";
import{Formik,Form} from 'formik';
import TextField  from "./TextField";
import * as Yup from 'yup';
import "./VSignUp.css";
// import { useState } from "react"
export default function SignUp() {
    const validate=Yup.object({
        fullName:Yup.string()
        .max(15,'Must be 15 character or less')
        .required('required'),
        address:Yup.string()
        .max(50,'Must be 50 character or less')
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
    
      })
//   const [data, setData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     number: "",
//     address: "",
//   });
//   const handleInput = (event) => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };
//   const handlesubmit = () => {
//     console.log(data);
//   };
  return (
//     <Formik
//     initialValues={{
//         fullName:'',
//         number:'',
//         email:'',
//         password:'',
//         address:''
//     }}
//     validationSchema={validate}
//     onSubmit={values=>{
//         console.log(values)
//     }}
//     >
//     <div>
//         {formik=>(
//       <div className="VSignUp_div">
//         <h1 className="heading_signup">Sign Up</h1>
//         <form>
//           <div className="VSignup">
//             <TextField
//               type="text"
//               placeholder="Full Name"
//               // className="VSignupfield"
//               name="fullName"
//             //   onChange={(event) => handleInput(event)}
//             />
//             <br />
//             <TextField
//               type="email"
//               placeholder="Email"
//               // className="VSignupfield"
//               name="email"
//             //   onChange={(event) => handleInput(event)}
//             />
//             <br />
//             <TextField
//               type="Number"
//               placeholder="Phone Number"
//               // className="VSignupfield"
//               name="number"
//             //   onChange={(event) => handleInput(event)}
//             />
//             <br />
//             <TextField
//               type="text"
//               placeholder="Address"
//               // className="VSignupfield"
//               name="address"
//             //   onChange={(event) => handleInput(event)}
//             />
//             <br />
//             <TextField
//               type="Password"
//               placeholder="Password"
//               // className="VSignupfield"
//               name="password"
//             //   onChange={(event) => handleInput(event)}
//             />
//             <br />
//             <button
//               className="VSignUp_btn"
//               type="button"
//             //   onClick={() => handlesubmit()}
//             >
//               {" "}
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="border"></div>
//         <p className="already">
//           I already have an account <a className="swtich_login"> Login</a>
//         </p>
//       </div>
//       )}
//     </div>
//     </Formik>
//   );
// }
<Formik
initialValues={{
    firstName:'',
    address:'',
    email:'',
    password:'',
    number:''
}}
validationSchema={validate}
onSubmit={values=>{
    console.log(values)
}}
>
{formik=>(
<div className="VSignUp_div">
    <h1 className="my-4 font-weight-bold .display-4 heading_signup">Sign Up</h1>
    <div  className="VSignup">

    <Form>
        <TextField  placeholder="FullName" name="firstName" type="text" />
        <TextField  placeholder="Address" name="address" type="text" />

        <TextField  placeholder="Email" name="email" type="email" />
        <TextField  placeholder="Contact Number" name="lastName" type="number" />
        <TextField  placeholder="Password" name="password" type="password" />
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