import React, { useState } from "react";
import "./ResetPassword.css";
import forgotpwd from "../assests/forgotpwd.png";
import { useNavigate ,useLocation} from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const [showerror, setShowerror] = useState(false);
  const [data1, setData1] = useState({
    Password: "",CPassword:""
  });
  let {state}= useLocation()
  const email= useState(state?.email)

  const  handleInput = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    setData1({ Password: "" ,CPassword:""});
  };
  const navigate = useNavigate()
  const handleSubmit = () => {
    // console.log(data1);
    if(data1.Password===data1.CPassword){
      if (data1) {
        alert("Form is Submitted");
       let payload = 
      { email:email,
       password:data1.Password}
         axios.post("http://localhost:3500/api/resetPassword",payload)
         .then( (val)=>{console.log(val)
        alert("Password Reseted")})
         navigate("/Pages/Login")
         .catch((error)=>{console.log(error)
        alert("Password not rested")})

        handleReset();
      }
    }
     else {
      alert("Invalid entry");
      setShowerror(true);
    }
  }

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
                            alt={"Noimage"}
                            width="400"
                            height="400"
                            style={{ marginLeft: "38px", marginTop: "35px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-5 order-2 " style={{marginLeft:"auto"}}>
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 reset_text">
                          Reset Password
                        </p>

                        <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="Password"
                                id="form3Example1c"
                                className="form-control"
                                name="Password"
                                placeholder="Password"
                                value={data1.Password}
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                              <p style={{ color: "red" }}>
                                {showerror && data1.Password === ""
                                  ? "Please fill valid entry"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="Password"
                                id="form3Example3c"
                                name="CPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={data1.CPassword}
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                              <p style={{ color: "red" }}>
                                {showerror && data1.CPassword === ""
                                  ? "Please fill valid entry"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="  btn btn-warning btn-lg resetpwd_btn"
                             
                              onClick={() => {
                                handleSubmit();
                              }}
                            >
                              Reset Password
                            </button>
                           
                          </div>
                        </form>
                      </div>
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