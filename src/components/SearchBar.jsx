import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion ,easeInOut } from 'framer-motion';

const SearchBar = ({isMobileScreen}) => {
  const [query , setQuery]  = useState([]);
  const [searchOpen , isSearchOpen]  = useState(false);
  const inputRef = useRef(null);
  useEffect(()=>{
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  },[searchOpen])
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && query !== null) {
      navigate(`/search/${query}`);
      isSearchOpen(false);
    }
  };

 
  return (
   <>

   <div className="search-area">
      <SearchIcon sx={{fontSize:'1.8em', cursor:'pointer', marginTop:'.2rem'}} onClick={()=>isSearchOpen(true) && inputRef.current.focus()} />
      <AnimatePresence>
    {searchOpen && <> <motion.div
      initial={{  width:'0%', height:'0'}}
      animate={{ width: "100%", height:"100%"}}
      exit={{  width:'0%', height:'0', opacity:0}}
      transition={{duration:.3, ease:easeInOut}}
      onClick={()=>isSearchOpen(false)}
      className="search-box-overlay">
    </motion.div>
     <motion.div
          initial={{  width:'0%', height:'0'}}
          animate={{ width: "fit-content", height:"5rem"}}
          exit={{  width:'0%', height:'0', opacity:0}}
          transition={{duration:.3, ease:easeInOut}}
      className="search-box">
        <Link onClick={()=>isSearchOpen(false) && setQuery('')}   to={`/search/${query}`} className='search-button'><SearchIcon  sx={{fontSize:'2em', color:'white'}} /></Link>
     <input type="text" maxLength={20} ref={inputRef} id='search' className='search-bar mobile-search-bar' value={query} onKeyDown={handleKeyDown} onChange={(e)=>setQuery(e.target.value)}  placeholder='Search anything...'/>
   </motion.div>
   </>}
      </AnimatePresence>
   </div>  
   
   
  

   </>
  )
}

export default SearchBar