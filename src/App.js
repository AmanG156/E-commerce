// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import MyOrder from "./Pages/MyOrder";
import ConfirmAddress from "./Pages/ConfirmAddress";
import Footer from "./Pages/Footer";
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
import Success from "./Pages/Success";
import VSignUp from "./Pages/Vendor/VSignUp/VSignUp";
import VLogin from "./Pages/Vendor/VLogin/VLogin";
import BussinessRegistration from "./Pages/Vendor/BussinessRegistration/BussinessRegistration";
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
        <Route path="/Pages/Signup" element={<Signup/>} />
        <Route path="/Pages/Footer" element={<Footer/>} />
        <Route path="/Pages/Vendor/VSignUp/VSignUp" element={<VSignUp />}/>
        <Route path="/Pages/Vendor/VHeadersidebar/VHeadersidebar" element={<VHeadersidebar/>}/>
        <Route path="/Pages/Vendor/VLogin/VLogin" element={<VLogin/>} />
        <Route path="/Pages/Vendor/BussinessRegistration/BussinessRegistration" element={<BussinessRegistration/>}/>
        <Route path="/Pages/Vendor/VProductDetails/VProductDetails" element={<VProductDetails/>}/>
        <Route path="/Pages/Vendor/OrderManagment/OrderManagment" element={<OrderManagment/>}/>
        <Route path= "/Pages/Vendor/Reports/Reports" element={<Reports/>}/>
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/Vendor/ProductCatalogue/ProductCatalogue" element={<ProductCatalogue/>}/>
        <Route path="/Pages/Success" element={<Success/>}/>
        <Route path="/Pages/Forgot" element={<Forgot />} />
        <Route path="/Pages/Header" element={<Header/>}/> 
        <Route path="/Pages/ResetPassword" element={<ResetPassword />} />
        <Route path="/Pages/MyProfile" element={<MyProfile />} />
        <Route path="/Pages/MyOrder" element={<MyOrder />} />
        <Route path="/Pages/ConfirmAddress" element={<ConfirmAddress/>}/>
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
