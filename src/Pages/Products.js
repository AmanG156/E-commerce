import React, { useEffect, useState } from "react";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import watchimg from "../images/watchimg.webp";
import axios from "axios";
import icon from "../images/icon.png";
import Footer from "./Footer";
import Header from "./Header";
import "./Products.css";
import { AppContext, useGlobalContext } from "../context/use-context";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [allProducts, setAllproducts] = useState([]);
  const { setCart, cart } = useGlobalContext();
  const [category, setCategory] = useState([]);
  const [selectCat, setSelectCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const { login, setLogin, user } = useGlobalContext();
  const [isReadMore, setIsReadMore] = useState(true);
  const navigate = useNavigate;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        "https://ecommercewebap.herokuapp.com/api/getCartitems",
        {},
        { headers: headers }
      )
      .then((val) => {
        setCart(val.data);
      });
    axios
      .get("https://ecommercewebap.herokuapp.com/api//allCategory")
      .then((val) => {
        console.log(val);
        setCategory(val.data);
      })
      .catch();
    axios
      .get("https://ecommercewebap.herokuapp.com/api/allProducts")
      .then((val) => {
        console.log(val);
        setProduct(val.data);
        setAllproducts(val.data);
      })
      .catch();
  }, [loading]);

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
      .post("https://ecommercewebap.herokuapp.com/api/addToCart", payload, {
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
      setProduct(data);
      setSelectCat(cat);
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
      {/* <div className="Header">
        <Header />
      </div> */}
      <nav className="navbar bg-light header">
        <div className="container-fluid">
          <img src={icon} style={{ marginLeft: "40px", marginTop: "6px" }} />
          <input
            type="search"
            placeholder="  Enter Your Product Name"
            onChange={(e) => {
              Search(e);
            }}
            className="Searchbar"
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
                className="logout_btn"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            ) : (
              <button className="logout_btn">LogIn</button>
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
                <input type="checkbox" />
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
          <div className="col col-lg-9 product_col">
            <div className="Card-headers">Products</div>
            <div className="row Product_list">
              {product.map((item, index) => {
                return (
                  <div key={index} className="col">
                    <div
                      className="card "
                      style={{
                        width: "18rem",
                        marginTop: "20px",
                        display: "flex",
                      }}
                    >
                      <img
                        src={`https://ecommercewebap.herokuapp.com/${item.image}`}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {" "}
                          {isReadMore ? item.name.slice(0, 10) : item.name}
                          {item.name.length > 10 && (
                            <span onClick={toggleReadMore}>
                              {isReadMore ? "...more" : " ...less"}
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
                      </div>
                      <div className="row">
                        <div className="col ">
                          <button
                            className="btn btn-warning"
                            style={{ width: "128px" }}
                            onClick={() => {
                              add(item);
                            }}
                          >
                            Add To Cart
                          </button>
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
      <div style={{ marginTop: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}
