import React from 'react'
import{Formik,Form} from 'formik';
import TextField  from "./TextField";
import * as Yup from 'yup';
import "./BussinessRegistration.css";

export default function Bussiness_registration() {
  const validate=Yup.object({
    firstname:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' first name is required'),
    lastname:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' Last name is required'),
    bussinessname:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' Bussiness name is required'),
    email:Yup.string()
    .email('email is invalid')
    .required('Email is required'),
    number:Yup.number()
    .min(10,'Password must be atleast 10 charachter')
    .max(10,'number is not more than 10 digit')
    .required('Password is required'),
    streetaddress:Yup.string()
    .max(30,'Must be 15 character or less')
    .required(' S is required'),
    streetaddress2:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' Street Address Line is required'),
    city:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' City is required'),
    state:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' State is required'),
    zipcode:Yup.number()
    .min(6,'Password must be atleast 6 charachter')
    .max(8,'number is not more than 8 digit')
    .required('ZipCode is required'),
    country:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' Country is required'),
    bussiness_type:Yup.string()
    .max(50,'Must be 50 character or less')
    .required(' Bussiness type is required'),
    state1:Yup.string()
    .max(15,'Must be 15 character or less')
    .required(' State is required'),
  })
  return (
    <Formik
    initialValues={{
      firstname:'',
      lastname:'',
      bussinessname:'',
      number:'',
      email:'',
      streetaddress:'',
      streetaddress2:'',
      city:'',
      state:'',
      zipcode:'',
      country:'',
      bussiness_type:'',
      state1:''
        
    }}
    validationSchema={validate}
    onSubmit={values=>{
        console.log(values)
    }}
    >
    <div className='Bussiness_div' >
        <div className='Buss_heading'>Bussiness Registration</div>
        <div>
          <Form>
          <div className='row'>
            <h5 className='title_heading'>Bussiness Owner</h5>

        <div className='col margin_input'>
        <TextField type="text" placeholder='  First Name*' name='firstname' />
        </div>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Last Name*' name='lastname'/>
        </div>
          </div>
          <div className='row'>
          <div className='col margin_input'>
        <TextField type="text" placeholder='  Bussiness Name*' name='bussinessname' />
        </div>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Contact Number*' name='number'  />
        </div>
        </div>
        <div className='row'>
        <div className='col margin_input'>
        <TextField type="email" placeholder='  Email*' name='email' />
        </div>
        <div className='col margin_input'></div>
        </div>
        <div className='row'>
          <h5 className='title_heading'>Address*</h5>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Street Address*' name='streetaddress' />
        </div>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Street Address Line 2*' name='streetaddress2' />
        </div>
        </div>
        <div className='row'>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  City*' name='city'/>
        </div>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  State/Provice*' name='state' />
        </div>
        </div>
        <div className='row'>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Postal/ZipCode*' name='zipcode' />
        </div>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Country/Provice*' name='country' />
        </div>
        </div>
        <div className='row'>
          <h5 className='title_heading'>Type of Bussiness*</h5>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  Type of Bussinesss*' name='bussiness_type' />
        </div>
        <div className='col margin_input'>
        <TextField type="text" placeholder='  State*' name='state1' />
        </div>
        </div>
        <div>
          <button type='submit' className='Submit_bussiness'>Submit Registration</button>
        </div>
        </Form>
      </div>
    </div>
    </Formik>
  )
}
