
import React, { useEffect, useState } from "react";
import { FaUser, FaShoppingBag, } from "react-icons/fa";
import icon from "../assests/icon.png";
import { useGlobalContext } from "../context/use-context";
import axios from "axios";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
const { setCart, cart } = useGlobalContext();
const allProducts = useState([]);
const setProduct = useState([]);
const { login, setLogin, user } = useGlobalContext();
// const [searchProduct, setSearchProduct] = useState('');
 
useEffect(()=>{
    let headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      axios
        .post("https://ecommercewebap.herokuapp.com/api/getCartitems", {}, { headers: headers })
        .then((val)=>{setCart(val.data)})
},[])
const Quantity_Number =()=>{
  let sum = 0 
 cart.forEach((e)=>{
   sum+=Number(e.quantity)
 })
 console.log("sum",sum)
 return sum ;
}
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
          <Link to="/">
          <img src={icon} alt="" className="Header_img" style={{ marginLeft: "40px", marginTop: "6px" }} />
          </Link>
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
                    <p className="total-amount">{Quantity_Number()}</p>
                  </div>
                </Link>
                <Link to="/Pages/Cart">
                {" "}
                <FaShoppingBag className="bagIcon" />{" "}
              </Link>
            </div>
          </div>
          <div className="header_logouts_btn">
          <Link to="/Pages/Login">
            {user&&user.length > 0 ? (
              <button
                className="header_logout_btn"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            ) : (
              <button className="header_logout_btn">LogIn</button>
            )}
          </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
