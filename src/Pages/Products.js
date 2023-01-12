/* eslint-disable */
import React, { useEffect, useState } from "react";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import icon from "../assests/icon.png";
import Footer from "./Footer";
import "./Products.css";
import { AppContext, useGlobalContext } from "../context/use-context";
import Modal from "react-bootstrap/Modal";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [allProducts, setAllproducts] = useState([]);
  const { setCart, cart } = useGlobalContext();
  const [category, setCategory] = useState([]);
  const [selectCat, setSelectCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const { login, setLogin, user } = useGlobalContext();
  const [isReadMore, setIsReadMore] = useState(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const navigate = useNavigate;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  // const [istoggle, setistoggle] =useState(false)
  setTimeout(handleClose1, 1000)
  useEffect(() => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        "http://35.154.48.64:3500/api/getCartitems",
        {},
        { headers: headers }
      )
      .then((val) => {
        setCart(val.data);
      });
    axios
      .get("http://35.154.48.64:3500/api/allCategory")
      .then((val) => {
        console.log(val);
        setCategory(val.data);
      })
      .catch();
    axios
      .get("http://35.154.48.64:3500/api/allProducts")
      .then((val) => {
        console.log(val);
        setProduct(val.data.products);
        setAllproducts(val.data.products);
      })
      .catch();
  }, [loading]);
  const Quantity_Number = () => {
    let sum = 0;
    cart.forEach((e) => {
      sum += Number(e.quantity);
    });
    console.log("sum", sum);
    return sum;
  };
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

  const filterCategory = (e) => {
    if (e.target.checked) {
      let cat = [...selectCat, e.target.value];

      let data = allProducts.filter((v) => cat.includes(v.category));
      setProduct(data);
      setSelectCat(cat);
    } else {
      
      let cat = selectCat.filter((v) => v !== e.target.value);

      let data = allProducts.filter((v) => cat.includes(v.category));
      if(selectCat.length==0 || e.target.value== selectCat[0]){
        console.log("check", selectCat);
          setProduct(allProducts)
      }else{

      
      setProduct(data);
      setSelectCat(cat);
      }
    }
  };
  const logout = () => {
    localStorage.setItem("token", "");
    setLogin(!login);
  };
  console.log(user);
  const Search = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    let data = allProducts.filter(
      (v) => v.name.toLowerCase().indexOf(lowerCase) !== -1
    );
    setProduct(data);
    console.log(lowerCase);
  };
 
  return (
    <div>
      <nav className="navbar bg-light header">
        <div className="container-fluid">
          <img src={icon} className="Product_header_icon" style={{ marginLeft: "40px", marginTop: "6px" }} />
          <input
            type="search"
            placeholder="  Enter Your Product Name"
            onChange={(e) => {
              Search(e);
            }}
            className="Product_Search_bar"
          />

          <div className="headicons">
            <div className="profileicon">
              <Link to="/Pages/MyProfile">
                {" "}
                <FaUser className="header_icon" />
              </Link>
            </div>
            <div className="carticon">
              <Link to="/Pages/Cart">
                {" "}
                <div className="amount-container">
                  <p className="total-amount">{cart.length}</p>
                </div>
              </Link>
              <Link to="/Pages/Cart">
                {" "}
                <FaShoppingBag className="bagIcon" />{" "}
              </Link>
            </div>
          </div>
          <Link to="/Pages/Login">
            {user && user.email?.length > 0 ? (
              <button
                className="Product_logout_btn"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            ) : (
              <button className="Product_logout_btn">Login</button>
            )}
          </Link>
        </div>
      </nav>
      <div style={{ borderBottom: "4px solid" }}></div>
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 sidelist_col">
            <div className="side_List">
              <div className=" categories">Categories </div>
              <div className="Checkbox">
                <input type="checkbox" onClick={()=>setProduct(allProducts)}/>
                <label>All Deals</label>
                <br />
                {category.map((v) => (
                  <>
                    <input
                      type="checkbox"
                      value={v.category}
                      onClick={(e) => filterCategory(e)}
                    />
                    <label>{v.category}</label>
                    <br />
                  </>
                ))}
              </div>
              <div style={{ border: "0.5px solid #ccc" }}></div>
              <div className="col Prices">Price Ranges </div>

              <div className="Checkbox">
                <input type="checkbox" />
                <label>All Prices</label>
                <br />
                <input type="checkbox" />
                <label>Under 250</label>
                <br />
                <input type="checkbox" />
                <label>250 to 500 </label>
                <br />
                <input type="checkbox" />
                <label>350 to 600</label>
                <br />
                <input type="checkbox" />
                <label>400 to 800</label>
              </div>
            </div>
          </div>
          <div className="col col-lg-8 product_col">
            <div className="Card-headers">Products</div>
            <div className="row Product_list">
              {product.map((item, index) => {
                return (
                  <div key={index} className="col">
                    <div className="card_Product ">
                      <img
                        src={`https://ecommercewebap.herokuapp.com/${item.image}`}
                        className="Product_img"
                      />
                      <div className="Product_body">
                        <h5 className="card-title">
                          {" "}
                          {isReadMore ? item.name.slice(0, 10) : item.name}
                          {item.name.length > 10 && (
                            <span onClick={toggleReadMore}>
                              {isReadMore ? "..." : " ..."}
                            </span>
                          )}
                        </h5>
                        <Link
                          to={`/Pages/ProductDetails/${item._id}/${item.category}`}
                        >
                          {" "}
                          <p>
                            {isReadMore ? item.name.slice(0, 10) : item.name}

                            {item.name.length > 10 && (
                              <span onClick={toggleReadMore}>
                                {isReadMore ? "...more" : " ...less"}
                              </span>
                            )}
                          </p>
                        </Link>
                        <div className="Product_Price">
                          {" "}
                          {item.price.toLocaleString("en-IN", {
                            maximumFractionDigits: 2,
                            style: "currency",
                            currency: "INR",
                          })}
                        </div>
                        <div className="row">
                          <div className="col popup ">
                            <button
                            className="btn btn-warning"
                            style={{ width: "128px" }}
                            data-target="#exampleModalLong"
                            onClick={() => {
                              add(item);
                             
                              handleShow1()
                            }}
                          >
                            Add To Cart
                          </button>
               
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal show={show1} onHide={handleClose1} className="modalClass" >
           
            <Modal.Body>
              <h6 >Product Has been Added</h6>
            </Modal.Body>
          </Modal>
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}
