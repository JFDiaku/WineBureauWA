import "./product.css"
import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useFetch from "../hooks/useFetch";
import Related_products from "../components/Related_products";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer";
import Loader from '../components/Loader.jsx'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { current } from "@reduxjs/toolkit";
import { useSnackbar } from "../components/SnackbarContext.jsx";

const Product = () => {
  let [count, setCount] = useState(1);
  const [activeImg, setImg] = useState('image1');
  const id = parseInt(useParams().item);
  const {data, loading, error} = useFetch(`/products/${id}?populate=*`);

  const wine = data ? data.attributes.wine : '';
  const price = data ? data.attributes.price : '';



  const dispatch = useDispatch();
  const handleChange = (e)=> { 
    const value = parseInt(e.target.value) <= 0 ? 1 : parseInt(e.target.value);
    setCount(value);
  }

  const handleClick = () => {
    showSnackbar(`${data?.attributes?.name} added to cart.`);
  };




  const { showSnackbar } = useSnackbar();





 

  return (
    <>
    
    <div className="product container">
    <div className="pageNav product-pageNav">
        <Link  to='/' className="navLink pageNav-link">HOME</Link> 
        <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
        <Link className="navLink pageNav-link" to='/Collections'>COLLECTIONS</Link>
        <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
        <Link to='/Collections/all' className="navLink pageNav-link">PRODUCTS</Link>
        <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
        <p className="pageNav-link" style={{color:"rgb(113, 25, 25)", fontWeight:'600', fontSize:"1em",marginBottom:".2rem"}}>{data?.attributes?.name}</p>
       </div>

       <div className="product-section">
        
       { loading ? <Loader/> : data && <>
        <div className="product-left">

          <div className="product-images">

            <div onClick={() => setImg('image1')} style={activeImg === 'image1' ?{border:'var(--base) 3px solid'}:{opacity:".5"}} className="preview-image image1">
              <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.image1.data?.attributes.url}  alt="" />
            </div>
            <div onClick={() => setImg('image2')} style={activeImg === 'image2'?{border:"var(--base) 3px solid"}:{opacity:".5"}} className="preview-image image2">
              <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.image2.data?.attributes.url}   alt="" />
            </div>

          </div>

          <div className="product-image-box">
            <img className="product-image"  src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.[activeImg].data?.attributes.url} alt="" />
          </div>
          

         

        </div>

       


        <div className="product-right">
          <h2 className="product-name">{data?.attributes?.name}</h2>
          <p className="product-descrip">{data?.attributes?.description}</p>


      <div className="product-attributes">
          <div className="prod-attribute">
            <h4 className="attribute">Price:</h4>
            <p>${data?.attributes?.price}</p>
          </div>


          <div className="prod-attribute">
            <h4 className="attribute">Type:</h4>
            <p>{data?.attributes?.wine}</p>
          </div>

          <div className="prod-attribute">
            <h4 className="attribute">ABV:</h4>
            <p>{data?.attributes?.ABV}%</p>
          </div>

          <div className="prod-attribute">
            <h4 className="attribute">Size:</h4>
            <p>{data?.attributes?.size}ML</p>
          </div>

          <div className="prod-attribute">
            <h4 className="attribute">Year:</h4>
            <p>{data?.attributes?.year}</p>
          </div>

          <div className="prod-attribute">
            <h4 className="attribute">Region:</h4>
            <p>{data?.attributes?.country === "" ? "Unavailable" : data?.attributes?.country}</p>
          </div>
      </div>

          <div className="prod-attribute">
            <h4 className="attribute">Quantity: </h4>
            <div className="quantity">
              <div className="quantity-btn-box">
                <button className="add-btn quantity-btn" onClick={()=> setCount(count + 1)}>+</button>
              </div>
    
             
              <input className="quantity-count" type="number" value={count} onChange={handleChange} />
             

              <div className="quantity-btn-box ">
                <button className="add-btn quantity-btn"  onClick={() => setCount(count === 1 ? 1: count - 1)}>-</button>
              </div>
            </div>
          </div>

         

          <div className="add-section">

            <button onClick={()=> dispatch(addToCart({
              id: id,
              name: data?.attributes?.name,
              description: data?.attributes?.description,
              price: data?.attributes?.price,
              count,
              image: import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.image1.data.attributes.url,


            })) & handleClick()} className="add-sec">
              <ShoppingCartIcon sx={{fontSize:"1em", color:'black'}}/>
              <p>Add to Cart</p>
            </button >

            <button  className="add-sec">
              <FavoriteIcon sx={{fontSize:"1em", color:'black'}}/>
              <p>Add to Wishlist</p>
            </button >


            <div className="prod-attribute" style={{textAlign:'center', fontWeight:'600', backgroundColor:'var(--base)',   borderRadius: "5px"}}>
          <p style={{color:'white'}}>{data?.attributes?.stock === 0 ? "Out of Stock" : data?.attributes?.stock  +' left in stock'}</p>
          </div>

          </div>
         
          
          
        </div>
        </>} 


       </div>

      <Related_products id={id} wine={wine} price={price} />
   

    </div>
    </>
  )
}

export default Product