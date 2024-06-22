import Card from './Card.jsx'
import data from '../assets/data.js'
import "./featuredProducts.css"
import useFetch from '../hooks/useFetch.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader.jsx';
import Error from './error.jsx';

const HotDeals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50%',  }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: {
      margin: '0 -3rem',

   // Adjust the negative margin to control the column gap
    },

  };
  const {data,loading, error} = useFetch(
    `/products?populate=*&[filters][sale][$gt]=0`
    );
  
  console.log(data,loading, error)
  return (
    <>
    <h1 className='featured-prod-title'>HOT DEAL</h1>
    <div className="underline"></div>
    
    
    <div className="container">

 
    
      <div className="hot-deals">
     
      { loading ? <Loader/> : error ? <Error/> : data && data.slice(0,10).map(item => (
        <Card item={item} key={item.id} />
      ))}
 
      </div>
    
    
    </div>
  </>
  )
}

export default HotDeals