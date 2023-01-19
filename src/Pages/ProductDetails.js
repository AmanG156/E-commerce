import React, { useEffect, useState } from "react";
// import icon from "../images/icon.png";
import {  useParams } from "react-router-dom";
import "./ProductDetails.css";

import Footer from "./Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import {  useGlobalContext } from "../context/use-context";
import Header from "./Header";
// import Products from "./Products";

export default function PaymentDetails() {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setCart, cart } = useGlobalContext();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  let { id, category } = useParams();
  useEffect(() => {
    let payload = { id: id };
    axios
      .post("https://ecom-five-pi.vercel.app/api/product", payload)
      .then(function (response) {
        console.log(response);
        setProduct(response.data[0]);
        setRelated(
          response.data[1].length > 3
            ? response.data[1].slice(0, 3)
            : response.data[1]
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const add = (item) => {
    setCart((cart) => [...cart, item]);
    let payload = {
      productId: item._id,
      quantity: 1,
      price: item.price,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post("http://35.154.48.64:3500/api/addToCart", payload, {
        headers: headers,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(!loading);
  };
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div style={{ borderBottom: "4px solid" }}></div>
      <div className="row " style={{ paddingTop: "52px" }}>
        <div className="  col ">
          <div>
            <img
              src={`http://35.154.48.64:3500/api/${product.image}`}
              alt={"Noimage"}
              className="img"
            />
          </div>
          <div className="images_details">
            <img
              src={`http://35.154.48.64:3500/api/${product.image}`}
              alt={"Noimage"}
              className="images"
            />
            <img
              src={`http://35.154.48.64:3500/api/${product.image}`}
              alt={"Noimage"}
              className="images"
            />
            <img
              src={`http://35.154.48.64:3500/api/${product.image}`}
              alt={"Noimage"}
              className="images"
            />
            <img
              src={`http://35.154.48.64:3500/api/${product.image}`}
              alt={"Noimage"}
              className="images"
            />
          </div>
        </div>
        <div className="col product_details">
          <h3 className="heading">Today's Hot Deals</h3>
          <h4 className="head_h4">{product.name} </h4>
          <h5 className="currency">
            {" "}
            {product.price
              ? product.price.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })
              : 0}{" "}
          </h5>
          <h6 className="details">{product.desc} </h6>
          <button
            className="add_btn"
            onClick={() => {
              add(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="tabs">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Features" className="tab_content">
            <h6 className="content_heading">{product.features}</h6>
          </Tab>
          <Tab eventKey="profile" title="Specs" className="tab_content">
            <h6 className="content_heading">{product.specifications}</h6>
        
          </Tab>
          <Tab eventKey="contact" title="Sales Stats" className="tab_content">
            <h5 className="content_heading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </h5>
            <p>
              {" "}
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Tab>
        </Tabs>
      </div>
      <div className="row">
        <div className="col extraProduct">
          {related.map((item, index) => {
            return (
              <div
                key={item}
                className="card Product_card"
               
              >
                <img
                  src={`http://35.154.48.64:3500/api/${item.image}`}
                  alt={"Noimage"}
                  className="card-img-top"
                />
                <div class="card-body">
                  <ul>
                    <li>
                      <h5 class="card-title">{item.name}</h5>
                    </li>
                    <li>
                      <p>
                        {isReadMore ? item.details.slice(0, 20) : item.details}

                        {item.details.length > 20 && (
                          <span onClick={toggleReadMore}>
                            {isReadMore ? "...read more" : " ...show less"}
                          </span>
                        )}
                      </p>
                    </li>
                    <li>
                      <button
                        class="btn btn-primary"
                        onClick={() => {
                          add(item);
                        }}
                      >
                        Add To Cart{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
