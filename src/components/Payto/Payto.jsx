import React, { useContext } from 'react'

import { CartContext } from '../../contex/Cartcontext';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Payto() {
 const nav =useNavigate()

    const {cartId,clearCart} = useContext(CartContext)
    function confirmCashPayment(){
        
         const details= document.getElementById('details').value;
         const phone= document.getElementById('phone').value;
         const city= document.getElementById('city').value;
         
         const shipng={
            "shippingAddress":{
                details,
                city,
                phone 
                
                
                }
        }
       axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,shipng,
        { headers : { token:localStorage.getItem( 'tkn' )}})
        
          .then((res)=>{
            if (res.data.status==="success") {
      
                toast.success(' payment completed successfully.',{position:"top-center"})
            
                
                clearCart() ;
                setTimeout(() => {
                nav('/Product')
                }, 1500);
            }
             
          })
          .catch((e)=>{
             console.log(e)
             toast.error("Error occurred",{position:"top-right"})
             });
             
       }
 
    function confirmOnlinePayment(){
        
         const details= document.getElementById('details').value;
         const phone= document.getElementById('phone').value;
         const city= document.getElementById('city').value;
         
         const shipng={
            "shippingAddress":{
                details,
                city,
                phone 
                
                
                }
        }
       axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,shipng,
        { headers : { token:localStorage.getItem( 'tkn' )}
      ,params : { url:'http://localhost:3000'}})
        
          .then((res)=>{
            if (res.data.status==="success") {
      
                // toast.success(' payment completed successfully.',{position:"top-center"})
            
                
                // clearCart() ;
              window.open(res.data.session.url,"_self")
            }
             
          })
          .catch((e)=>{
             console.log(e)
             toast.error("Error occurred",{position:"top-right"})
             });
             
       }
 
  return <>

<Helmet>
      <title> pay</title>
      </Helmet>
   <div className='w-50 m-auto py-3' >
    <label htmlFor="city"> city</label>
    <input type="text" id='city' placeholder='city..' className='form-control mb-2' />
    
    <label htmlFor="phone"> phone</label>
    <input type="text" id='phone' placeholder='phone..' className='form-control mb-2' /> 
    
    <label htmlFor="details"> details</label>
    <textarea type="text" id='details' placeholder='details..' className='form-control mb-2' ></textarea>


<button onClick={confirmCashPayment} className='btn btn-primary mx-2'>confirm cash payment</button>
<button onClick={confirmOnlinePayment} className='btn btn-primary'>confirm online payment</button>
    
   </div>
  
  
  
  
    </>
    
  
}
