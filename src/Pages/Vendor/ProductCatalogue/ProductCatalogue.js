import React,{useState} from 'react'
import VHeadersidebar from '../VHeadersidebar/VHeadersidebar'
import "./ProductCatalogue.css"
import watchimg from "../../../images/watchimg.webp";

import { Button, Modal } from "react-bootstrap";
export default function ProductCatalogue() {
  // const [modal, setModal] = useState(false)
  const [productModal, setProductModal] = useState(false);

  const handleProduct = () => setProductModal(true);
  const handleClose = () => setProductModal(false);
  return (
    <div>
            <div>
      <VHeadersidebar/>
    </div>
    <div className='ProductCatalogue_div'>
      <div className='heading_btn'>
     <h4 className='ProductCatalogue_heading'>Product Catalogue</h4>
  
     <Button style={{ marginLeft: 0, backgroundColor: "orange", fontWeight: "bold" }}
                                    onClick={handleProduct} className="addMore_btn">ADD MORE</Button>
                                <Modal show={productModal} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className="text-white" style={{ paddingLeft: 160 }}>Add Product</Modal.Title>
                                    </Modal.Header>
                                    <form >
                                        <Modal.Body>
                                            <label htmlFor="category" className='fs-5 mb-2'>Select Category</label>
                                            <select className="w-100 mb-2 input" name="category" id="category"
                                               >
                                                <option value="">Select</option>
                                               <option  >category</option>
                                            </select>
                                            <label htmlFor="subcategory" className='fs-5 mb-2'>Select Sub Category</label>
                                            <select className="w-100 mb-2 input" name="subcategory" id="subcategory"
                                                >
                                                <option value="">Select</option>
                                               <option value="" >item</option>
                                            </select>
                                            <label htmlFor="productName" className='fs-5 mb-2'>Product Name</label><br />
                                            <input className="w-100 mb-2 input" type="text" name="name" placeholder='Enter Product name'
                                                 /><br />
                                            <label htmlFor="productImage" className='fs-5 mb-2'>Product Image</label><br />
                                            <input className="w-100 mb-2" type="file" name="image" accept="image/*" placeholder='Select Image'
                                               /><br />
                                            <label htmlFor="quantity" className='fs-5 mb-2'>Quantity</label><br />
                                            <input className="w-100 mb-2 input" type="number" min={1} name="quantity" placeholder='Enter Quantity'
                                                /><br />
                                            <label htmlFor="price" className='fs-5 mb-2'>Price</label><br />
                                            <input className="w-100 mb-2 input" type="number" min={1} name="price" placeholder='Enter Price'
                                                /><br />
                                            <label htmlFor="details" className='fs-5 mb-2'>Details</label><br />
                                            <textarea className="mb-2 textarea" name="details" id="details" cols="60" rows="5"
                                             placeholder='Enter Details' required></textarea><br />
                                            <label htmlFor="specifications" className='fs-5 mb-2'>Specifications</label><br />
                                            <textarea className="mb-2 textarea" name="specifications" id="specifications" cols="60"
                                                rows="5" placeholder='Enter Specifications'
                                                 required /><br />
                                            <label htmlFor="features" className='fs-5 mb-2'>Features</label><br />
                                            <textarea className="mb-2 textarea" name="features" id="features" cols="60" rows="5"
                                                placeholder='Enter Features'
                                               required /><br />

                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button type="submit" variant="primary">
                                                Add Product
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Modal>
    
     </div>
     <div>
     <div className="card" style={{width: "18rem"}}>
  <img src={watchimg} class="card-img-top catalogue" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
   
</div>
    </div>
  )
}
