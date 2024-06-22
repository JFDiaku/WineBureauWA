import "../components/navbar.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpg"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import SearchBar from "./SearchBar";
import MenuIcon from '@mui/icons-material/Menu';
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({isCartOpen, cartOpen, isMobileScreen, isNavOpen, navOpen, useOutsideAlerter, dropOpen, isDropOpen}) => {
  
  const products = useSelector(state => state.cart.products)
  const count = products.length
  const navRef = useRef(null);
  useOutsideAlerter(navRef);
  return (
    <>
      <>
    
      {isMobileScreen ? 

      
      
      
      <div className="navbar-mobile">


        <MenuIcon onClick={()=>isNavOpen(true)}/>
        
        <Link to='/' >
        <div className="logo-box">
          <img src={logo} className="logo" alt="" />
          <h1 className="logo-title">WineBureauWA</h1>
        </div>
      </Link>


    

      <div className="cart-search-box" style={{width:'min-content', display:'flex', alignItems:'center'}}>
        <SearchBar/>
     
      <button onClick={()=> isCartOpen(true)}  id='cart' className="cart-section">
        <ShoppingCartOutlinedIcon sx={{fontSize:"1.8em", color:'black'}}/>
        <p className="count-bubble">{count}</p>
      </button>
      </div>

      </div> : 
      
      
      
      
      
      
      
      
      <div className="navbar container">

      <Link to='/' >
        <div className="logo-box">
          <img src={logo} className="logo" alt="" />
          <h1 className="logo-title">WineBureauWA</h1>
        </div>
      </Link>

      
    
      <ul className="navitems">
        <Link className='navLink' to='/' >HOME</Link >
        <Link className='navLink' to='/Collections/' >COLLECTIONS</Link >
        <Link className='navLink' to='/Collections/all' style={{padding:"0 .5rem"}}  onMouseOver={()=> isDropOpen(true)} onMouseOut={()=> isDropOpen(false)} >SHOP
        <AnimatePresence>
            {dropOpen && <motion.div
             initial={{top: "3rem", height:0}}
             animate={{ height:"fit-content" }}
             exit={{top:"3rem",  height:0,  opacity:0}}
             transition={{duration:.2, ease:easeInOut}}
              className="desk-dropdown-menu">
            <AnimatePresence>
                <motion.ul
                initial={{height:'0', opacity:0}}
                animate={{height:'fit-content', opacity: 1}}
                exit={{height:"0", opacity:0}}
                transition={{duration:.4, ease:easeInOut}}
                onMouseOver={()=> isDropOpen(true)} onMouseOut={()=> isDropOpen(false)}
                 className="desk-dropdown">
                <Link className='navLink' style={{fontSize:".9em"}} to='/Collections/Red-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >RED WINE</Link >
                <Link className='navLink'  style={{fontSize:".9em"}} to='/Collections/White-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >WHITE WINE</Link >
                <Link className='navLink'  style={{fontSize:".9em"}} to='/Collections/Sparkling-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >SPARKLING WINE</Link >
                <Link className='navLink'  style={{fontSize:".9em"}} to='/Collections/Rosè-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >ROSÉ WINE</Link >
                <Link className='navLink'  style={{fontSize:".9em"}} to='/Collections/all/deals' onClick={()=>isNavOpen(false) && isDropOpen(false)} >DEALS</Link >
                <Link className='navLink'  style={{fontSize:".9em"}} to='/Collections/all/new-arrivals' onClick={()=>isNavOpen(false) && isDropOpen(false)} >NEW ARRIVALS</Link >
                </motion.ul>
              </AnimatePresence>
            </motion.div>}
          </AnimatePresence>
        </Link >
       
        <Link className='navLink'  to='/Contact' >CONTACT</Link >
      </ul>

      <SearchBar isMobileScreen={isMobileScreen}/>

      <Link  onMouseOver={()=> isCartOpen(true)} onMouseOut={()=> isCartOpen(false)} to='/Cart' onClick={()=> isCartOpen(false)}  id='cart' className="cart-section">
        <ShoppingCartOutlinedIcon sx={{fontSize:"1.8em", color:'black'}}/>
        <p className="count-bubble">{count}</p>
      </Link>

    </div> }




      </>

  
      <AnimatePresence>
        {(isMobileScreen && navOpen) &&
        <motion.div
        initial={{  width:'0%'}}
        animate={{ width: "fit-content"}}
        exit={{  width:'0%', opacity:'0'}}
        transition={{duration:.3, ease:easeInOut}}
          ref={navRef}
      className="navbar-mobile-active">

        <div className="menu-box">
          <h3>Menu </h3>
          <CloseIcon onClick={()=>isNavOpen(false) && isDropOpen(false)} sx={{fontSize:"1.5em"}}/>     
        </div>
        
          <ul style={{opacity: navOpen && 1}} className="mobile-navitems">
            <Link className='mobile-navLink' onClick={()=>isNavOpen(false) && isDropOpen(false)} to='/' >HOME</Link >
            <Link className='mobile-navLink' onClick={()=>isNavOpen(false) && isDropOpen(false)} to='/Collections/' >COLLECTIONS</Link >

            <div className="shop-dropdown">
            <Link className='mobile-navLink' onClick={()=>isNavOpen(false) && isDropOpen(false)} to='/Collections/all' >SHOP</Link >
            {dropOpen ? <ExpandLessIcon sx={{fontSize:'1.5em'}} onClick={()=>isDropOpen(false)}/> : <ExpandMoreIcon sx={{fontSize:'1.5em'}} onClick={()=>isDropOpen(true)}/>}
            </div>
         
           <AnimatePresence>
            {(dropOpen && navOpen) && <motion.div
             initial={{top: "11.5rem", height:0}}
             animate={{top: "11.5rem", position:'absolute',height:"fit-content" }}
             exit={{top:"-1px", display:'none'}}
             transition={{duration:.3, ease:easeInOut}} className="dropdown-menu">
            <AnimatePresence>
                <motion.ul
                initial={{height:0}}
                animate={{height:'fit-content'}}
                exit={{height:"10%", opacity:0}}
                transition={{duration:.5, ease:easeInOut}}
                 className="shop-drowpdown-menu">
                <Link className='mobile-navLink' to='/Collections/Red-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >RED WINE</Link >
                <Link className='mobile-navLink' to='/Collections/White-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >WHITE WINE</Link >
                <Link className='mobile-navLink' to='/Collections/Sparkling-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >SPARKLING WINE</Link >
                <Link className='mobile-navLink' to='/Collections/Rosè-Wine' onClick={()=>isNavOpen(false) && isDropOpen(false)} >ROSÉ WINE</Link >
                <Link  className='mobile-navLink'  to='/Collections/all/deals' onClick={()=>isNavOpen(false) && isDropOpen(false)} >DEALS</Link >
                <Link  className='mobile-navLink'  to='/Collections/all/new-arrivals' onClick={()=>isNavOpen(false) && isDropOpen(false)} >NEW ARRIVALS</Link >
                </motion.ul>
              </AnimatePresence>
            </motion.div>}
          </AnimatePresence>
        
            <Link className='mobile-navLink'  to='/Contact' style={{marginTop: dropOpen && "14rem", transition:"all .3s ease-in-out"}} onClick={()=>isNavOpen(false) && isDropOpen(false)} >CONTACT</Link >
          </ul>
        </motion.div>
     
        
        }
     </AnimatePresence>
     

    </>
  )
}

export default Navbar