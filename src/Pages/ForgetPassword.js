import React, { useState } from "react";
import "./ForgotPassword.css";
import forgotpwd from "../images/forgotpwd.png";
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

  const handleSubmit = () => {
    console.log(data1);
    if (data1.email !== "") {
      if (data1) {
         let payload = {
       email:data1.email,}
         axios
         .post("https://ecommercewebap.herokuapp.com/api/forgotPassword", payload)
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
    <div>
      <section>
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11 ">
              <div className="card text-black ">
                <div className="card-body p-md-5 ">
                  <div className="row justify-content-center">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="Login_img col-md-6">
                          <img
                            src={forgotpwd}
                            alt={"NoImage"}
                            width="400"
                            height="400"
                            style={{ marginLeft: "38px", marginTop: "35px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-5 order-2 forgot_pwd">
                        <p className=" h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 fo forgot_heading">
                          Forget Password
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4 " style={{marginLeft:"34px"}}>
                            
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={data1.email}
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                              <FaEnvelopeOpen className="mail_icon"/>
                              <p style={{ color: "red" }}>
                                {showerror && data1.email === ""
                                  ? "Please fill valid entry"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link><button
                              type="button"
                              className=" reset_btn btn btn-warning btn-lg"
                              style={{
                                width: "240px",
                                marginTop: "13px",
                              }}
                              onClick={() => {
                                handleSubmit();
                              }}
                            >
                              Reset Password
                            </button>
                            </Link>
                          </div>
                        </form>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
