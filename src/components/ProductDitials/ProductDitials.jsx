import { Navigate, useParams } from 'react-router-dom'
import React, { useContext } from 'react'

import { CartContext } from '../../contex/Cartcontext';
import { CirclesWithBar } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

export default function ProductDitials() {

  const {addProudectToCart} = useContext(CartContext)

  async function addProduct(id) {
    const res= await addProudectToCart(id)
    if (res.status==="success") {
      toast.success("added successfully",{duration:1500 ,position :"top-center" })
      
    }
    else{
      
      toast.error("Error occurred",{duration:1500 ,position :"top-center" })

      
    }
        
    
  }
  // console.log(addProudectToCart );
 
const {id}=useParams()
// console.log(id);
async function getAllDitials() {
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    
  }
  
 const {isLoading , data ,error,} =useQuery(`getAllDitials${id} `, getAllDitials) 
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

  if (error) {
    return <Navigate to="/Product" />
    
  }
  const res =data.data.data
  // console.log(data.data.data);
  
  return <>
  <Helmet>
      <title> {res.title} product</title>
      </Helmet>
  
<div className='container'>

<div className='row align-items-center'>
<div className='col-md-4 '> 
<div>
  
<img className='w-100' src={res.imageCover} alt={res.title} />
</div>
</div>
<div className='col-md-8 '> 
 <div>
<h1>{res.title}</h1>
<p>{res.description}</p>
<p>{res.category.name}</p>
<div className='d-flex justify-content-between'>

<p>{res.price}</p>
 <span className='d-flex align-items-center  '>
                        <i
                          style={{ color: "yellowgreen" }}
                          className="fa-solid fa-star fa-2x"
                          ></i>
                          <h5>{res.ratingsAverage}</h5>

  
 </span>
</div>
<button onClick={()=>addProduct(res.id)} className='btn bg-main w-100 mt-3'> + Add To Card </button>

  
 </div>

</div>
  
</div>
</div>
  </>   
    
  
}
