import React from 'react'
import "./redwine.css"
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./catalog.css"
import "../components/navbar.css"
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import List from "../components/List";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import bannerImg from "../assets/images/wine15.webp"
import useFetch from '../hooks/useFetch.js'
import "../components/Widget.css"
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import CloseIcon from '@mui/icons-material/Close';

const WhiteWine = ({isMobileScreen}) => {
  const base =  'rgb(118, 29, 29)';
  const [maxPrice, setMaxprice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const redCollection = ['White'];
  const [sale, handleSale] = useState(false);
  const [isNew, handleIsNew] = useState(false);
  const [widgetOpen, isWidgetOpen] = useState(false);
  const [isFeatured, handleIsFeatured] = useState(false);
  const [isTrending, handleIsTrending] = useState(false);
  

  
  useEffect(()=>{
    isWidgetOpen(false);
  },[])
  
  const slide = ()=>{
    var widgets = document.querySelector('.redwine-left') ;
    widgets.style.transition ='all .3s ease'
    widgets.style.height = widgetOpen ? '0' : '79%';
    widgets.style.padding = widgetOpen ? '0' : '5rem 1rem';
    widgets.style.marginTop = widgetOpen ? '-2rem' : '0';
    widgets.style.opacity = widgetOpen ? '0' : '1';
    widgets.style.boxSizing = 'border-box;'

    widgetOpen ? isWidgetOpen(false) : isWidgetOpen(true);
    console.log(widgetOpen);
  }
  



  return (
    <div className="redwine container">
       {isMobileScreen && <div className="mobile-pageNav">
          <Link className="navLink pageNav-link" to='/WBWestAfrica'>HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections/Collections'>COLLECTIONS</Link>
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections/White-Wine'>WHITE WINE</Link>
        </div>}

      <div className="redwine-left">

        <div className="pageNav">
          <Link className="navLink pageNav-link"  to='/'>HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link to='/Collections' className="navLink pageNav-link" >COLLECTIONS</Link>
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections/White-Wine'>WHITE WINE</Link>
        </div>

        
        <CloseIcon className="closeIcon" sx={{fontSize:'2.5em', color:'black', fontWeight:'600', backgroundColor:'var',  position:'absolute', top:"3%", left: "1%"}} onClick={()=>slide()}/>
        



        <div className="filter-widgets-box">
          <div className="filter-widget widget">
            <h3 className="widget-title">Filter by Price</h3>
            <div className="input-item slider">
              
                <span className="input-label" style={{margin:"0"}}>$0</span>
                

                  <Slider color='primary' min={0} max={1000}  onChange={(e)=>setMaxprice(e.target.value)}/>
                    
                    
                <span className="input-label" style={{margin:"0"}}>${maxPrice}</span>
            
            </div>
          </div>


          <div className="widget sale-isNew-widget">

            <div className="sale-widget">
              <Checkbox
              size="small" 
              sx={{
                color:'primary',
                '&.Mui-checked': {
                  color: base,
                },
              }}


              onClick={()=>handleSale(!sale)}
              />
            <label htmlFor=""className="input-label" style={{marginLeft:'-.5rem', fontWeight:"600"}}>On Sale</label>
            </div>

            <div className="sale-widget">
              <Checkbox
              size="small" 
              sx={{
                color:'primary',
                '&.Mui-checked': {
                  color: base,
                },
              }}


              onClick={()=>handleIsNew(!isNew)}
              />
            <label htmlFor=""className="input-label" style={{marginLeft:'-.5rem', fontWeight:"600"}}>isNew</label>
            </div>

          </div>

          <div className="widget sale-isNew-widget">
              <div className="sale-widget">
                        <Checkbox
                        size="small" 
                        sx={{
                          color:'primary',
                          '&.Mui-checked': {
                            color: base,
                          },
                        }}
                        onClick={()=>handleIsFeatured(!isFeatured)}
                        />
                      <label htmlFor=""className="input-label" style={{marginLeft:'-.5rem', fontWeight:"600"}}>Featured</label>
                    </div>  


                    <div className="sale-widget">
                        <Checkbox
                        size="small" 
                        sx={{
                          color:'primary',
                          '&.Mui-checked': {
                            color: base,
                          },
                        }}
                          onClick={()=>handleIsTrending(!isTrending)}
                        />
                      <label htmlFor=""className="input-label" style={{marginLeft:'-.5rem', fontWeight:"600"}}>Trending</label>
                    </div>  
          </div>

          <div className="widget sort-widget">
            <h3 className="widget-title sort" >Sort by</h3>
            <div className="input-item">
                <Radio sx={{color:'primary','&.Mui-checked':{color:'var(--base)'}}} size="small" color="error" checked={sort === 'asc'} value="asc" name="price" onChange={(e)=>setSort("asc")}/>
                <label htmlFor="asc" className="input-label">Price (Lowest first)</label>
            </div>

              <div className="input-item">
                <Radio sx={{color:'primary','&.Mui-checked':{color:'var(--base)'}}} size="small" color="error" checked={sort === 'desc'} value="desc" name="price"  onChange={(e)=>setSort("desc")} />
                <label htmlFor="desc" className="input-label">Price (Highest first)</label>
              </div>
          </div>
        </div>     

        

      </div>

      <div className="redwine-right catalog-right">

          <div className="products-banner white-banner">
            <h1 className="catalog-right-title">WHITE WINE</h1>
            <div className="underline catalog-underline"></div>
          </div>
          
          <div className="products-list">
            <List collection={redCollection} isTrending={isTrending} isFeatured={isFeatured}  isNew={isNew} sale={sale}  sort={sort} maxPrice={maxPrice} slide={slide} isWidgetOpen={isWidgetOpen} widgetOpen={widgetOpen}/>
          </div>
          
        </div>
    </div>
  )
}

export default WhiteWine