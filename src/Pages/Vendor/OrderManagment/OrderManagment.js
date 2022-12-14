import React from 'react'
import VHeadersidebar from '../VHeadersidebar/VHeadersidebar'
import "./OrderManagment.css"
// import SideBar from '../SideBar/SideBar'
// import VHeader from '../VHeader/VHeader'
export default function OrderManagment() {
  return (
    <>
    <div>
      <VHeadersidebar/>
    </div>
    <div className='order_managment_div'>
      <h4 className='Order_managment_Heading'>Add Order Managment</h4>
      <div className='order_div'>
      <div className="card mt-5 mb-3">
                            
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col" className='table_heading'>#</th>

                                            <th scope="col" className='table_heading'>Name</th>
                                            <th scope="col" className='table_heading'>Category</th>
                                            <th scope="col" className='table_heading'>Sub Category</th>
                                            <th scope="col" className='table_heading'>Price</th>
                                            <th scope="col" className='table_heading'>Quantity</th>
                                            <th scope="col" className='table_heading'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                                <tr>
                                                     <td >1</td>
                                                    <td >Mobile</td>
                                                    <td>Electronics</td>
                                                    <td>Mobile</td>
                                                    <td>1</td>
                                                    <td>1999</td>
                                                  
                                                    <td><button className='accept_btn'>Accept</button></td>
                                                    <td>
                                                        {/* <button className="btn btn-primary px-3 pb-2" onClick={() => {
                                                            handleEditProduct(item._id);
                                                            setProductData(item);
                                                        }}>
                                                            <FiEdit />
                                                        </button> */}

                                                        {/* <button className="btn btn-primary px-3 pb-2 ms-2"
                                                            onClick={() => DeleteProduct(item._id)}>
                                                            <MdDelete />
                                                        </button> */}
                                                    </td>
                                                    {/* <Modal show={editproductModal === item._id ? true : false}
                                                        onHide={() => setEditProductModal(false)}>
                                                        <EditProduct data={productdata} categoryList={categoryList} />
                                                    </Modal> */}
                                                </tr>
                                            
                                     

                                    </tbody>
                                </table>
                            </div>
                        </div>
    </div>
    </>
  )
}
