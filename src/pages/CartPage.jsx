import "./cartpage.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart,  addToCart, updateCart, removeItem, addItem  } from '../Redux/CartReducer';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { checkboxClasses } from "@mui/material";
import { useState } from "react";
import paypal from "../assets/images/paypal.png"
import Radio from '@mui/material/Radio';
import makeRequests from "../makeRequests";
import stripeLogo from "../assets/images/stripeLogo.svg"
import logo from "../assets/images/empty-cart.png"
import {loadStripe} from '@stripe/stripe-js';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';

const CartPage = () => {
  const [checkoutMethod, setCheckMethod] = useState('')
  const isMobileScreen = useMediaQuery('(max-width:750px)');

  const dispatch = useDispatch(); 
const products = useSelector(state => state.cart.products)



const total = ()=> {
  let subTotal = 0 
  products.forEach(item => (subTotal += item.price * item.count ));
  return subTotal.toFixed(2);
}



const stripePromise = loadStripe(
  import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY
);

const handlePayment = async () => {
  try {
    const stripe = await stripePromise;
    const res = await makeRequests.post("/stripe-orders", {
      products,
    });
    await stripe.redirectToCheckout({
      sessionId: res.data.stripeSession.id,
    });

  } catch (err) {
    console.log(err);
  }
};



const handleChange = (e,id) => { 
  const value = parseInt(e.target.value) <= 0 ? 1 : parseInt(e.target.value);
  dispatch(updateCart({
      id: id,
      count: value,
    }));
  };




  return (
    <>
       <div className='collection-banner container' >
        <div className="collections-pageNav" style={{color:'white'}} >
          <Link className="navLink pageNav-link" style={{color:'white'}} to='/'>HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" style={{color:'white'}} to='/Contact' >SHOPPING CART</Link>

        </div>


        <div className="title-box">
          <h1 className='collections-page-title cart-page-title' style={{fontFamily:'var(--font2)'}}>SHOPPING CART</h1>
          <div className="underline collections-underline"></div>
        </div>    
      </div>
   <div className="cart-page container">

        <div className="cart-product-section">
          {!isMobileScreen && <div className="cart-page-left">

           <div className="cart-item-attributes">
            <h4>PRODUCT</h4>
            <h4>PRICE</h4>
            <h4>QUANTITY</h4>
            <h4>SUBTOTAL</h4>
           </div>


            <div className="cart-page-products">
              {products.map(item =>(
                <div key={item.id} className="cart-page-item" >

                  <div className="cart-item-data" >
                  <div className="cart-page-item-image-box">
                    <Link  to={`/product/${item.id}`} onClick={()=> isCartOpen(false)} >
                      <img src={item.image}  />
                    </Link>
                  </div>
                  
                  <p className="cart-page-item-name">{item.name}</p>
                  </div>

        
                    <p style={{fontWeight:'500'}}>${item.price}</p>
            



              

                 
            
                    <div className="quantity" style={{height:"1rem"}}>
             
                      <div className="quantity-btn-box ">
                        <button className="add-btn quantity-btn" onClick={()=>dispatch(removeItem({id:item.id,})) && (item.count === 0 && dispatch(removeFromCart(item.id)) )} >-</button>
                      </div>
             
                      <input className="quantity-count" type="number" value={item.count} onChange={(e)=> handleChange(e, item.id)} />
             
                      <div className="quantity-btn-box" >
                        <button className="add-btn quantity-btn" onClick={()=>dispatch(addItem({id:item.id,}))} >+</button>
                      </div>
                    </div>
                    
                    


                  <p style={{fontWeight:'600' , color: "var(--base)"}}>${(item.count * item.price).toFixed(2)}</p>

                  <DeleteIcon  onClick={()=> dispatch(removeFromCart(item.id))}  sx={{fontSize:"1.2em", cursor:"pointer"}}/>
                  
              
                </div>       
              ))}
              {products?.length === 0 && 
              <div className='cart-empty'style={{marginTop:'2rem'}}>
                <img src={logo} alt="" />
                <p className="">Your Cart is empty</p>
                <Link className='cartLink' to='/Collections/all' onClick={()=> isCartOpen(false)}>Keep Shopping</Link>
                </div>}
            </div>
            
       
        

            
           
             
            
            
          </div>}

          {isMobileScreen &&
          <div className="mobile-products-section">
              <div className="mobile-cart-top" >
                <div>
                  <h1 style={{
                    fontFamily:'var(--font2)'
                  }}>Cart totals</h1>
                  <div className="underline" style={{width:"5rem"}}></div>
                  </div>
                


                  <h3  style={{
                    fontFamily:'var(--font2)'
                  }}>Items : <span style={{color: 'var(--base)', fontFamily:'var(--font)', fontSize:'.9em'}}>{products.length}</span> </h3>

                  <div style={{display:'flex', alignItems:'center', gap:".5rem", marginTop:'1rem'}}>
                    <h3  style={{
                    fontFamily:'var(--font2)', 
                  }}>Total price:</h3>
                  <h4 style={{
                    color:'var(--base)'
                  }} >${total()}</h4>
                </div>
              </div>

             {products.map(item =>(
                <div key={item.id} className="mobile-cart-page-item" >

                  <div className="mobile-cart-item-data" >
                    <div className="mobile-cart-page-item-image-box">
                      <Link  to={`/product/${item.id}`} onClick={()=> isCartOpen(false)} >
                        <img src={item.image}  />
                      </Link>
                    </div>


                    <div className="mobile-cart-data-right">
                      <p className="cart-page-item-name">{item.name}</p>

                      <div className="mobile-item-quantity">
                        <p style={{fontWeight:'500'}}><span style={{fontFamily:'var(--font2)', fontWeight:600, fontSize:'1.1em'}}>Price:</span> ${item.price}</p>
                        
                        <div className="quantity" style={{height:"1rem"}}>
                
                          <div className="quantity-btn-box ">
                            <button className="add-btn quantity-btn" onClick={()=>dispatch(removeItem({id:item.id,})) && (item.count === 0 && dispatch(removeFromCart(item.id)) )} >-</button>
                          </div>
                  
                          <input className="quantity-count" type="number" value={item.count} onChange={(e)=> handleChange(e, item.id)} />
                  
                          <div className="quantity-btn-box" >
                            <button className="add-btn quantity-btn" onClick={()=>dispatch(addItem({id:item.id,}))} >+</button>
                          </div>
                        </div>
                      </div>

                      
                      <p style={{fontWeight:'600' , color: "var(--base)"}}><span style={{fontFamily:'var(--font2)', fontWeight:600, fontSize:'1.1em'}}>Subtotal:</span> ${(item.count * item.price).toFixed(2)}</p>

                      <DeleteIcon  onClick={()=> dispatch(removeFromCart(item.id))}  sx={{
                        fontSize:"1.2em",
                        cursor:"pointer",
                        position:'absolute',
                        bottom:".5rem",
                        right: '.5rem'}}/>
          
                    </div>
                    
                  
                  </div>

        
          
                  
              
                </div>       
              ))}
          </div>
              }
               {isMobileScreen && products?.length === 0 && 
              <div className='cart-empty'style={{paddingBottom: '3rem'}}>
                <img src={logo} alt="" />
                <p className="">Your Cart is empty</p>
                <Link className='cartLink' to='/Collections/all' onClick={()=> isCartOpen(false)}>Keep Shopping</Link>
                </div>}

          <div className="cart-page-right">

           {!isMobileScreen && <div className="tablet-cart-top"> <div>
            <h1 style={{
              fontFamily:'var(--font2)'
            }}>Cart totals</h1>
            <div className="underline" style={{width:"5rem"}}></div>
            </div>
           


            <h3  style={{
              fontFamily:'var(--font2)'
            }}>Items : <span style={{color: 'var(--base)'}}>{products.length}</span> </h3>

            <div style={{display:'flex', alignItems:'center', gap:".5rem"}}>
              <h3  style={{
              fontFamily:'var(--font2)'
            }}>Total price:</h3>
            <h4 style={{
              color:'var(--base)'
            }} >${total()}</h4>
            </div> </div>}
            
          
      


            <button onClick={()=> handlePayment(checkoutMethod)} className="checkout">
              Proceed to Checkout
            </button>

            <img className="stripe-logo" style={{width: '100%', height:'3rem'}} src={stripeLogo} alt="" />
            
          </div>


        </div>
   
   </div>
   </>
  )
}

export default CartPage
