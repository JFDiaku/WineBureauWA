import FeaturedProducts from '../components/FeaturedProducts.jsx';
import {useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Card from '../components/Card.jsx';
import Categories from '../components/Categories.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';
import SalePromotion from '../components/SalePromotion.jsx';
import WinePromo from '../components/WinePromo.jsx';
import TrendingProducts from '../components/TrendingProducts.jsx';
import HotDeals from '../components/HotDeals.jsx';

const Homepage = ({isMobileScreen}) => {
  return (
    <>
      <Hero/>
      <WinePromo/>
      <TrendingProducts type='trending'/>
      <Categories isMobileScreen={isMobileScreen} />
      <FeaturedProducts type='featured'/>
      <SalePromotion/>

      <HotDeals/>
      <Newsletter/>
   

    </>
  )
}

export default Homepage