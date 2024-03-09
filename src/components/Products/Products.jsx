// import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CartContext } from "../../contex/Cartcontext";
import { CirclesWithBar } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import SimpleSlider from "../homeSlider/homeSlider";
import Slidercateegories from "../slidertwo/Slidercateegories";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useQuery } from "react-query";

// import ccategorySlider from './../cateagrySlider/cateagrySlider'



export default function Products() {
  const {addProudectToCart} = useContext(CartContext)
//   const [allproduct, setallproduct] = useState(null);

async function addProduct(id) {
  const res= await addProudectToCart(id)
  if (res.status==="success") {
    toast.success("added successfully",{duration:1500 ,position :"top-center" })
    
  }
  else{
    
    toast.error("Error occurred",{duration:1500 ,position :"top-center" })

    
  }
  
    
  }
  async function getAllProducts() {
    return  axios.get("https://ecommerce.routemisr.com/api/v1/products")
      // .then((res) => {
      //   console.log(res.data);
      //   setallproduct(res.data.data);
      // })
      // .catch((eror) => {
      //   console.log(eror);
      // });
  }
  // useEffect(() => {
  //   getAllProducts();
  // }, []);
 const {isLoading , data ,} =useQuery(`getAllProduct`, getAllProducts)
//  console.log(isLoading);
//  console.log(data?.data.data);
//  console.log(isError); 

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
    <>
    
    <Helmet>
      <title>Products </title>
      </Helmet>
      
        <div className="container">
          <div className="row my-4   ">
             <div className="col-md-9">

        <SimpleSlider/>
              
             </div>
             <div className="col-md-3">
              <div><img  style={{height : "150px"}}  className="w-100" src={require(`../../images/grocery-banner-2.jpeg`)} alt="" /></div>
              <div><img  style={{height : "150px"}} className="w-100" src={require(`../../images/grocery-banner.png`)} alt="" /></div>
              



              
             </div>
            
          </div>
          <Slidercateegories/>
         
          <div className="products row gy-3 mt-3">
            {data.data.data.map((product, indx) => (
              <div key={indx} className="  col-md-2 overflow-hidden">
                <Link className="product" to={`/ProductDitials/${product.id}`}>
                <div className="product">
                  <img
                    src={product.imageCover}
                    className="w-100"
                    alt="products"
                  />
                  <h3 className="h6 text-main"> {product.category.name}</h3>
                  <h2 className="text-center h5">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h2>

                  <div className="d-flex justify-content-between">
                    {product.priceAfterDiscount ? (
                      <p>
                        {" "}
                        <span className="text-decoration-line-through">
                          {product.price}
                        </span>{" "}
                        -{product.priceAfterDiscount}
                      </p>
                    ) : (
                      <p>{product.price} </p>
                    )}

                    <p>
                      {" "}
                      <span>
                        <i
                          style={{ color: "yellowgreen" }}
                          className="fa-solid fa-star"
                        ></i>
                      </span>{" "}
                      {product.ratingsAverage}
                    </p>
                  </div>
                </div>
                </Link>
                <button  onClick={()=>addProduct(product.id)}  className=' addbtn btn bg-main d-block m-auto'> + Add To Card</button>
               
              </div>
            ))} 
          </div>
        </div>
      
      
      
    </>
  );
 }