import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:"bool"
  };
  return (
    <Slider {...settings}>
      <div>
        <img  style={{height :"300px"}}  className="w-100" src={require(`../../images/slider-image-1.jpeg`)} alt="" />    </div>
      <div>
        <img  style={{height :"300px"}}  className="w-100" src={require(`../../images/slider-image-2.jpeg`)} alt="" />    </div>
      <div>
        <img  style={{height :"300px"}}  className="w-100" src={require(`../../images/slider-image-3.jpeg`)} alt="" />    </div>
      <div>
        <img  style={{height :"300px"}}  className="w-100" src={require(`../../images/slider-2.jpeg`)} alt="" />    </div>
    
     
    </Slider>
  );
}