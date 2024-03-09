import { Formik, useFormik } from 'formik'
import axios, { Axios } from 'axios';

import { ColorRing, } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  
const userData= {
  
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""

}; 

//   async function sendUserData(userData) {
//   const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
   
   
// }
 async function onSubmit(values) {
  
   console.log(`haloo`,values);
  setisLoding(true)
  
  const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
  // console.log(res);
  .then((x)=>{
    
    console.log("habibi"); 
    
    setisSucses(true)
    console.log(x);
    setTimeout(() => {
      
      setisSucses(false)
      navigate(`/login`)
    }, 2000);
  })
  .catch((x)=>{
    
    console.log( ); 
  console.log("Zaft"); 
seterrMassage(x.response.data.message)
setTimeout(() => {
  seterrMassage(undefined)
}, 2000);
})
setisLoding(false)
}


const myFormk = useFormik({
  initialValues:userData,
onSubmit:onSubmit,

 validate (values){
 const errors={};
 const  nameRegex = /^[A-Z][a-z]{3,10}$/;
 const  phoneRegex = /^01[0125][0-9]{8}$/;
 if (nameRegex.test(values.name)===false){
 errors.name ='name must be from 4 to 10 characters starts with capital letter'
  
 }
 if (values.email.includes("@") !== true||values.email.includes(".") !== true){
 errors.email ="Email must be in format"
  
 }
 if (phoneRegex.test(values.phone)===false){
  errors.phone ='phone must be an egyptian number'
   
  }
  if (values.password.length < 6 ||values.password.length > 12 ) {
    
    errors.password="password must be from 6 to 12 character "
  }
 
  if (values.rePassword !==values.password ||values.rePassword.length <6 ) {
    
    errors.rePassword="password and rePassword don't match "; 
  }
 console.log(errors);
  

return errors
  
 }

});
 const [isSusses, setisSucses] = useState(false)
 const [errMassage, seterrMassage] = useState(undefined)
 const [isLoding, setisLoding] = useState(false)

 const navigate=  useNavigate()




//  ui///////////////////////////////////////////////////////////
 
  return <>
  <Helmet>
      <title>Register </title>
      </Helmet>
   <div className='w-100 m-auto  p-5' >
    {isSusses? <div className="alert alert-info text-center"> congratulation your account has been created .</div>:""}
    {errMassage? <div className="alert alert-danger text-center"> {errMassage} .</div>:""}
  
    
<h2>Register now :</h2>

<form  onSubmit={myFormk.handleSubmit}>

<label htmlFor="name">name</label>
<input onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.name} type="text" id='name' placeholder='name' className='form-control mb-2' />

{myFormk.errors.name && myFormk.touched.name?<div className="alert alert-danger"> {myFormk.errors.name} </div>:""}

<label htmlFor="email">email</label>
<input  onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.email} type="email" id='email' placeholder='email' className='form-control mb-2' />

{myFormk.errors.email && myFormk.touched.email?<div className="alert alert-danger"> {myFormk.errors.email} </div>:""}
<label htmlFor="phone">phone</label>
<input  onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.phone} type="text" id='phone' placeholder='phone' className='form-control mb-2' />
{myFormk.errors.phone && myFormk.touched.phone?<div className="alert alert-danger"> {myFormk.errors.phone} </div>:""}
<label htmlFor="password">password</label> 
<input  onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.password} type="password" id='password' placeholder='password' className='form-control mb-2' />
{myFormk.errors.password && myFormk.touched.password?<div className="alert alert-danger"> {myFormk.errors.password} </div>:""}
<label htmlFor="repassword">repassword</label>
<input  onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.rePassword} type="password" id='rePassword' placeholder='rePassword' className='form-control mb-2' />
{myFormk.errors.rePassword && myFormk.touched.rePassword?<div className="alert alert-danger"> {myFormk.errors.rePassword} </div>:""}

 <button  type='submit' className='bg-main rounded-3 p-2 text-white btn ' >
  
  {isLoding? (<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f8b26a', '#abbd81', '#849b87']}
  />) :" Register"}
  
  
 
 

 </button>
    
  
</form> 

   </div>
  
  
  
  </>

  
}
