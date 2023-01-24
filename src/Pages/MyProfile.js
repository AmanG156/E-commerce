import React, { useEffect, useState } from "react";
import profilepic from "../assests/profilepic.png";
import "./MyProfile.css";
import Header from "./Header";
import {
  FaUser,
  FaEnvelopeOpen,
  FaPhoneVolume,
  FaAddressCard,
} from "react-icons/fa";
import Footer from "./Footer";
import axios from "axios";
import {  Link } from "react-router-dom";
// import { useGlobalContext } from "../context/use-context";

export default function MyProfile() {
  const [showerror, setShowerror] = useState(false);
  // const [address,setAddress]= useGlobalContext()
  const [image, setImage] = useState([]);
  const [path, setPath] = useState("");
  const [data1, setData1] = useState({
    fullName: "",
    email: "",
    contact: "",
    address: "",
  });
  const handleInput = (event) => {
    setData1({ ...data1, [event.target.name]: event.target.value });
  };

  const handleImage = (e) => {
    // setData1({ })
    let img_url =  URL.createObjectURL(e.target.files[0])
    console.log(img_url)

    setImage(img_url);
    uploadImage(img_url)
  };
  const handleReset = () => {
    setData1({
      fullName: "",
      email: "",
      contact: "",
    });
  };
  useEffect(() => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        "https://ecom-five-pi.vercel.app/api/user",
        {},
        { headers: headers }
      )
      .then((val) => {
        let value = val.data.result;

        // setPath(
        //   value.profileImage
        //     ? "data:image/png;base64, " + value.profileImage
        //     : image
        // );
        // console.log(value.profileImage);
        setData1({
          fullName: value.name,
          email: value.email,
          address: value.address,
          contact: value.mobile,
          // profile: value.profileImage ? value.profileImage : image,
        });
      })
      .catch();
  }, []);
  const uploadImage=(file)=>{

    const formData = new FormData();
    formData.append("image", file);
    axios.post("https://ecom-five-pi.vercel.app/api/upload/profile-pic",formData,)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  const handleSubmit = () => {
    console.log(data1);
    if (
      data1.fullName !== "" &&
      data1.email !== "" &&
      data1.contact !== "" &&
      data1.address !== ""
    ) {
      alert("Form is Submitted");

      const formData = new FormData();
      
      formData.append("name", data1.fullName);
      formData.append("email", data1.email);
      formData.append("mobile", data1.contact);
      formData.append("address", data1.address);

      // let payload = {
      //   name: data1.fullName,
      //   email: data1.email,
      //   mobile: data1.contact,
      //   address: data1.address,
      //   image: formData,
      // };
      var headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      axios
        .put("https://ecom-five-pi.vercel.app/api/user/update", formData, {
          headers: headers,
        })
        .then((val) => console.log(val))
        .catch();

      handleReset();
    } else {
      alert("Invalid entry");
      setShowerror(true);
    }
  };
  return (
    <div>
      <div className="Header">
        <Header />
      </div>

      <div style={{ borderBottom: "4px solid" }}></div>
      <div className="container profile_row">
        <div className="row ">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="side_bar">
              <h3 className=" card profile">My Profile</h3>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Pages/MyOrder"
              >
                {" "}
                <h5 className="my_orders">My Order</h5>
              </Link>
              <br />
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Pages/OrdersHistory"
              >
                {" "}
                <h5 className="order_History"> Orders History</h5>{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 Input_profilepage">
            <div className="card Card_body">
              <div
                className=""
                style={{
                  float: "left",
                  backgroundColor: "#eeeee4",
                  height: "165px",
                }}
              >
                <div style={{ maxWidth: "268px" }}>
                  <img src={path} alt="" className="profilepic" />
                </div>
                <div
                  className=" "
                  style={{
                    textAlign: " left",
                    marginTop: " -140px",
                    marginLeft: "186px",
                  }}
                >
                  <h3>{data1.fullName}</h3>
                  <p>{data1.email}</p>
                </div>
              </div>
            </div>
            <h3 className="My_profileupdate">My Profile</h3>
            <div className="input_field">
              <div className="inputicon">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="Full_Name"
                  style={{ paddingLeft: "41px" }}
                  value={data1.fullName}
                  name="fullName"
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
                <div className="icons">
                  {" "}
                  <FaUser />{" "}
                </div>
              </div>
              <p style={{ color: "red" }}>
                {showerror && data1.fullName === ""
                  ? "Please fill valid entry"
                  : null}{" "}
              </p>

              <br />
              <div className="inputicon">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="Email_id"
                  name="email"
                  style={{ paddingLeft: "41px" }}
                  disabled
                  value={data1.email}
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
                <div className="icons">
                  <FaEnvelopeOpen />
                </div>
              </div>
              <p style={{ color: "red" }}>
                {showerror && data1.fullName === ""
                  ? "Please fill valid entry"
                  : null}{" "}
              </p>
              <br />
              <div className="inputicon">
                <input
                  type="Number"
                  placeholder="Contact No."
                  className="Contact_number"
                  name="contact"
                  style={{ paddingLeft: "41px" }}
                  value={data1.contact}
                  onChange={(event) => {
                    handleInput(event);
                  }}
                />
                <div className="icons">
                  {" "}
                  <FaPhoneVolume />{" "}
                </div>
              </div>
              <p style={{ color: "red" }}>
                {showerror && data1.fullName === ""
                  ? "Please fill valid entry"
                  : null}{" "}
              </p>
              <br />
            
              <div className="inputicon">
                <textarea
                  placeholder="Enter Your Address"
                  className="Confirm_Address"
                  name="address"
                  
                  value={data1?.address[0]?.Address}

                  onChange={(event) => {
                    handleInput(event);
                  }}
                ></textarea>

                <div className="icons">
                  {" "}
                  <FaAddressCard />{" "}
                </div>
              </div>
              <p style={{ color: "red" }}>
                {showerror && data1.fullName === ""
                  ? "Please fill valid entry"
                  : null}{" "}
              </p>
              <input
                type="file"
                style={{ paddingBottom: "70px", display: "block" }}
                onChange={handleImage}
              />
              <button
                className="Profile_btn"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
