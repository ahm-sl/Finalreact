import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Categories from './../Categories/Categories';
import { CirclesWithBar } from "react-loader-spinner";
import React from "react";
import Slider from "react-slick";
import axios from "axios";
import { useQuery } from "react-query";

export default function Slidercateegories() {
    
    
    
    
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    autoplay:true
    };
    
    
       async  function getCategories(){
        
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`    );  
          
    }
    
  
    const { data ,isLoading,error} =useQuery("getCategories",getCategories);
    // console.log("fff"+data);
        




  
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
  return (
    <Slider {...settings}>
     {data.data.data.map((Categories, indx) => 
              <div  key={indx} className="">
                <img style={{height:"200px"}} className="w-100" src={Categories.image} alt={Categories.name} />
               <h4>{Categories.name}</h4>
              </div>
        )}
    


     
    </Slider>
    
  );
}