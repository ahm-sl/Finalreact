import React, { useContext } from 'react'

import { CartContext } from '../../contex/Cartcontext'
import { CirclesWithBar } from 'react-loader-spinner'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'

export default function Cart() {
  
  const { allProduct,updateCount,clearCart,totalCartPrice , deleteproduct } = useContext(CartContext)


  if (!allProduct) {
    return <>

   
    <div className="d-flex vh-100 bg-primary bg-opacity-50 justify-content-center align-items-center">
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
        </div>
    
    
    
    </>
    
  }


   async function updateMyProduct(id, newCount) {
    const res= await updateCount(id, newCount);
    if (res) {
      
      toast.success('product ubdated successfully.',{position:"top-center"})
    
    }else{

      toast.error("Error occurred",{position:"top-right"})
    }
      
  }
  async function myDelete(id) {
    const res= await  deleteproduct(id);
    
    if (res) {
      
      toast.success('deleted successfully.',{position:"top-center"})
      
    }else{

      toast.error("Error",{position:"top-right"})
    }
  }
  // async function myClear(){
  //   const res= await clearCart();
    
  //   if (res) {
      
  //     toast.success('deleted successfully.',{position:"top-center"})
      
  //   }else{

  //     toast.error("Error",{position:"top-right"})
  //   }
  // }
 
  return <>

 <Helmet>
      <title> Usar cart</title>
      </Helmet>
  {allProduct.length ?  <div className='container '>
    
    <div className='d-flex justify-content-between'>
      <div> <h2> Shop Cart</h2>
    <h5> Total cart price : {totalCartPrice} EGP</h5></div>
     <Link to="/Payto">
     
    <button   className='btn btn-primary '>confirm payment</button>
     </Link>
    </div>
    
    <button  onClick={()=>  clearCart()} className='btn btn-outline-danger '>clearCart</button>
  {allProduct.map((prd,indx)=> <div key={indx} className='row align-items-center py-3  mb-2 border-1 border-bottom border-danger '>
       <div className='col-1'>
          <div>
            <img className='w-100' src={prd.product.imageCover} alt={prd.product.title} />
          </div>
       </div>
       <div className='col-10'>
           <div>
 <h3> {prd.product.title}</h3>
 <h5>price:{prd.price}</h5>
 <button onClick={()=>  myDelete(prd.product.id)} className='btn btn-outline-danger'>remove</button>
           </div>

        
       </div>
       <div className='col-1'>

        <div className='d-flex  justify-content-between  align-content-center align-items-center'>
       <button onClick={()=> updateMyProduct(prd.product.id,prd.count+1)} className='btn btn-outline-success'>+</button>
       <p>{prd.count}</p>
       <button disabled={prd.count===1} onClick={()=> updateMyProduct(prd.product.id,prd.count-1)} className='btn btn-outline-success '>-</button>
          
        </div>
       </div>

      
    </div>)}
 

    
   
  </div>: <h2>card Empty..</h2>}
 
  
  </>
}