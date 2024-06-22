import useFetch from '../hooks/useFetch.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader.jsx';
import Card from './Card.jsx'
import data from '../assets/data.js'

const WineSlider = ({wine}) => {
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
        style={{ ...style, display: "block", borderRadius: '50%', marginLeft: '-2rem'  }}
        onClick={onClick}
      />
    );
  }

  const {data,loading, error} = useFetch(
    `/products?populate=*&[filters][wine][$eq]=${wine}`
    );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    
    <div style={{
      

    }} >

    {loading && <Loader/> }
    
      <div >
        <Slider {...settings} >
      {data && data.map(item => (
        <Card  item={item} key={item.id} />
      ))}
      </Slider>
      </div>
    
    
    </div>
  )
}

export default WineSlider