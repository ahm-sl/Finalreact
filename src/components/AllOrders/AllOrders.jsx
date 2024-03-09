import React, { useEffect, useState } from 'react'

import { CirclesWithBar } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { useQuery } from 'react-query';

export default function AllOrders() {



  function getAllOrders() {
    const userId=localStorage.getItem('userId')
   return  axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
    
  }
  const {isLoading , data } =useQuery(`getAllOrders`, getAllOrders)
  if (isLoading) {
    return <> <div className="d-flex vh-100 bg-primary bg-opacity-50 justify-content-center align-items-center">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            
          />
        </div></>
    
  }
  // console.log(data);
  // console.log(data.data[2].paymentMethodType);
  return <>
  <Helmet>
      <title>AllOrders</title>
      </Helmet>
  
  <div className="container ">
    <div className="row gy-3">
      
{data.data.map((order,indx)=> <div key={indx} className="col-md-6">
  <div className="order bg-info h-100">
      <div className='container' >
        <div className="row">
          {order.cartItems.map((pro ,seindx)=>
           <div key={seindx} className="col-md-4">
           <div className='bg-main-light h-100'>
            <img src={pro.product.imageCover}  className='w-100' alt={pro.product.title} />
            <h5>{pro.product.title}</h5>
             <h6>price:{pro.price} </h6>  
             <h6>price:{pro.count} </h6>  

           </div> 

            
          </div>

          )}
          
          
        </div>

        
      </div>
        <h5 >Paymen Method :{order.paymentMethodType}</h5>
        <h5> Order Price :{order.totalOrderPrice}</h5>
<p>this order is delivering:{order.shippingAddress.city} <br />
  on phone number:{order.shippingAddress.phone} <br />
     with details:{order.shippingAddress.details} </p>
    
  </div> 
    </div>)}
   
    
    </div>



    
  </div>
  
  
  
  </>
  }