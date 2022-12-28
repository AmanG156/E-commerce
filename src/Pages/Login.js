import React, { useState } from "react";
import "./Login.css";
import Logins from "../assests/Login.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {FaEnvelopeOpen,FaLock} from "react-icons/fa"


export default function Login() {
  // const { setLogin, login } = useState(false)
  const [showerror, setShowerror] = useState(false);
  const navigate = useNavigate()
  const [data1, setData1] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    setData1({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data1);
    if (data1.email !== "" && data1.password !== "") {
      if (data1) {
        let payload = {
          email: data1.email,
          password: data1.password,
        };
        axios
          .post("http://35.154.48.64:3500/api/login", payload)
          .then((val) => {
            if (val.data.token) {
              localStorage.setItem("token", val.data.token);
              localStorage.setItem("refresh", val.data.refresh);
              alert("Form is Submitted");
              navigate('/')
            }
            else {
              alert("User Does't exist");
              setShowerror(true);
            }
          })
          .catch("something went wrong  ");
          // alert(" User Does't exist ")
        handleReset();
      }
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
                  <div className="row justify-content-center Login_container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="Login_img col-md-12">
                          <img
                            src={Logins}
                            alt={"Noimage"}
                            width="100%"
                            // height={400}
                            style={{ marginLeft: "38px", marginTop: "35px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-6 order-2  login_body " >
                        <div className="Login_left">
                        <h1  className="Login_btn">
                          Login
                        </h1>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4 Login_parent">
                            {/* <i className="fa fa-envelope fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                name="email"
                                className="form-control inputLogin_field"
                                placeholder="Email"
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                              <FaEnvelopeOpen className="login_icon"/>
                              <p style={{ color: "red" }}>
                                {showerror && data1.email === ""
                                  ? "Please Enter Email "
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4 Login_parent">
                            {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control inputLogin_field"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                              <FaLock className="login_icons"/>
                              <p style={{ color: "red" }}>
                                {showerror && data1.password === ""
                                  ? "Please Enter Password"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>
                          <div class="form-check mb-0">
                            <input
                              className="form-check-input box boxes "
                              type="checkbox"
                              value=""
                              id="form2Example3"
                              style={{ marginLeft: "-11px", marginTop: "35px" }}
                            />
                            <label
                              className="form-check-label remember"
                              style={{  marginTop: "30px" }}
                              for="form2Example3"
                            >
                              Remember me
                            </label>
                            <div
                              className="forgot_pwd"
                              style={{
                                marginLeft: "219px",
                                marginTop: "-27px",
                              }}
                            >
                              <Link to="/Pages/Forgot">
                                {" "}
                                <div className="text-body " style={{marginLeft:"20px",marginTop:"4px"}}>
                                  {" "}
                                  Forgot Password?
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className=" justify-content-center mb-3 mb-lg-4 LOginbtn_div">
                            <Link to="#">
                              <button
                                type="button"
                                className=" login btn btn-warning btn-lg"
                                style={{
                                  width: "133px",
                                  marginRight: "202px",
                                  marginTop: "30px",
                                  color:"#FFFF",
                                  backgroundColor:"#FAB143"
                                }}

                                onClick={(e) => {
                                  handleSubmit(e);
                                }}
                              >
                                Login
                              </button>
                            </Link>
                          </div>
                          <div className="Have_an">
                            Don't Have An Account?{" "}
                            <Link className="Lsignup" to="/Pages/Signup">Sign Up</Link>
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
        </div>
      </section>
    </div>
  );
}
