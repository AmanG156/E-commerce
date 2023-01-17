import React, { useState } from 'react'
import "./EmailVerify.css";
import forgotpwd from "../assests/forgotpwd.png";
import axios from "axios";
import {useNavigate ,useLocation} from "react-router-dom";
export default function EmailVerify({route}) {
 const  [otp,setOtp] = useState({
  otp:""
 })
 let {state}= useLocation()
const email= useState(state?.email)
const handleInput = (event) => {
  setOtp(event.target.value);
};
const navigate = useNavigate()

const handleReset = () => {
  setOtp({ otp: "" });
};

const handleSubmit = (event) => {
  event.preventDefault()

  if (otp !== "") {
    if (otp) {
       let payload = {
        email:email,
     otp:otp}
       axios
       .post("https://ecom-five-pi.vercel.app/api/verify-account", payload )
       .then( (response)=>{
        console.log(response)
        if(response.data.status === 200){
          navigate("/Pages/Login",{state:{"email":email}})
          
        }
      else {
        alert("Invalid OTP")
      }
       })
       .catch((error)=> {console.log(error)
      alert("Otp verification failed")})

       handleReset();
    }
  } else {
    alert("Invalid Otp");
  
  }
};
  return (
    <div>
        <section>
            <div className='container'>
            <div className='row'>
             <div className='col otp_img'>
             <img
                            src={forgotpwd}
                            alt={"NoImage"}
                            width="400"
                            height="400"
                            style={{ marginLeft: "98px", marginTop: "84px" }}
                          />
             </div>
             <div className='col '>
                <div className='otp_field'>
                <h2 className='otp_heading'>OTP</h2>
                <input className='otp_input'onChange={(event)=>handleInput(event)} placeholder='0  0  0  0  0  0'/>
                <br/>
                <button className='otp_btn' onClick={(event)=>handleSubmit(event)}>Submit</button>
                </div>
             </div>
            </div>
            </div>
        </section>
       
    </div>
  )
}
