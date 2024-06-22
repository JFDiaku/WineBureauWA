import {Link} from 'react-router-dom'
import "../components/card.css"
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "../Redux/CartReducer";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from './SnackbarContext';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Card = ({item}) => {

  const dispatch = useDispatch();
  const count = 1;

  const [variant, setVariant] = React.useState('solid');


  const calcPrice =(discount, price) => {
    let sale  = price + (price * discount)
    return sale.toFixed(2);
  }


  const handleClick = () => {
    showSnackbar(`${item?.attributes?.name} added to cart.`);
  };




  const { showSnackbar } = useSnackbar();







  

  return (
    <>
      <div className="card">
          <Link to={`/product/${item.id}`} className='link' >
            <img className='card-image' src={import.meta.env.VITE_APP_UPLOAD_URL + item.attributes.image1.data.attributes.url} alt="" />
          </Link>

        <Link to={`/product/${item.id}`} className='card-item-name'>
          {item?.attributes.name}
        </Link>

        <div className="card-bottom">
          {item?.attributes.sale > 0 ? 
            <>

              <p className='card-item-price'>
              ${item?.attributes.price}
              </p>

              <KeyboardBackspaceIcon sx={{fontSize:'1em', color:'var(--base)'}}/>
              
            <p className='card-item-discount-price'>
              ${calcPrice(item?.attributes.sale ,item?.attributes.price)}
              </p>

             
            </>
           :  
          
          <p className='card-item-price'>
          ${item?.attributes.price}
          </p>}

         
        </div>


        <div className="card-options">
          <ShoppingCartIcon className='cartIcon' sx={{fontSize:'1.4em', backgroundColor:'var(--base)', borderRadius:'50%', padding:'1rem', transition:'all .3s ease', cursor:'pointer' , color:'white' , ":hover":{
            backgroundColor: 'white',
            color:'var(--base)',
            outline:'var(--base) 1px solid'
          }}}
          onClick={()=> dispatch(addToCart({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            price: item.attributes.price,
            count,
            image: import.meta.env.VITE_APP_UPLOAD_URL + item.attributes.image1.data.attributes.url,
         })) & 
         handleClick()}/>
          < FavoriteIcon sx={{fontSize:'1.4em', backgroundColor:'var(--base)', borderRadius:'50%', padding:'1rem', transition:' .3s ease', cursor:'pointer' , color:'white' , ":hover":{
            backgroundColor: 'white',
            color:'var(--base)',
            outline:'var(--base) 1px solid'
          }}}/>
          <ZoomInIcon sx={{fontSize:'1.4em', backgroundColor:'var(--base)', borderRadius:'50%', padding:'1rem', transition:' .3s ease', cursor:'pointer' , color:'white' , ":hover":{
            backgroundColor: 'white',
            color:'var(--base)',
            outline:'var(--base) 1px solid'
          }}}/>
        </div>
        {item?.attributes.sale > 0 && <div className="sale-tag">
        -{item.attributes.sale * 100}%
      </div>}
  
      </div>


</>
    
  )
}

export default Card