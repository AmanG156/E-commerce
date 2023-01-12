import React, { useState } from "react";
import "./ForgotPassword.css";
import forgotpwd from "../assests/forgotpwd.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {FaEnvelopeOpen} from "react-icons/fa"
export default function ForgotPassword() {
  const [showerror, setShowerror] = useState(false);
  const [data1, setData1] = useState({
    email: "",
  });
  const handleInput = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate()
  
  const handleReset = () => {
    setData1({ email: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data1);
    if (data1.email !== "") {
      if (data1) {
         let payload = {
       email:data1.email,}
         axios
         .post("https://ecom-five-pi.vercel.app/api/forgot-password/", payload)
         .then( (response)=>{
          if(response.data.status === 200){
        
            navigate("/Pages/Otp",{state:{"email":data1.email}})
          }
         })
         .catch((error)=>console.log(error))

         handleReset();
      }
    } else {
      alert("Invalid entry");
      setShowerror(true);
    }
  };

  return (
    
    <section className='forgetpass'>
    <div className='more-size'>
    <div className='forgetbox'>
        <div className='forleft'>
            <img src={forgotpwd}/>

        </div>
        <div className='forright'>
        <div className="forfrm">
          <h6>Forget password?</h6>
          <form>
            <p><input   type="email"
                                 id="form3Example3c"
                                 name="email"
                                 className="form-control"
                                 placeholder="Email"
                                 value={data1.email}
                                 onChange={(event) => {
                                   handleInput(event);
                             }}/>
                               <FaEnvelopeOpen className="mail_icon"/>
                               </p>
                            
                               <p style={{ color: "red" }}>
                                 {showerror && data1.email === ""
                                   ? "Please fill valid entry"
                               : null}{" "}
                              </p>
            
          <input type="submit" value="Reset Password" className='resetpassbtn' onClick={(e)=>handleSubmit(e)}/>
            {/* <button type="submit" className="resetpassbtn">Reset Password</button> */}
          </form>


            </div>

        </div>
    </div>

    </div>
    
</section>
  );
  }
