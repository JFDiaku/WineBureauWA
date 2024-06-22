import './footer.css'
import "../components/navbar.css"
import { Link } from 'react-router-dom'
import masterCard from "../assets/images/mastercard.png"
import paypal from "../assets/images/paypal.png"
import visa from"../assets/images/visa.png"
import logo from "../assets/images/logo.jpg"
const Footer = ({isMobileScreen}) => {
  return (
    <>

    
    {!isMobileScreen ? <div className='footer-section container'>
 
    <div className='footer container'>

      
      <Link to='/' >
        <div className="logo-box">
          <img src={logo} className="logo" alt="" />
          <h1 className="logo-title">WineBureauWA</h1>
        </div>
      </Link>

      <div className="footer-categories">
        <h4>Categories</h4>
        <div className="underline footer-underline"></div>
        <ul className="footer-categories-list footer-item-list">
          <Link to="" className="footer-category-item navLink">Red wine</Link>
          <Link to="" className="footer-category-item navLink">White wine</Link>
          <Link to="" className="footer-category-item navLink">Rosé wine</Link>
          <Link to="" className="footer-category-item navLink">Sparkling wine</Link>
        </ul>
      </div>

      <div className="footer-information">
        <h4>Information</h4>
        <div className="underline footer-underline"></div>
        <ul className="footer-info-list footer-item-list">
          <Link to="" className="footer-category-item navLink">About us</Link>
          <Link to="" className="footer-category-item navLink">Catalog</Link>
          <Link to="" className="footer-category-item navLink">Contact</Link>
          <Link to="" className="footer-category-item navLink">Search</Link>
        </ul>
      </div>

      
      
    </div>

    <div className="footer-bottom">
      <p>©WineBureauWestAfrica</p>

      <div className="footer-icons">
        <img src={masterCard} alt="" className="footer-icon" />
        <img src={visa} alt="" className="footer-icon" />
        <img src={paypal} alt="" className="footer-icon" />
      </div>
     
    </div>
    </div> :




    <div className="footer-mobile">
      <Link to='/' >
        <div className="logo-box" style={{padding: "0 0 0 1rem"}}>
          <img src={logo} className="logo" alt="" />
          <h1 className="logo-title">WineBureauWA</h1>
        </div>
      </Link>

      <div className="footer-categories mobile-foot-cats">
        <h4>Categories</h4>
        <div className="underline footer-underline mobile-underline"></div>
        <ul className="footer-categories-list footer-item-list">
          <Link to="/Collections/Red-Wine" className="footer-category-item navLink">Red wine</Link>
          <Link to="/Collections/White-Wine" className="footer-category-item navLink">White wine</Link>
          <Link to="/Collections/Rosè-Wine" className="footer-category-item navLink">Rosé wine</Link>
          <Link to="/Collections/Sparkling-Wine" className="footer-category-item navLink">Sparkling wine</Link>
        </ul>
      </div>


      <div className="footer-information  mobile-foot-cats">
        <h4>Information</h4>
        <div className="underline footer-underline mobile-underline"></div>
        <ul className="footer-info-list footer-item-list">
          <Link to="/" className="footer-category-item navLink">Home</Link>
          <Link to="/Collections/" className="footer-category-item navLink">Collections</Link>
          <Link to="/Collections/all" className="footer-category-item navLink">Shop</Link>
          <Link to="/Contact" className="footer-category-item navLink">Contact</Link>
          <Link to="/Cart" className="footer-category-item navLink">Cart</Link>
        </ul>
      </div>

      <div className="footer-bottom" >
      <p>©WineBureauWestAfrica</p>

      <div className="footer-icons">
        <img src={masterCard} alt="" className="footer-icon" />
        <img src={visa} alt="" className="footer-icon" />
        <img src={paypal} alt="" className="footer-icon" />
      </div>
     
    </div>


    </div>
    
    
}
    </>
  )
}

export default Footer