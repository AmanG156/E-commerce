import React from "react";
import Sidebar from '../SideBar/SideBar'
import VHeader from '../VHeader/VHeader'
import VHeadersidebar from '../VHeadersidebar/VHeadersidebar'
import "./VProductDetails.css";
import OrderLogo from "../../../images/OrderLogo.png";
import IncomeLogo from "../../../images/IncomeLogo.png";
import ExpenseLogo from "../../../images/ExpenseLogo.png";


export default function ProductDetails() {
  return (
    <div>
          <Sidebar />

      <VHeader />
      <div className="row">
        <div className="col-lg-3">
        </div>
        <div className="col-lg-9">
          <div className="detail_div">
            <div className="col">
              <h3 className="Card_heading">Product Details</h3>
              <div className="row">
                <div className="col md-4">
                  <div className="card VProduct_Card ">
                    <div className="card-body">
                      <div className="row">
                      <p className=" fw-bold text-secondary Order_Card">New Order</p>
                      <div className="col-lg-6">
                          <img
                            src={OrderLogo}
                            alt="OrderLogo"
                            style={{ width:58 , height: 58 }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <p className= " price" >&#8377; 345</p>
                          <p className="fw-bold text-secondary ms-2 time">
                            50% (30 days)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                <div className='card'>
                                    <div className="card-body">
                                    <div className="row">
                                        <p className="fw-bold text-secondary Order_Card">Total Income</p>
                                        <div className="col-lg-6">
                                                <img src={IncomeLogo} alt="OrderLogo" style={{ width: 58, height: 58 }} />
                                            </div>
                                            </div>
                                        <div className="row">
                                           
                                            <div className="col-lg-6">
                                                <p className="fs-1 fw-bold price">&#8377; 75.0</p>
                                                <p className="fw-bold text-secondary ms-2 time">50% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                <div className="col-md-4">
                <div className='card'>
                                    <div className="card-body">
                                      <div  className="row">
                                        <p className="fw-bold text-secondary Order_Card">Total Expense</p>
                                        <div className="col-lg-6">
                                                <img src={ExpenseLogo} alt="OrderLogo" style={{ width: 58, height: 58}} />
                                            </div>
                                            </div>
                                        <div className="row">
                                            
                                            <div className="col-lg-6">
                                                <p className="fs-1 fw-bold price">&#8377; 50.2</p>
                                                <p className="fw-bold text-secondary ms-2 time">50% (30 days)</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
