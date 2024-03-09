import React, { useState } from 'react'

import { CirclesWithBar } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { useQuery } from 'react-query';

export default function Categories() {
  // const [res, setres] = useState("")
  
async   function getcategores(){
    
     return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    
        
      
      // console.log("dffd",res);
      // setres(res.data.data)
   
    }
    // eslint-disable-next-line no-undef
    const {isLoading , data } =useQuery(`getcategores`, getcategores)
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
    
    console.log(data.data.data[0].name);
    
      return<>
      <Helmet>
      <title> Categories</title>
      </Helmet>
    <div className='container'>
    <div className='row'>
      {data.data.data.map((product, indx) =>
      <div key={indx} className='col-md-4'>
      
      <div >
      <img
                      src={product.image}
                      style={{height:"370px"}}
                      className="w-100"
                      alt="products"
                    />
                    <h2>{product.name}</h2>
      </div>
      </div>
      
      )}
  
  
        
      </div>
  
  
      
    </div>
      </>
  
}
