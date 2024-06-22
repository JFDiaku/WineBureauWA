import Card from './Card.jsx'
import data from '../assets/data.js'
import "./featuredProducts.css"
import useFetch from '../hooks/useFetch.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader.jsx';
import Error from './error.jsx';

const TrendingProducts = ({type}) => {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100, // Large devices (desktops)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

    ],

  };
  const {data,loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    );
  
  console.log(data,loading, error)
  return (
    <>
    <h1 className='featured-prod-title'>TRENDING</h1>
    <div className="underline"></div>
    
    
    <div className="featuredProducts container">

      <div className="slider-container">
       {loading ? <Loader/> : error ? <Error/> :  <Slider {...settings} >
      {data && data.map(item => (
        <Card className='featuredCard' item={item} key={item.id} />
      ))}
      </Slider>}
      </div>
    
    
    </div>
  </>
  )
}

export default TrendingProducts