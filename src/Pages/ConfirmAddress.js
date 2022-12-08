import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ConfirmAddress.css";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/use-context";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
export default function ConfirmAddress() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [getCountry, setCountry] = useState();
  const [getState, setState] = useState([]);
  const [selectedState, getSelectedState] = useState();
  const [cities, setCities] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { setCart, cart } = useGlobalContext();
 const [placeorder,setPlaceorder]=useState({
   address:"",
   ProductList:[],
   cartsummary:{
    itemCost:"",
    orderTotal:"",
    cartSubtotal:""
   },
})
  const [address, setAddress] = useState({
    Address: "",
    ZipCode: "",
    Country: "",
    State: "",
    City: "",
  });
  const [addresslist, setAddresslist] = useState([]);
  const [userdata, setUserdata] = useState();
  const [editId, setEditId] = useState(null);
  const handleInput = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
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
        console.log("val", val);
        let t = 0;
        val.data.forEach((v) => {
          console.log("price", v.price);
          t += Number(v.price);
          v.maxQuantity = v.quantity;
          v.quantity = 1;
        });
        setTotal(t);
        console.log("cart",val);
        setCart(val.data);
        
          creatpayload(val.data)

      })
      .catch();
     
  }, []);
  const creatpayload =(cartdata)=>{
    console.log("payload",userdata)
    let payload = {
          email:userdata.email,
          address:userdata.address[0],
          ProductList:cartdata,
          cartsummary:{
            itemCost:"",
            orderTotal:"",
            cartSubtotal:""
          }
    }
    console.log("payload",payload)
    setPlaceorder(payload)
  }
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
    let t = 0;
    data.forEach((r) => {
      console.log("price", r.price);
      t += Number(r.price);
    });
    setTotal(t);
    setCart(data);
    // setLoading(!loading)
    let payload = { id: item._id };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    console.log(payload);
    axios
      .post("http://localhost:3500/api/removeFromCart", payload, {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = addresslist;
    arr = [...arr, address];
    setAddresslist(arr);
    let payload = {
      name: userdata.name,
      email: userdata.email,
      mobile: userdata.mobile,
      address: arr,
    };
    var header = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .put("https://ecommercewebap.herokuapp.com/api/updateProfile", payload, {
        headers: header,
      })
      .then()
      .catch();
  };
  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    getUsserDetails(headers);
  }, []);

  const getUsserDetails = (headers) => {
    axios
      .post(
        "https://ecommercewebap.herokuapp.com/api/getUserDetails",
        {},
        { headers: headers }
      )
      .then((res) => {
        console.log(res.data);
        setUserdata(res.data.result);
        setAddresslist(res.data.result.address);
      })

      .catch((err) => console.log(err));
  };

  const country = [...new Set(data.map((item) => item.country))];
  country.sort();
  console.log(data);
  const handleCountry = (e) => {
    let states = data.filter((state) => state.country === e.target.value);
    states = [...new Set(states.map((item) => item.subcountry))];
    states.sort();
    setState(states);
  };
  const handleState = (e) => {
    let cities = data.filter((city) => city.subcountry === e.target.value);
    setCities(cities);
  };
  const editBox = (e, i) => {
    // alert("editId",editId)
    setEditId(Number(i));
    let data = addresslist[i];
    setAddress(data);
    setEdit(true);
  };
  const handleedit = () => {
    if (editId) {
      let arr = [...addresslist];
      arr[editId] = address;
      let payload = {
        name: userdata.name,
        email: userdata.email,
        mobile: userdata.mobile,
        address: arr,
      };

      var header = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      axios
        .put(
          "https://ecommercewebap.herokuapp.com/api/updateProfile",
          payload,
          { headers: header }
        )
        .then()
        .catch();
    }
  };
  const removeTodo = (i) => {
    const removedArr = [...addresslist].filter((todo, ind) => ind !== i);
    setAddresslist(removedArr);
    // setServiceList(removedArr);
    let payload = {
      name: userdata.name,
      email: userdata.email,
      mobile: userdata.mobile,
      address: removedArr,
    };
    var header = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    // useEffect(()=>{

    // })
    axios
      .put("https://ecommercewebap.herokuapp.com/api/updateProfile", payload, {
        headers: header,
      })
      .then()
      .catch();
  };
  // setServiceList((prev: any) =>
  //     prev.map((item: any, index: any) => (index === todoId ? newValue : item))
  //   );
  const deleteAddress = (e, i) => {
    alert("sdjskjdsk");
    let arr = [...addresslist];
    // arr.splice(i, 1);
    console.log(arr);
    const removedArr = [...addresslist].filter((todo, ind) => ind !== i);
    setAddresslist(removedArr);
    console.log(removedArr);
    let payload = {
      name: userdata.name,
      email: userdata.email,
      mobile: userdata.mobile,
      address: removedArr,
    };
    var header = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    // useEffect(()=>{

    // })
    axios
      .put("https://ecommercewebap.herokuapp.com/api/updateProfile", payload, {
        headers: header,
      })
      .then()
      .catch();
    // setAddresslist(arr);
  };
  const handleEditSubmit = (e)=>{
    e.preventDefault()
    let data = addresslist
    data[editId]= address
    setAddresslist(data)
    setEdit(false)
  }

  const selectAddress=(index)=>{
    let add = addresslist[index]
    let payload = placeorder
    payload.address = add
    console.log(payload)
    setPlaceorder(payload)
  }
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div style={{ borderBottom: "4px solid" }}></div>
      <div className="row">
        <div className="col-md-9">
          {addresslist.map((v, i) => {
            console.log(v);
            return (
              <div key={i} className="Address_div">
                <input type="radio" onClick={()=>selectAddress(i)} defaultChecked={i===0?true:false} name="check" className="check_btn"/>

                <h3 className="Address_heading">{userdata.name}</h3>

                <h5 className="detail_address">
                  {v.Address}, {v.City}, {v.ZipCode}, {v.State}, {v.Country}
                </h5>
                {/* <div className="Edit_icon" onClick={(e) => editBox(e, index)}> */}
                {/* <div>
                <button
                  className="Edit_icon"
                  onClick={(e) => editBox(e, i)}
                >
                  <BiEdit />
                </button>
                </div> */}
                {/* </div> */}
                <div className="Edit_icon">
                  {" "}
                  <span onClick={(e) => editBox(e, i)}>
                    <BiEdit />
                  </span>
                </div>
                <div className="Delete_icon">
                  <span onClick={() => removeTodo(i)}>
                    {" "}
                    <FaTrash />
                  </span>
                </div>
              </div>
            );
          })}
          <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalBody>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <Row>
                  <Col lg={10}>
                    <div>
                      <label htmlFor="name">Address</label>
                      <br />
                      <input
                        type="text"
                        name="Address"
                        className="Input_field"
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        placeholder="Address"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Zip Code</label>
                      <br />
                      <input
                        type="numberx`"
                        name="ZipCode"
                        className="Input_field"
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        placeholder="Zip Code"
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Country</label>
                      <br />
                      <select
                        onChange={(e) => {
                          handleCountry(e);
                          handleInput(e);
                        }}
                        className="Country_field"
                        name="Country"
                      >
                        <option value="">selectCountry</option>
                        {country.map((items) => (
                          <option key={items} value={getCountry}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">State</label>
                      <br />
                      <select
                        onChange={(e) => {
                          handleState(e);
                          handleInput(e);
                        }}
                        className="State_field"
                        name="State"
                      >
                        <option value="">selectState</option>
                        {getState.map((items) => (
                          <option key={items} value={selectedState}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">City</label>
                      <br />
                      <select
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        className="City_field"
                        name="City"
                      >
                        <option value="">selectCity</option>
                        {cities.map((items) => (
                          <option key={items.name}>{items.name}</option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <button
                      className="save_btn"
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Save
                    </button>
                  </Col>
                </Row>
              </form>
            </ModalBody>
          </Modal>
          <Modal size="lg" isOpen={edit} toggle={() => setModal(!edit)}>
            <ModalBody>
              <form
                onSubmit={(e) => {
                  handleEditSubmit(e);
                }}
              >
                <Row>
                  <Col lg={10}>
                    <div>
                      <label htmlFor="name">Address</label>
                      <br />
                      <input
                        type="text"
                        name="Address"
                        className="Input_field"
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        placeholder="Address"
                        value={address.Address}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Zip Code</label>
                      <br />
                      <input
                        type="numberx`"
                        name="ZipCode"
                        className="Input_field"
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        placeholder="Zip Code"
                        value={address.ZipCode}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">Country</label>
                      <br />
                      <select
                        onChange={(e) => {
                          handleCountry(e);
                          handleInput(e);
                        }}
                        className="Country_field"
                        name="Country"
                      
                      >
                        <option value="">selectCountry</option>
                        {country.map((items) => (
                          <option key={items} value={getCountry}  >
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">State</label>
                      <br />
                      <select
                        onChange={(e) => {
                          handleState(e);
                          handleInput(e);
                        }}
                        className="State_field"
                        name="State"
                      >
                        <option value="">selectState</option>
                        {getState.map((items) => (
                          <option key={items} value={selectedState} >
                            {items}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <label htmlFor="name">City</label>
                      <br />
                      <select
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        className="City_field"
                        name="City"
                      >
                        <option value="">selectCity</option>
                        {cities.map((items) => (
                          <option key={items.name}>{items.name}</option>
                        ))}
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <button
                      className="save_btn"
                      type="submit"
                      onClick={(e) => handleEditSubmit(e)}
                    >
                      Save
                    </button>
                  </Col>
                </Row>
              </form>
            </ModalBody>
          </Modal>
          <div>
            {/* <button className="Add_btn" onClick={()=>setModal(true)}>Add Address</button> */}
            <h3 className="Add_btn" onClick={() => setModal(true)}>
              Add New Address
            </h3>
            {/* <div className="plus_icon"><FaPlus/></div> */}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card Confirm_card"
            style={{ width: "18rem", height: "260px" }}
          >
            <div className="card-body cart_summary">
              <ul>
                <li className="summary_title">
                  <h5 className="card-title">CartSummary</h5>
                </li>{" "}
                <p className="card-text">
                  <li>
                    <span>item Cost : </span>
                    <span>{total}</span>
                  </li>
                  <br />
                  <li>
                    <span>Order total : </span>
                    <span>{total}</span>
                  </li>
                  <li>
                    <span> Cart Subtotal : </span>
                    <span>{total}</span>
                  </li>
                  <br />
                </p>
                <div>
                  <Link to="/Pages/ConfirmAddress">
                    <button className="Placeorder_btn btn btn-warning">
                      Place Order
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <div className="card cart_item">
          <div
            className="card-header"
            style={{ textAlign: "left", color: "orange" }}
          >
            My Orders
          </div>
          {cart.map((item, index) => {
            return (
              <div key={index} className="card-body cart_display">
                <img
                  src={`https://ecommercewebap.herokuapp.com/${item.image}`}
                  alt={"Noimage"}
                  style={{ width: "20%" }}
                />
                <div className="productinfo">
                  <p>{item.name}</p>
                  <h6 style={{ marginTop: "22px", color: "red" }}>
                    Selling Fast!
                  </h6>
                  <h5 style={{ marginTop: "34px" }}>Quantity</h5>
                  <div className=" col add-minus-quantity">
                    {/* <span
                          onClick={(event) => {
                            handleDecrement(item, event);
                          }}
                        >
                          <FaMinus className="minus_icon" /> */}
                    {/* </span> */}
                    <input
                      type="text"
                      placeholder="0"
                      className="quantity_field"
                      value={item.quantity}
                    />
                    {/* <FaPlus
                          className="plus_icon"
                          onClick={(event) => {
                            handleIncrement(item, event);
                          }}
                        /> */}
                  </div>
                </div>
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
            );
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
