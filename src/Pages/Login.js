import React, { useState } from "react";
import "./Login.css";
import Logins from "../images/Login.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {FaEnvelopeOpen,FaLock} from "react-icons/fa"

// import { AppContext, useGlobalContext } from "../context/use-context";

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

  const handleSubmit = () => {
    console.log(data1);
    if (data1.email !== "" && data1.password !== "") {
      if (data1) {
        alert("Form is Submitted");
        let payload = {
          email: data1.email,
          password: data1.password,
        };
        axios
          .post("https://ecommercewebap.herokuapp.com/api/login", payload)
          .then((val) => {
            if (val.data.token) {
              localStorage.setItem("token", val.data.token);
              localStorage.setItem("refresh", val.data.refresh);
              navigate('/')
            }
          })
          .catch();
          
        handleReset();
      }
    } else {
      alert("Invalid Id & Password");
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
                            src={Logins}
                            alt={"Noimage"}
                            width="400"
                            height={400}
                            style={{ marginLeft: "38px", marginTop: "35px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-5 order-2  login_body " >
                        
                        <h1  className="Login_btn">
                          Login
                        </h1>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                name="email"
                                className="form-control"
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

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
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
                              className="form-check-input box"
                              type="checkbox"
                              value=""
                              id="form2Example3"
                              style={{ marginLeft: "-22px", marginTop: "27px" }}
                            />
                            <label
                              className="form-check-label remember"
                              style={{ marginRight: "125px", marginTop: "23px" }}
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
                                <div className="text-body " style={{marginRight:"-92px"}}>
                                  {" "}
                                  Forgot password?
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link to="#">
                              <button
                                type="button"
                                className=" login btn btn-warning btn-lg"
                                style={{
                                  width: "133px",
                                  marginRight: "112px",
                                  marginTop: "30px",
                                }}
                                onClick={() => {
                                  handleSubmit();
                                }}
                              >
                                Login
                              </button>
                            </Link>
                          </div>
                          <div className="Have_an">
                            Dont't Have An Account ?{" "}
                            <Link to="/Pages/Signup">Signup</Link>
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
