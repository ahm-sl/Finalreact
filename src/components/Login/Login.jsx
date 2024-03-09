import { Formik, useFormik } from 'formik'
import axios, { Axios } from 'axios';
import { useContext, useState } from 'react';

import { AuthContext } from '../../contex/AuthContext';
import { ColorRing, } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function  Login() {
  
const userData= {
  
    
    email:"",
    password:"",
    

}; 
// const value = useContext( AuthContext )

 const {settoken, getUserdata} = useContext(AuthContext);

//   async function sendUserData(userData) {
//   const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
   
   
// }
 async function onSubmit(values) {
  
   console.log(`haloo`,values);
  setisLoding(true)
  
  const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
  // console.log(res);
  .then((x)=>{
    if (x.data.message ==="success")
    {
      localStorage.setItem(`tkn`,x.data.token)
      
      settoken(x.data.token)
      
      console.log("habibi"); 
      
      setisSucses(true)
      console.log(x);
      setTimeout(() => {
        
        setisSucses(false)
        navigate(`/Product`)
        getUserdata()  
      }, 1000);
      

      
    }
    
  })
  .catch((x)=>{
     
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
 
 if (values.email.includes("@") !== true||values.email.includes(".") !== true){
 errors.email ="Email must be in format"
  
 }
 
  if (values.password.length < 6 ||values.password.length > 12 ) {
    
    errors.password="password must be from 6 to 12 character "
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
      <title> login</title>
      </Helmet>
   <div className='w-100 m-auto  p-5' >
    {isSusses? <div className="alert alert-info text-center"> wealcom back .</div>:""}
    {errMassage? <div className="alert alert-danger text-center"> {errMassage} .</div>:""}
  
    
<h2>login now :</h2>

<form  onSubmit={myFormk.handleSubmit}>


<label htmlFor="email">email</label>
<input  onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.email} type="email" id='email' placeholder='email' className='form-control mb-2' />

{myFormk.errors.email && myFormk.touched.email?<div className="alert alert-danger"> {myFormk.errors.email} </div>:""}

<label htmlFor="password">password</label> 
<input  onBlur={myFormk.handleBlur} onChange={myFormk.handleChange} value={myFormk.values.password} type="password" id='password' placeholder='password' className='form-control mb-2' />
{myFormk.errors.password && myFormk.touched.password?<div className="alert alert-danger"> {myFormk.errors.password} </div>:""}


 <button  type='submit' className='bg-main rounded-3 p-2 text-white btn ' >
  
  {isLoding? (<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f8b26a', '#abbd81', '#849b87']}
  />) :"Login "}
  
  
 
 

 </button>
    
  
</form> 

   </div>
  
  
  
  </>

  
}
