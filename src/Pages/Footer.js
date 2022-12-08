import React from "react";
import icon from "../images/icon.png";
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div >
      <div className="container">
        <div className="row">
          <div className="col block_a">
            <img src={icon}  className="footer_img"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
            <a>
              {" "}
              <span className="connect_with">Connect With us</span>{" "}
            </a>
            <div className="footer_icon">
              <FaFacebook />
              <FaTwitter style={{ marginLeft: "18px" }} />
              <FaInstagram style={{ marginLeft: "18px" }} />
              <FaLinkedin style={{ marginLeft: "18px" }} />
            </div>
          </div>
          <div className="col block_b">
            <h3> Compony INFO</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>FAQ</p>
            <p>Feedback</p>
          </div>
          <div className="col block_c">
            <h3>INFORMATION</h3>
            <p>Customer Service</p>
            <p>Woots's Return Policy</p>
            <p>Product Warranty</p>
            <p>Product Recall Noticessing But</p>
            <p>Woot</p>
          </div>
          <div className="col block_d">
            <h3>HELP</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Forums</p>
            <p>Everythink But Woot</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"orange", height:"35px" ,textAlign:"center" ,maxWidth:"1800px"}}> Copyright @2022 CoderID</div>

    </div>
  );
}
