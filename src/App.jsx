import "./App.css"
import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Catalog from "./pages/Catalog.jsx"
import Product from "./pages/Product.jsx"
import Scroll from "./components/Scroll.jsx"
import Cart from "./components/Cart.jsx"
import { useState, useEffect } from "react"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import Search_results from "./pages/Search_results.jsx"
import Collections from "./pages/Collections.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SnackbarProvider } from "./components/SnackbarContext.jsx"
import useMediaQuery from '@mui/material/useMediaQuery';
import CartPage from "./pages/CartPage.jsx"
import RedWine from "./pages/RedWine.jsx"
import SparkWine from "./pages/SparkWine.jsx"
import RoseWine from "./pages/RoseWine.jsx"
import WhiteWine from "./pages/WhiteWine.jsx"
import Contact from "./pages/Contact.jsx";
import ScrollArrow from "./components/ScrollArrow.jsx"

function App() {
  const [cartOpen, isCartOpen] = useState(false)
  const [navOpen, isNavOpen] = useState(false);
  const [dropOpen, isDropOpen] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width:1100px)');


  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          isNavOpen(false);
          isDropOpen(false);
          isCartOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const base =  'rgb(118, 29, 29);';
  const theme = createTheme({

    palette:{
      primary: {
        main: base,
      },
      secondary: {
        main: '#000000',
      },
    },

    typography: {
      fontFamily: `var(--font)`, // Replace 'YourDesiredFont' with the desired font
    }
  
  });



  return (
    <>
    <ThemeProvider theme={theme}>
    <SnackbarProvider>
    <Router>
      <Navbar isCartOpen={isCartOpen} isMobileScreen={isMobileScreen} isNavOpen={isNavOpen} navOpen={navOpen} dropOpen={dropOpen} isDropOpen={isDropOpen}  cartOpen={cartOpen} useOutsideAlerter={useOutsideAlerter}/>
      <Scroll/>
      <ScrollArrow isMobileScreen={isMobileScreen}  />
      <Cart isCartOpen={isCartOpen} isMobileScreen={isMobileScreen} cartOpen={cartOpen} useOutsideAlerter={useOutsideAlerter}/>
      <Routes>
        <Route path='/'  element={< Homepage isMobileScreen={isMobileScreen}/>}/>
        <Route path='/Collections/all' element={< Catalog isMobileScreen={isMobileScreen}/>}  />
        <Route path='/product/:item' element={<Product />}/>
        <Route path='/search/:query' element={<Search_results />}/>
        <Route path='/Collections/all/:deal' element={<Catalog isMobileScreen={isMobileScreen}/>}/>
        <Route path='/Contact' element={<Contact isMobileScreen={isMobileScreen}/>}/>
        <Route path='/Collections/all/:new_arrivals' element={<Catalog  isMobileScreen={isMobileScreen}/>}/>
        <Route path='/Collections' element={<Collections/>}/>
        <Route path='/Cart/' element={<CartPage/>}/>
        <Route path='/Collections/Red-Wine' element={<RedWine  isMobileScreen={isMobileScreen}/>}/>
        <Route path='/Collections/White-Wine' element={<WhiteWine  isMobileScreen={isMobileScreen} />}/>
        <Route path='/Collections/Rosè-Wine' element={<RoseWine  isMobileScreen={isMobileScreen} />}/>
        <Route path='/Collections/Sparkling-Wine' element={<SparkWine  isMobileScreen={isMobileScreen} />}/>

      </Routes>
      <Footer isMobileScreen={isMobileScreen}/>
    </Router>
    </SnackbarProvider>
    </ThemeProvider>
    
    
    </>
  )
}

export default App
