/* eslint-disable */
import React,{useState} from 'react'
import VHeadersidebar from '../VHeadersidebar/VHeadersidebar'
import "./ProductCatalogue.css"
import watchimg from "../../../assests/watchimg.webp";


import { Button, Modal } from "react-bootstrap";
export default function ProductCatalogue() {
  const [productModal, setProductModal] = useState(false);
  const [productlist,setProductlist]= useState([])
  const [edit ,setEdit] = useState(false)
  const [isReadMore, setIsReadMore] = useState(true);
  const [details, setDetails] = useState({
    name:"",
    category:"",
    subcategory:"",
    quantity:"",
    price:"",
    details:"",
    specifications:"",
    features:"",
    image:""
  })
  const [editId,setEditId] = useState(null)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
const handleInput = (event)=>{
    setDetails({...details,[event.target.name]:event.target.value})
}
const handleSubmit= (e)=>{
    e.preventDefault();
    let arr = productlist
    arr =[...arr,details]
    setProductlist(arr)
}
const editbox =(i,e)=>{
setEditId(Number(i));
let data = productlist[i]
setDetails(data)
setEdit(true)
}
const removeTodo = (i) => {
    alert("dksdjdk")
    const removedArr = [...productlist].filter((todo, ind) => ind !== i);
    setProductlist(removedArr);
}
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
                                            <select className="w-100 mb-2 input" name="category" id="category" onChange={(e)=>{handleInput(e)}}
                                               >
                                                <option value="">Select</option>
                                               <option  >category</option>
                                            </select>
                                            <label htmlFor="subcategory" className='fs-5 mb-2'>Select Sub Category</label>
                                            <select className="w-100 mb-2 input" name="subcategory" id="subcategory" onChange={(e)=>{handleInput(e)}}
                                                >
                                                <option value="">Select</option>
                                               <option value="" >item</option>
                                            </select>
                                            <label htmlFor="productName" className='fs-5 mb-2'>Product Name</label><br />
                                            <input className="w-100 mb-2 input" type="text" name="name" placeholder='Enter Product name' onChange={(e)=>{handleInput(e)}}
                                                 /><br />
                                            <label htmlFor="productImage" className='fs-5 mb-2'>Product Image</label><br />
                                            <input className="w-100 mb-2" type="file" name="image" accept="image/*" placeholder='Select Image'
                                               /><br />
                                            <label htmlFor="quantity" className='fs-5 mb-2'>Quantity</label><br />
                                            <input className="w-100 mb-2 input" type="number" min={1} name="quantity" placeholder='Enter Quantity' onChange={(e)=>{handleInput(e)}}
                                                /><br />
                                            <label htmlFor="price" className='fs-5 mb-2'>Price</label><br />
                                            <input className="w-100 mb-2 input" type="number" min={1} name="price" placeholder='Enter Price'
                                             onChange={(e)=>{handleInput(e)}}   /><br />
                                            <label htmlFor="details" className='fs-5 mb-2'>Details</label><br />
                                            <textarea className="mb-2 textarea" name="details" onChange={(e)=>{handleInput(e)}} id="details" cols="60" rows="5"
                                             placeholder='Enter Details' required></textarea><br />
                                            <label htmlFor="specifications" className='fs-5 mb-2'>Specifications</label><br />
                                            <textarea className="mb-2 textarea" name="specifications" onChange={(e)=>{handleInput(e)}} id="specifications" cols="60"
                                                rows="5" placeholder='Enter Specifications'
                                                 required /><br />
                                            <label htmlFor="features" className='fs-5 mb-2'>Features</label><br />
                                            <textarea className="mb-2 textarea" name="features"  onChange={(e)=>{handleInput(e)}} id="features" cols="60" rows="5"
                                                placeholder='Enter Features'
                                               required /><br />

                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                            <Button type="submit" onClick={(e)=>handleSubmit(e)} variant="primary">
                                                Add Product
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Modal>
                                
    
     </div>
     <div>
        {productlist.map((v)=>{
            return(
       
     <div className="catalogue_body" >
  <img src={watchimg} class=" catalogue_img" alt="..."/>
  <div className="catalogue_details">
   <div className='catalogue_title'>
 <h5 className="card-title">{v.name}</h5></div>
  <div className='details'>
  <p className="card-text">  {isReadMore ? v.details.slice(0, 10) : v.details}
{v.details.length > 10 && (
  <span onClick={toggleReadMore}>
    {isReadMore ? "...more" : " ...less"}
  </span>
)} </p></div>
<div className='catalogue_price'>{v.price.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}</div>
  <div className='catalogue_btn'>
    <button className="edit_btn" onClick={()=>editbox(e,i)} >Edit</button>
    <button className="delete_btn" onClick={(e)=>removeTodo(e)}>Delete</button>
    </div>
    </div>
</div>
)
})}
    </div>
   
</div>
    </div>
  )
}
