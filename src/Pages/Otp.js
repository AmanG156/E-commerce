import React, { useState } from 'react'
import "./Otp.css";
import forgotpwd from "../images/forgotpwd.png";
import axios from "axios";
import { Link,useNavigate ,useLocation} from "react-router-dom";
export default function Otp({route}) {
 const  [otp,setOtp] = useState({
  otp:""
 })
 let {state}= useLocation()
const [email,setEmail]= useState(state?.email)
const handleInput = (event) => {
  setOtp(event.target.value);
};
const navigate = useNavigate()

const handleReset = () => {
  setOtp({ otp: "" });
};

const handleSubmit = (event) => {
  event.preventDefault()
  console.log(otp);
  if (otp !== "") {
    if (otp) {
       let payload = {
        email:email,
     otp:Number(otp)}
       axios
       .post("https://ecommercewebap.herokuapp.com/api/verifyOtp", payload)
       .then( (response)=>{
        if(response.data.msg === "otp verified"){
          navigate("/Pages/ResetPassword",{state:{"email":email}})
          alert("OTP Verified")
        }
       })
       .catch((error)=> {console.log(error)
      alert("Otp verification failed")})

       handleReset();
    }
  } else {
    alert("Invalid Otp");
    // setShowerror(true);
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
