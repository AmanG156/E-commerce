import React, { useState } from "react";
import "./Signup.css";
import signup from "../assests/Signup.png";
import axios from "axios";
import { FaUser, FaEnvelopeOpen, FaPhoneVolume ,FaLock} from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

export default function Signup() {
  const [showerror, setShowerror] = useState(false);
  const navigate = useNavigate()
  const [data1, setData1] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
    Cpassword: "",
  });
  const handleInput = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    setData1({
      fullName: "",
      email: "",
      contact: "",
      password: "",
      Cpassword: "",
    });
  };

  const handleSubmit = () => {
    console.log(data1);
    if (
      data1.fullName !== "" &&
      data1.email !== "" &&
      data1.password !== "" &&
      data1.contact !== "" &&
      data1.Cpassword !== ""
    ) {
      if (data1.password === data1.Cpassword) {
        alert("Form is Submitted");
        let payload = {
          name: data1.fullName,
          email: data1.email,
          mobile: Number(data1.contact),
          password: data1.password,
        };
        axios
          .post("https://ecom-five-pi.vercel.app/api/register", payload)
          .then((val) => console.log(val),
          navigate("/Pages/EmailVerify",{state:{"email":data1.email}}))
          .catch(err => console.log(err));

        handleReset();
      } else {
        alert("Password is not same");
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
                  <div className="row11">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="Login_img col-md-6">
                          <img
                            src={signup}
                            alt={"Noimage"}
                            width="400"
                            height="400"
                            style={{ marginLeft: "10px", marginTop: "45px" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 ">
                        <h1 className="signup_header">
                          Sign up
                        </h1>

                        <form className="mx-1 mx-md-4 singupform">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                name="fullName"
                                placeholder="Full Name"
                                value={data1.fullName}
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                              <div className="signupIcon"> <FaUser /> </div>

                              <p style={{ color: "red" }}>
                                {showerror && data1.fullName === ""
                                  ? "Please fill valid entry"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
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
                             <div className="signupIcon"><FaEnvelopeOpen/></div>

                              <p style={{ color: "red" }}>
                                {showerror && data1.email === ""
                                  ? "Please fill valid entry"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="number"
                                id="form3Example4c"
                                className="form-control"
                                name="contact"
                                value={data1.contact}
                                placeholder="Contact Number"
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                                  <div className="signupIcon"><FaPhoneVolume /></div>
                              <p style={{ color: "red" }}>
                                {showerror && data1.contact === ""
                                  ? "Please fill valid entry"
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
                                value={data1.password}
                                placeholder="Password"
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                               <div className="signupIcon">< FaLock/></div>
                              <p style={{ color: "red" }}>
                                {showerror && data1.password === ""
                                  ? "Please fill valid entry"
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
                                name="Cpassword"
                                value={data1.Cpassword}
                                placeholder="Confirm Password"
                                onChange={(event) => {
                                  handleInput(event);
                                }}
                              />
                               <div className="signupIcon">< FaLock/></div>
                               <p style={{ color: "red" }}>
                                {showerror && data1.Cpassword === ""
                                  ? "Please fill valid entry"
                                  : null}{" "}
                              </p>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-warning btn-lg signup_btn"
                              onClick={() => {
                                handleSubmit();
                              }}
                            >
                              Submit
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
