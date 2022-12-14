// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";

import MyOrder from "./Pages/MyOrder";
import ConfirmAddress from "./Pages/ConfirmAddress";
// import Footer from "./Pages/Footer";
import MyProfile from "./Pages/MyProfile";
import Cart from "./Pages/Cart";
import OrdersHistory from "./Pages/OrdersHistory";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Otp from "./Pages/Otp";
import Forgot from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import ProductDetails from "./Pages/ProductDetails";
import StripePay from "./Pages/StripePay";
import VSignUp from "./Pages/Vendor/VSignUp/VSignUp";
import VLogin from "./Pages/Vendor/VLogin/VLogin";
import BussinessRegistration from "./Pages/Vendor/Bussiness_registration/BussinessRegistration";
import VProductDetails from "./Pages/Vendor/VProductDetails/VProductDetails"
import OrderManagment from "./Pages/Vendor/OrderManagment/OrderManagment";
import Reports from "./Pages/Vendor/Reports/Reports";
import ProductCatalogue from "./Pages/Vendor/ProductCatalogue/ProductCatalogue";
// import VHeader from "./Pages/Vendor/VHeader/VHeader"
import VHeadersidebar from "./Pages/Vendor/VHeadersidebar/VHeadersidebar";
// import SideBar from "./Pages/Vendor/SideBar/SideBar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/Pages/Signup" element={<Signup />} />
        <Route path="/Pages/Vendor/VSignUp/VSignUp" element={<VSignUp />} />
        <Route path="/Pages/Vendor/VHeader_sidebar/VHeader_sidebar" element={<VHeadersidebar/>}/>
        <Route path="/Pages/Vendor/VLogin/VLogin" element={<VLogin />} />
        <Route path="/Pages/Vendor/Bussiness_registration/Bussiness_registration" element={<BussinessRegistration/>}/>
        <Route path="/Pages/Vendor/VProductDetails/VProductDetails" element={<VProductDetails/>}/>
        <Route path="/Pages/Vendor/OrderManagment/OrderManagment" element={<OrderManagment/>}/>
        <Route path= "/Pages/Vendor/Reports/Reports" element={<Reports/>}/>
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/Vendor/ProductCatalogue/ProductCatalogue" element={<ProductCatalogue/>}/>
        <Route path="/Pages/StripePay" element={<StripePay/>}/>
        <Route path="/Pages/Forgot" element={<Forgot />} />
        <Route path="/Pages/ResetPassword" element={<ResetPassword />} />
        <Route path="/Pages/MyProfile" element={<MyProfile />} />
        <Route path="/Pages/MyOrder" element={<MyOrder />} />
        <Route path="/Pages/ConfirmAddress " element={<ConfirmAddress/>}/>
        <Route path="/Pages/OrdersHistory" element={<OrdersHistory />} />
        <Route path="/Pages/Cart" element={<Cart />} />
        <Route path="/Pages/Otp" element={<Otp />} />
        <Route path="/Pages/ProductDetails/:id/:category" element={<ProductDetails />} />
        {/* <Route path="/Pages/Vendor/SideBar/SideBar" element={<SideBar/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
