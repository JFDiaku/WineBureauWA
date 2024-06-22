
import "../components/categories.css"; 
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import categorypic from '../assets/images/categories.jpg'

const categories = () => {
  const isMobileScreen = useMediaQuery('(max-width:1100px)');
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
        style={{ ...style, display: "block", borderRadius: '50%'}}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
 
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
    responsive: [
      {
        breakpoint: 650, // Phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };
  return (
    <>

    
  
   

    <div className="categories container">

      <div className="category-left">

        <h4>CATEGORIES</h4>
        <div className="underline" style={{width: '8rem'}}></div>


        <div className="wine-cats">

          <div className="wine-cat">
            <div className="wine-cat-icon red-icon" >

            </div>
           <div className="wine-cat-descrip">
            <h4>Red Wine</h4>
            <p>Bold and complex, red wines feature dark fruits, spices, and earthy undertones for a rich experience.</p>
           </div>
          </div>

          <div className="wine-cat">
            <div className="wine-cat-icon white-icon" >

            </div>
           <div className="wine-cat-descrip">
            <h4>White Wine</h4>
            <p>Crisp and versatile, white wines offer refreshing notes from citrus to tropical fruits.</p>
           </div>
          </div>



          <div className="wine-cat">
            <div className="wine-cat-icon rose-icon">

            </div>
           <div className="wine-cat-descrip">
            <h4>Rosé Wine</h4>
            <p>Featuring a pink hue and balanced flavors of acidity and fruitiness, adds elegance to casual occasions with hints of strawberries and citrus.</p>
           </div>
          </div>


          <div className="wine-cat">
            <div className="wine-cat-icon spark-icon">

            </div>
           <div className="wine-cat-descrip">
            <h4>Sparkling Wine</h4>
            <p>Effervescent and festive, sparkling wines charm with bubbly joy and a range of flavors.</p>
           </div>
          </div>

        </div> 
       
      </div>

      <div className="category-right">
        <img src={categorypic} alt="" />
      </div>

    </div>
    </>
  )
}

export default categories