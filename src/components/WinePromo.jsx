import './winePromo.css'
import wine17 from "../assets/images/wine17.jpg"
import { Link } from 'react-router-dom'
const WinePromo = () => {
  return (
   <div className="winePromo container">

    <div className="winePromo-box">
      <h1 className='promo-title'>Quality Wine from the vine.</h1>
      <p className='promo-text'>
        Embark on a Journey of Distinctive Flavors, Exceptional tastes uncorked in every bottle.
      </p>
      <button className="btn shop-btn promo-link">
        <Link  to='/Collections/' className="shopLink ">Explore Collections</Link>
      </button>
    </div>
    
   </div>
  )
}

export default WinePromo