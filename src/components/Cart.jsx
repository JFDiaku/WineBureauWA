import React from 'react'
import data from '../assets/data'
import "./navbar.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart, addItem, removeItem, updateCart } from '../Redux/CartReducer';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { experimentalStyled } from '@mui/material';
import logo from "../assets/images/empty-cart.png"
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { easeInOut } from "framer-motion";
import { useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

const Cart = ({isCartOpen, cartOpen, isMobileScreen,  useOutsideAlerter}) => {  

  const cartRef = useRef(null);
  useOutsideAlerter(cartRef);

const products = useSelector(state => state.cart.products)
const dispatch = useDispatch();
const total = ()=> {
  let subTotal = 0 
  products.forEach(item => (subTotal += item.price * item.count ));
  return subTotal.toFixed(2);
}



const rotate = ()=>{
  var resetIcon = !isMobileScreen ? document.querySelector('.resetIcon') : document.querySelector('.mobile-resetIcon') ;
  resetIcon.style.transition ='all .5s ease'
  resetIcon.style.transform = 'rotate(360deg)';
 
}


const handleChange = (e,id) => { 
  const value = parseInt(e.target.value) <= 0 ? 1 : parseInt(e.target.value);
  dispatch(updateCart({
      id: id,
      count: value,
    }));
  };


  return (
    
    <>
    {(cartOpen && !isMobileScreen) &&
    <div  onMouseOver={()=> isCartOpen(true)} onMouseOut={()=> isCartOpen(false)} className="cart">
    <h3 className='cart-title'>My Cart</h3>
     {products?.map(item => ( 
      <div  key={item.id}  className="cart-item">

        <div className="cart-item-container">
          <Link  to={`/product/${item.id}`} onClick={()=> isCartOpen(false)} className="cart-left">
            <img src={item.image} alt="" className="cart-img" />
          </Link>
          <div className="cart-right">
            <Link to={`/product/${item.id}`}  onClick={()=> isCartOpen(false)} className='cart-item-name'>{item.name}</Link>
            <p className="cart-item-descrip">{(item.description).substring(0,100)}.....</p>

            <div className="cart-item-quantity">
              <p style={{fontWeight:'600', fontFamily:'var(--font2)'}}>QTY:</p>
            <div className="quantity" style={{height:"1rem", marginLeft:'1rem'}}>
                  
                  <div className="quantity-btn-box ">
                    <button className="add-btn quantity-btn" onClick={()=>dispatch(removeItem({id:item.id,})) && (item.count === 0 && dispatch(removeFromCart(item.id)) )} >-</button>
                  </div>
          
                  <input className="quantity-count" type="number" value={item.count} defaultValue={0} onChange={(e)=> handleChange(e, item.id)} />
          
                  <div className="quantity-btn-box" >
                    <button className="add-btn quantity-btn" onClick={()=>dispatch(addItem({id:item.id,}))} >+</button>
                  </div>
                </div>

              
              <DeleteIcon  onClick={()=> dispatch(removeFromCart(item.id))}  sx={{fontSize:"1.2em", cursor:"pointer", position:'absolute', bottom:"1rem", right:'1rem'}}/>
              
              
            </div>
            
          </div>
        </div>
        
        
      </div>
     ))}
     {products?.length === 0 && 
     <div className='cart-empty'>
      <img src={logo} alt="" />
      <p className="">Your Cart is empty</p>
      <Link className='cartLink' onClick={()=> isCartOpen(false)}>Keep Shopping</Link>
      </div>}

        <div className="cart-total">
          <div style={{display:'flex', fontFamily: `Montserrat, sans-serif`, alignItems:'center', gap:'.5rem'}}>
          <h3 style={{fontSize:"1.2em"}}>Total Price:</h3>
          <p style={{color:'var(--base)', fontWeight:'600'}}>${total()}</p>
          </div>
          <Link to={`/Cart/`} onClick={()=> isCartOpen(false)} className="cartLink">Go to Cart</Link>        
        </div>

      
        <RestartAltIcon titleAccess='Reset' id='reset'  className='resetIcon' onClick={()=> dispatch(resetCart()) && rotate()}/>
     
       

    </div> }

    <AnimatePresence>
    {(cartOpen && isMobileScreen)  &&
    <>
    <motion.div
    initial={{  width:'0%'}}
    animate={{ width: '20rem'}}
    exit={{  width:'0', opacity:'0', visibility:'none'}}
    transition={{duration:.3, ease:easeInOut}}
    className='mobile-cart'
    ref={cartRef}
    onMouseOver={()=> isCartOpen(true)}
    >
      <div className="mobile-cart-container">
       <div className="mobile-cart-title-box">
        <RestartAltIcon titleAccess='Reset' id='reset'  className='mobile-resetIcon' onClick={()=> dispatch(resetCart()) && rotate()}/>
          <h3 style={{fontFamily:'var(--font2)', fontWeight:'600'}}>My Cart </h3>
          <CloseIcon onClick={()=>isCartOpen(false)} sx={{fontSize:"1.5em"}}/>
        </div>
        <div style={{display:'flex', alignItems:'center', width:'fit-content', margin:'auto', gap:'2rem', fontFamily: `Montserrat, sans-serif`}}>
          <h3 style={{fontSize:"1.2em", fontFamily:'var(--font2)', fontWeight:'600'}}>Total Price:</h3>
          <p style={{color:'var(--base)', fontWeight:'600'}}>${total()}</p>
        </div>
        <div className="cart-products">
          {products?.map(item => ( 
          <div  key={item.id}  className="cart-item" style={{marginTop:'0'}}>

            <div className="cart-item-container" style={{padding:".5rem", width:'100%', justifyContent:'space-between'}}>
              <Link  to={`/product/${item.id}`} onClick={()=> isCartOpen(false)} className="cart-left">
                <img src={item.image} alt="" className="cart-img" />
              </Link>
              <div className="cart-right">
                <Link to={`/product/${item.id}`}  onClick={()=> isCartOpen(false)} className='cart-item-name'>{item.name}</Link>

                <div style={{display:'flex', flexDirection:'column', gap: ".5rem"}}>
                  <p className="cart-item-price" > <span style={{fontFamily:'var(--font2)', color: 'black',fontSize:"1.1em"}}>Price:</span> ${item.price}</p>

                  <div className="quantity" style={{height:"1rem", marginTop:'.5rem'}}>
                  
                    <div className="quantity-btn-box ">
                      <button className="add-btn quantity-btn" onClick={()=>dispatch(removeItem({id:item.id,})) && (item.count === 0 && dispatch(removeFromCart(item.id)) )} >-</button>
                    </div>
            
                    <input className="quantity-count" type="number" value={item.count} onChange={(e)=> handleChange(e, item.id)} />
            
                    <div className="quantity-btn-box" >
                      <button className="add-btn quantity-btn" onClick={()=>dispatch(addItem({id:item.id,}))} >+</button>
                    </div>
                  </div>
                </div>
                
              </div>

              <DeleteIcon  onClick={()=> dispatch(removeFromCart(item.id))}  sx={{fontSize:"1.2em", cursor:"pointer"}}/>
            </div>
            
            
          </div>
        ))}
        {products?.length === 0 && 
        <div ref={cartRef} style={{marginTop: isMobileScreen && "2rem"}}  className='cart-empty'>
          <img src={logo} alt="" />
        <p className="">Your Cart is empty</p>
        <Link className='cartLink'onClick={()=> isCartOpen(false)}>Keep Shopping</Link>
        </div>}
        </div>
      
      <div className="mobile-cart-total">
          <Link to={`/Cart/`} onClick={()=> isCartOpen(false)} className="mobile-cartLink">Go to Cart</Link>        
    </div>
    </div>
    </motion.div>
    
    </>
    }
    
    
    </AnimatePresence>
    </>
    
  )
}

export default Cart
