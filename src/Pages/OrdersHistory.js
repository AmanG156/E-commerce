import React from 'react'
// import { FaUser , FaShoppingBag } from "react-icons/fa";
// import icon from "../images/icon.png";
import "./OrdersHistory.css";
// import {Link} from 'react-router-dom'
import Footer from "./Footer";
import watchimg from "../assests/watchimg.webp"
import Header from './Header';


export default function Orders() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div style={{borderBottom:"4px solid"}}></div>
      <div className="card-body card_body ">
              <img src={watchimg} alt={"Noimage"} style={{width:"13%"}} />
              <div className="product_info">
                <p>Smartwatch Definition DO6 Smart Band Exb3 Smartband</p>
                <h6 style={{    marginTop: "22px", color: "red"}}>Selling Fast!</h6>
                <h5 style={{marginTop: "34px"}}>Quantity</h5>
              </div>
              <h3 style={{    fontSize: "20px",marginTop: "20px" , color:"red"}}>15-05-2022</h3>

            </div>
            <div className="card-body card_body ">
              <img src={watchimg} alt={"Noimage"} style={{width:"13%"}} />
              <div className="productinfo">
                <p>Smartwatch Definition DO6 Smart Band Exb3 Smartband</p>
                <h6 style={{    marginTop: "22px", color: "red"}}>Selling Fast!</h6>
                <h5 style={{marginTop: "34px"}}>Quantity</h5>
              </div>
              <h3 style={{    fontSize: "20px",marginTop: "20px" , color:"red"}}>15-05-2022</h3>
            </div>
            <div className="card-body card_body ">
              <img src={watchimg} alt={"Noimage"} style={{width:"13%"}} />
              <div className="productinfo">
                <p>Smartwatch Definition DO6 Smart Band Exb3 Smartband</p>
                <h6 style={{    marginTop: "22px", color: "red"}}>Selling Fast!</h6>
                <h5 style={{marginTop: "34px"}}>Quantity</h5>
              </div>
              <h3 style={{    fontSize: "20px",marginTop: "20px" , color:"red"}}>15-05-2022</h3>

            </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
