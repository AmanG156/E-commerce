import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyOrder.css";
import Footer from "./Footer";
import watchimg from "../assests/watchimg.webp";
import axios from "axios";
import Header from "./Header";

export default function MyProfile() {
  useEffect(()=>{
    axios 
    .post("http://35.154.48.64:3500/api/getOrderList")
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error)
    })
  },[])
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div style={{ borderBottom: "4px solid" }}></div>
      <div className="container profile_row">
        <div className="row ">
          <div className="col-lg-3 col-md-3 col-sm-12 ">
            <div className="side_bar">
              <h3 className=" card profile">My Profile</h3>
              <Link to="/Pages/MyOrder">
                {" "}
                <h5 className="my_orders">My Order</h5>
              </Link>
              <br />
              <Link to="/Pages/OrdersHistory">
                {" "}
                <h5 className="orders_History"> Orders History</h5>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div className="card card_items">
              <div
                className="card-header"
                style={{ textAlign: "left", color: "orange" }}
              >
                My Orders
              </div>
              <div className="card-body">
                <img src={watchimg} alt="" style={{ width: "20%" }} />
                <div className="productinfo">
                  <p>Smartwatch Definition DO6 Smart Band Exb3 Smartband</p>
                  <h6 style={{ marginTop: "22px", color: "red" }}>
                    Selling Fast!
                  </h6>
                  <h5 style={{ marginTop: "34px" }}>Quantity</h5>
                </div>
                <h3 style={{ fontSize: "21px", marginTop: "20px" }}>Remove</h3>
              </div>
            </div>
            <div className="card-body Myorder_body ">
              <img src={watchimg} alt="" style={{ width: "20%" }} />
              <div className="productinfo">
                <p>Smartwatch Definition DO6 Smart Band Exb3 Smartband</p>
                <h6 style={{ marginTop: "22px", color: "red" }}>
                  Selling Fast!
                </h6>
                <h5 style={{ marginTop: "34px" }}>Quantity</h5>
              </div>
              <h3 style={{ fontSize: "21px", marginTop: "20px", marginRight: "12px" }}>Remove</h3>
            </div>
            <div className="card-body Myorder_body ">
              <img src={watchimg} alt="" style={{ width: "20%" }} />
              <div className="Myorder_info">
                <p>Smartwatch Definition DO6 Smart Band Exb3 Smartband</p>
                <h6 style={{ marginTop: "22px", color: "red" }}>
                  Selling Fast!
                </h6>
                <h5 style={{ marginTop: "34px" }}>Quantity</h5>
              </div>
              <h3 style={{ fontSize: "21px", marginTop: "20px", marginRight: "12px" }}>Remove</h3>
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
