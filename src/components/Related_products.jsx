import React from 'react'
import useFetch from '../hooks/useFetch';
import Card from '../components/Card.jsx';
import './related-products.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader.jsx'
const Related_products = ({id,wine, price}) => {
  

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
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      
      {
        breakpoint: 1500, // Large devices (desktops)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1100, // Large devices (desktops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

  };


  const {data,loading, error} = useFetch(
    `/products?populate=*&filters[$or][0][wine][$eq]=${wine}&filters[$or][1][price][$lte]=${price}`
    );

console.log(id)

  return (
    <div className="related-products">
      <h2 className="rel-prods-title">RELATED PRODUCTS</h2>
      <div className="underline"></div>
      <div className="rel-prods">
      
      {loading && <Loader/> }
      <Slider {...settings}>
      {
      
        data?.filter(item => item.id != id).slice(0,10).map(item => <Card item={item} key={item.id} />)
      
      }
      </Slider>
      </div>
      
    </div>
  )
}

export default Related_products;