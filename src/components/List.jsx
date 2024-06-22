import Card from "./Card"
import "./list.css"
import useFetch from '../hooks/useFetch.js'
import Loader from "./Loader.jsx";
import { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TuneIcon from '@mui/icons-material/Tune';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import Error from "./error.jsx";

const List = ({sort, collection, maxPrice, sale, isNew, isWidgetOpen, widgetOpen, slide, isFeatured, isTrending}) => {

  
  const isMobileScreen = useMediaQuery('(max-width:1100px)');

  const {data, loading, error} = useFetch(`/products?populate=*${collection?.map(
    (item)=> `&[filters][wine][$eq]=${item.trim()}`
  ).join('')}${(sale === true) ?  `&[filters][sale][$gt]=0` : "" }${(isNew === true) ?  `&[filters][isNew][$eq]=true` : "" }${(isTrending === true) ? `&[filters][type][$eq]=trending` : "" }${ (isFeatured === true) ? `&[filters][type][$eq]=featured` : "" }&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`);







  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItems] = useState(20)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(()=>{
    setCurrentPage(1);
  },[currentItems < itemsPerPage])
  





  return (
    <>

      <div className="pagination-options">



        {!isMobileScreen && <div className="items-per-page-box">
          <FormControl size="small"  >
          <InputLabel  sx={{fontSize:'.8em'}} id="demo-simple-select-label">ITEMS/PG</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            sx={{width:'5rem', fontSize:'.8em'}}
            
          >
            <MenuItem onClick={()=>setItems(10)}  sx={{fontSize:'.8em'}} value={10}>10</MenuItem>
            <MenuItem onClick={()=>setItems(20)}   sx={{fontSize:'.8em'}} value={20}>20</MenuItem>
            <MenuItem onClick={()=>setItems(30)}  sx={{fontSize:'.8em'}} value={30}>30</MenuItem>
          </Select>
        </FormControl>



          <button className="pagination-nav-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <KeyboardArrowLeftIcon  sx={{fontSize:'1.1em', fontWeight:'600'}}/>
          </button>

          <div className="page-button-box">
            {Array.from({ length: totalPages }, (_, index) => (
              <button className="page-button" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          
          </div>
          <button className="pagination-nav-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <KeyboardArrowRightIcon  sx={{fontSize:'1.1em', fontWeight:'600'}}/>
          </button>
        </div>}

        {isMobileScreen &&

        <div className="mobile-pagination-options">
         {!widgetOpen && <TuneIcon sx={{fontSize:'2.2em', marginTop:'.4rem', color:"var(--base)"}} onClick={()=>slide()} />}
         

            <div className="items-per-page-box" style={{marginLeft: isWidgetOpen && 'auto'}}>
              <FormControl size="small"  >
              <InputLabel  sx={{fontSize:'.8em'}} id="demo-simple-select-label">ITEMS/PG</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
           
                sx={{width:'5rem', fontSize:'.8em'}}
                
              >
                <MenuItem onClick={()=>setItems(10)}  sx={{fontSize:'.8em'}} value={10}>10</MenuItem>
                <MenuItem onClick={()=>setItems(20)}   sx={{fontSize:'.8em'}} value={20}>20</MenuItem>
                <MenuItem onClick={()=>setItems(30)}  sx={{fontSize:'.8em'}} value={30}>30</MenuItem>
              </Select>
            </FormControl>

            <button className="pagination-nav-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <KeyboardArrowLeftIcon  sx={{fontSize:'1.1em', fontWeight:'600'}}/>
            </button>

            <div className="page-button-box">
              {Array.from({ length: totalPages }, (_, index) => (
                <button className="page-button" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              ))}
            
            </div>
            <button className="pagination-nav-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <KeyboardArrowRightIcon  sx={{fontSize:'1.1em', fontWeight:'600'}}/>
            </button>
          </div>

        </div>}
      </div>


        


    <div className="List">
    {loading?
    <Loader/>
    :error
    ?<Error/>
    :data && currentItems.map(item => (
    <Card item={item} key={item.id}/> 
    
  ))}    
    </div>
      
      <div className="pagination-options" style={{width:"fit-content", display:"flex", gap:".5rem", margin:"auto"}}>
        <button className="pagination-nav-button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <KeyboardArrowLeftIcon  sx={{fontSize:'1.1em', fontWeight:'600'}}/>
          </button>

          <div className="page-button-box">
            {Array.from({ length: totalPages }, (_, index) => (
              <button className="page-button" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          
          </div>
          <button className="pagination-nav-button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <KeyboardArrowRightIcon  sx={{fontSize:'1.1em', fontWeight:'600'}}/>
          </button>
      </div>
   

   
    </>
  )
}

export default List;