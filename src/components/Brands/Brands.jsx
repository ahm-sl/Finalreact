import { CirclesWithBar } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';

export default function Brands() {
  
    
    async   function getBrands(){
    
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
       
           
         
         // console.log("dffd",res);
         // setres(res.data.data)
      
       }
       // eslint-disable-next-line no-undef
       const {isLoading , data } =useQuery(`getBrands`, getBrands)
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
       
      //  console.log(data.data.data[0].name);
       
         return<>
         <Helmet>
      <title>Brands </title>
      </Helmet>
         
       <div className='container'>
       <div className='row'>
         {data.data.data.map((product, indx) =>
         <div key={indx} className='col-md-4 cart text-center'>
         
         <div >
         <img
                         src={product.image}
                         style={{height:"250px"}}
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
