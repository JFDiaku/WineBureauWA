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
import { easeInOut, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

const Catalog = ({isMobileScreen}) => {


  const base =  'rgb(118, 29, 29)';
  const location = useLocation();
  const params = useParams();
 
  const [maxPrice, setMaxprice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [collection, setCollection] = useState([]);
  const [sale, handleSale] = useState(false);
  const [isNew, handleIsNew] = useState(false);
  const [isFeatured, handleIsFeatured] = useState(false);
  const [isTrending, handleIsTrending] = useState(false);
  const [widgetOpen, isWidgetOpen] = useState(false);

  
  useEffect(()=>{
    const handlePage =()=>{
      if(params.valueOf('deal')){
        handleSale(true);
      } 
     if (params.valueOf('new-arrivals')) {
      handleIsNew(true);
      }
    } 

    handlePage();
  },[params])
 

  useEffect(() => {
    // Check if the parameter is no longer present in the URL
    if (!location.pathname.includes('deal')) {
      handleSale(false);
    }
    if(!location.pathname.includes('new-arrivals')) {
      handleIsNew(false);
    }
   
  }, [location.pathname, params]);



  const handleCollections = (e) =>{
    const checkboxId = e.target.value;
    if (e.target.checked) {
      setCollection((prevChecked) =>
      prevChecked.includes(checkboxId) ? prevChecked : [...prevChecked, checkboxId]
    );
    }else{
        setCollection((prevChecked) =>
        prevChecked.filter((id) => id !== checkboxId)
      );
    }
  }

  const saleHandle = (e) =>{

   handleSale(!sale);
  }

  const newHandle = (e) =>{

    handleIsNew(!isNew);
   }

   const trendHandle = ()=>{
    handleIsTrending(!isTrending)
   }

   const featHandle =()=>{
    handleIsFeatured(!isFeatured)
   }
   

  const slide = ()=>{
    var widgets = document.querySelector('.catalog-left') ;
    widgets.style.transition ='all .3s ease'
    widgets.style.height = widgetOpen ? '0' : 'fit-content';
    widgets.style.padding = widgetOpen ? '0' : '5rem 1rem';
    widgets.style.marginTop = widgetOpen ? '-2rem' : '0';
    widgets.style.opacity = widgetOpen ? '0' : '1';
    widgets.style.boxSizing = 'border-box;'

    widgetOpen ? isWidgetOpen(false) : isWidgetOpen(true);
    console.log(widgetOpen);
  }


  return (
    <>
  <div className="container">
      
      <div className="catalog">

      {isMobileScreen && <div className="mobile-pageNav" style={{top:'2rem'}}>
          <Link className="navLink pageNav-link" to='/'>HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections'>COLLECTIONS</Link>
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections/all'>PRODUCTS</Link>
        </div>}
       
      
        <div className="catalog-left" >

        <div className="pageNav">
          <Link className="navLink pageNav-link" to='/' >HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections'>COLLECTIONS</Link>
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" to='/Collections/all'>PRODUCTS</Link>
        </div>

   

      <div className="mobile-filters-title-box" style={{display:'flex', alignItems:'center'}}>
        <CloseIcon sx={{fontSize:'2.5em', color:'black', fontWeight:'600', backgroundColor:'var', position:'absolute', top:"3%", left: "1%"}} onClick={()=>slide()}/>
        
      </div>
       
      
        <div className="collections-widget widget" style={{marginTop: isMobileScreen && '-1rem'}}>
              <h3 className="widget-title collections-title">Collections</h3>

              <ul className="collections">

              <div className="input-item">
                    <Checkbox
                      size="small" 
                      sx={{
                        color:'primary',
                        '&.Mui-checked': {
                          color: base,
                        },
                      }}

                      value='red' 
                      onChange={handleCollections}
                      id="2"
                      />
                    <Link htmlFor="2" to={`/Collections/Red-Wine`} className="collection-label input-label">Red Wine</Link>
                  </div>

                <div className="input-item">
                  <Checkbox
                  size="small" 
                  sx={{
                    color:'primary',
                    '&.Mui-checked': {
                      color: base,
                    },
                  }}

                  value='white' 
                  onChange={handleCollections}
                  id="1"
                  />
                  <Link htmlFor="1" to={`/Collections/White-Wine`} className="collection-label input-label">White Wine</Link>
                </div>

                

                <div className="input-item">
                  <Checkbox
                    size="small" 
                    sx={{
                      color:'primary',
                      '&.Mui-checked': {
                        color: base,
                      },
                    }}

                    value='rosé' 
                    onChange={handleCollections}
                    id="3"
                    />
                  <Link htmlFor="3" to={`/Collections/Rosè-wine`} className="collection-label input-label">Rosé Wine</Link>
                </div>

                <div className="input-item">
                  <Checkbox
                    size="small" 
                    sx={{
                      color:'primary',
                      '&.Mui-checked': {
                        color: base,
                      },
                    }}
                    onChange={handleCollections}
                    value='sparkling'
                  
                    id="4"
                    />
                  <Link htmlFor="4" to={`/Collections/Sparkling-Wine`} className="collection-label input-label">Sparkling Wine</Link>
                </div>
                
              </ul>
              
        </div>


        <div className="filter-widget widget">
          <h3 className="widget-title">Filter by Price</h3>
          <div className="input-item slider">
            
              <span className="input-label" style={{margin:"0"}}>$0</span>
              
                
                {/* <input type="range" min={0} max={1000}  onChange={(e)=>setMaxprice(e.target.value)} className="slider" ></input> */}
            
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
                      checked={sale}

               
                      onChange={saleHandle}
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
                        checked={isNew}
          
                      onChange={newHandle}
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
                        checked={isFeatured}
          
                      onChange={featHandle}
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
                        checked={isTrending}
          
                      onChange={trendHandle}
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

        <div className="catalog-right">
          <div className="products-banner catalog-page-banner">
            <h1 className="catalog-right-title">PRODUCTS</h1>
            <div className="underline catalog-underline"></div>
          </div>
          
          
          <div className="products-list">
            <List collection={collection} isNew={isNew} isTrending={isTrending} isFeatured={isFeatured} sale={sale} sort={sort} maxPrice={maxPrice} isWidgetOpen={isWidgetOpen} widgetOpen={widgetOpen} slide={slide}/>
          </div>
          
        </div>
      </div>
    </div>


    
    
    
  
    
    
    </>
  )
}

export default Catalog