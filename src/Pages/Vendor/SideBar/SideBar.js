import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import "./SideBar.css";
import icon from "../../../assests/icon.png";


const Sidebar = () => {
    // const [showManage, setShowManage] = useState(true);
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem('token');
        alert("Loging Out");
        navigate("/");
    }


    return (
        <div className="sidebar">
            <img src={icon} alt="HeaderLogo" className='img_width' />
            <div className='Sidebar_heading'>
            <NavLink className="fs-6 fw-bold" to="/Pages/Vendor/VProductDetails/VProductDetails"
            >Dashboard (Reports)</NavLink>
            <NavLink className='fs-6 fw-bold' to="/Pages/Vendor/OrderManagment/OrderManagment"
                >Order Managment</NavLink>
               <NavLink className='fs-6 fw-bold' to="/Pages/Vendor/ProductCatalogue/ProductCatalogue"
                >Product Catalogue</NavLink>  
               <NavLink className='fs-6 fw-bold' to="/Pages/Vendor/Reports/Reports"
                >Reports</NavLink>  
               <NavLink to="/" className='logout'
                onClick={handleLogout}>Logout</NavLink>
  </div>
        </div>

    )
}

export default Sidebar;