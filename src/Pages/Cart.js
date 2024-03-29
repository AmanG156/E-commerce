/* eslint-disable */
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Footer from "./Footer";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Cart.css";
import { useGlobalContext } from "../context/use-context";

export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { setCart, cart } = useGlobalContext();
  const [total, setTotal] = useState(0);
  console.log(cart,"Cart");
  useEffect(() => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        "https://ecom-five-pi.vercel.app/api/cart",
        {},
        { headers: headers }
      )
      .then((val) => {
        console.log("val", val);
        let t = 0;
        val.data.cart.forEach((v) => {
          console.log("price", v.price);
          t += Number(v.price);
          console.log(t)
          v.quantity = v.quantity;
          v.quantity = 1;
        });
        setTotal(t);
        console.log(val);
        setCart(val.data.cart);
      })
      .catch();
  },[]);
 
  const handleDecrement = (item, event) => {
    event.preventDefault();
    if (item.quantity === 1) {
      alert("quantity will not be less then 1");
    } else {
      item.quantity -= 1;
      let arr = Array(...cart);
      console.log(arr);
      arr[
        arr.map((itm, i) => [i, itm]).filter((x) => x[1]._id === item._id)[0][0]
      ] = item;
      let t = 0;
      arr.forEach((v) => {
        console.log("price", v.price);
        t += Number(v.price) * Number(v.quantity);
      });
      setTotal(t);
      setCart(arr);
    }
  };
  const handleIncrement = (item, event) => {
    event.preventDefault();
    if (item.quantity === item.maxQuantity) {
      alert("max quantity reached");
    } else {
      item.quantity += 1;
      let arr = Array(...cart);
      console.log(arr);
      arr[
        arr.map((itm, i) => [i, itm]).filter((x) => x[1]._id === item._id)[0][0]
      ] = item;
      let t = 0;
      arr.forEach((v) => {
        console.log("price", v.price);
        t += Number(v.price) * Number(v.quantity);
      });
      setTotal(t);
      setCart(arr);
    }
  };

  const remove = (item) => {
    const data = cart.filter((value, index) => value._id !== item._id);
    console.log(data)
    let t = 0;
    data.forEach((r) => {
      console.log("price", r.price);
      t += Number(r.price);
    });
    setTotal(t);
    setCart(data);
    let payload = { id: item._id };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    console.log(payload);
    axios
      .delete("https://ecom-five-pi.vercel.app/api/remove-from-cart", payload, {
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
      <div className="container contain">
        <div className="row">
          <div className="col-md-9 cart_div">
            <div className="card cart_items">
              <div
                className="card-header"
                style={{ textAlign: "left", color: "orange" }}
              >
                My Cart
              </div>
              {cart.map((item, index) => {
                return (
                  <div key={index} className="card-body cart_display">
                    <img
                      src={`http://35.154.48.64:3500/api/${item.image}`}
                      alt={"Noimage"}
                      style={{ width: "20%" }}
                    />
                    <div className="productinfo">
                      <p>{item.name}</p>
                      <h6 style={{  color: "red" }}>
                        Selling Fast!
                      </h6>
                      <h5 >Quantity</h5>
                      <div className=" col add-minus-quantity">
                        <span
                          onClick={(event) => {
                            handleDecrement(item, event);
                          }}
                        >
                          <FaMinus className="minus_icon" />
                        </span>
                        <input
                          type="text"
                          placeholder="0"
                          className="quantity_field"
                          value={item.quantity}
                        />
                        <FaPlus
                          className="plus_icon"
                          onClick={(event) => {
                            handleIncrement(item, event);
                          }}
                        />
                      </div>
                    </div>
                    <div className="remove_currency">
                    <h1
                      onClick={() => {
                        remove(item);
                      }}
                      style={{
                        fontSize: "20px",
                        marginTop: "22px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </h1>
                    <h5 className="cart_price">
                      {item.price.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })} 
                    </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-3 ">
            <div
              className="card cart_card"
             
            >
              <div className="card-body cart_summary">
                <ul>
                  <li className="summary_title">
                    <h5 className="card-title">CartSummary</h5>
                  </li>{" "}
                  <p className="card-text">
                    <li>
                      <span>item Cost : </span>
                      <span>  {total.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })} </span>
                    </li>
                     
                    <li>
                      <span>Order total : </span>
                      <span>  {total.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })} </span>
                    </li>
                    <li>
                      <span> Cart Subtotal : </span>
                      <span>  {total.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })} </span>
                    </li>
                    <br />
                  </p>
                  <div>
                    <Link to="/Pages/ConfirmAddress">
                      <button className="Placeorder_btn ">
                        Place Order
                      </button>
                    </Link>
                  </div>
                </ul>
              </div>
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
