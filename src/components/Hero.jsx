import "../components/hero.css"
import wine12 from "../assets/images/wine12.webp"
import wine11 from "../assets/images/wine11.webp"
import wine13 from "../assets/images/wine13.jpg"
import { Link } from "react-router-dom"
const Hero = () => {

  
  return (
    <div className="hero container">
      
        <div className="hero-sec"></div>
      

        <div className="hero-sec">

          <div className="hero-text">
            <h2 className=" text1">New Arrivals</h2>
            <h4 className=" text2">Great Bottles to Give</h4>
            <h1 className=" text3">Shop Select Picks</h1>
          </div>

            <button className="btn shop-btn hero-btn">
              <Link  to='/Collections/all' className="shopLink">Shop Now</Link>
            </button>
        </div>


        <div className="hero-sec"></div>


      
    </div>
    
  )
}

export default Hero