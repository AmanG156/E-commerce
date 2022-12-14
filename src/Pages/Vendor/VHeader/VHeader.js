

import { FaUser } from "react-icons/fa";

import "./VHeader.css";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div>
              <nav className="navbar bg-light Vheader">
        <div className="container-fluid Vheadbox">
         
          <input
            type="search"
            placeholder="  Enter Your Product Name"
           
            className="VSearchbar"
        />
          <div className="Vheadicons">
            <div className="Vprofileicon">
            <Link to="/Pages/MyProfile">
              {" "}
              <FaUser className="Vheader_icon" />
            </Link>

            </div>
      
          </div>
      
        </div>
      </nav>
    </div>
  )
}