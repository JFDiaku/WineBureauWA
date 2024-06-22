import Card from './Card.jsx'
import data from '../assets/data.js'
import "./featuredProducts.css"
import useFetch from '../hooks/useFetch.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader.jsx';
import { useEffect, useState } from 'react';
import Error from './error.jsx';


const featuredProducts = ({type}) => {

  const {data,loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    );


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50%', }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50%'}}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
 

  };

  
 
  


  return (
  <>
    <h1 className='featured-prod-title'>FEATURED</h1>
    <div className="underline"></div>
    
    
    <div className="featuredProducts container">

    
      <div className="slider-container">
        {loading ? <Loader/> : error ? <Error/> : <Slider {...settings} >
      {data?.map(item => (
        <Card className='featuredCard' item={item} key={item.id} />
      ))}
      </Slider>}
      </div>



    
    
    </div>
  </>
  )
}

export default featuredProducts