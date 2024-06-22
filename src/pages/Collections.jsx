import redWine from '../assets/images/wine18.jpg'
import whiteWine from '../assets/images/wine19.webp'
import roseWine from '../assets/images/wine19.jpg'
import sparklingWine from '../assets/images/wine21.jpg'
import './collections.css'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WineSlider from '../components/WineSlider'
import useFetch from '../hooks/useFetch'



const Collections = () => {
  

  const {data, loading, error} = useFetch(`/products?populate=*`);
  const deal='deals';
  const new_arrivals='new-arrivals';

  const redCount = data?.filter(item => item.attributes.wine === "Red" ).length
  const whiteCount = data?.filter(item => item.attributes.wine === "White" ).length
  const sparkCount = data?.filter(item => item.attributes.wine === "Sparkling" ).length
  const roseCount = data?.filter(item => item.attributes.wine === "Rosé" ).length
  const newCount = data?.filter(item => item.attributes.isNew === true ).length
  const dealCount = data?.filter(item => item.attributes.sale > 0 ).length
  console.log(redCount, whiteCount, sparkCount, roseCount, newCount, dealCount)
  return (

    <>
     <div className='collection-banner container' >
        <div className="collections-pageNav" style={{color:'white'}} >
          <Link className="navLink pageNav-link" style={{color:'white'}} to='/'>HOME</Link> 
          <ArrowForwardIosIcon sx={{fontSize:".7em"}}/>
          <Link className="navLink pageNav-link" style={{color:'white'}} to='/Collections' >COLLECTIONS</Link>

        </div>


        <div className="title-box">
          <h1 className='collections-page-title' style={{fontFamily:'var(--font2)'}}>COLLECTIONS</h1>
          <div className="underline collections-underline"></div>
        </div>

       
      </div>
            
    <div className="collections-page container">

      

      <div className="collection-cards">
        <Link to='/Collections/Red-Wine'  className="collection-card">

          <div className="collection-card-name-box">
            <h1 className='collection-card-name'>RED WINE</h1>
            <div className="underline" ></div>
          </div>
          
          

          <div className="collection-card-text">
            
            <h2><b>{redCount}</b> Item(s)</h2>
          </div>

        </Link>

        <Link className="collection-card"  to='/Collections/White-Wine'>


        <div className="collection-card-name-box">
            
          <h1 className='collection-card-name'>WHITE WINE</h1>
            <div className="underline" ></div>
          </div>

     

          <div className="collection-card-text">
          
            <h2><b>{whiteCount}</b> Item(s)</h2>
          </div>
            
        </Link>
        <Link className="collection-card" to='/Collections/Rosè-Wine'>

        

        <div className="collection-card-name-box">
        <h1 className='collection-card-name'>ROSE WINE</h1>
            <div className="underline" ></div>
          </div>

  

          
          <div className="collection-card-text">
          
            <h2><b>{roseCount}</b> Item(s)</h2>
          </div>
            
        </Link>
        <Link className="collection-card"  to='/Collections/Sparkling-Wine'>
      

        <div className="collection-card-name-box" >
          <h1 className='collection-card-name'>SPARKLING WINE</h1>
            <div className="underline" ></div>
          </div>

          <div className="collection-card-text">
      
            <h2><b>{sparkCount}</b> Item(s)</h2>
          </div>
            
        </Link>
        <Link className="collection-card" to={`/Collections/all/${new_arrivals}`}>
        

        <div className="collection-card-name-box" >
            <h1 className='collection-card-name'>NEW ARRIVALS</h1>
            <div className="underline" ></div>
          </div>

          <div className="collection-card-text">
      
            <h2><b>{newCount}</b> Item(s)</h2>
          </div>
            
        </Link>
        <Link className="collection-card" to={`/Collections/all/${deal}`}>
       
        <div className="collection-card-name-box" >
            <h1 className='collection-card-name'>DEALS</h1>
            <div className="underline" ></div>
          </div>

          <div className="collection-card-text">
    
            <h2><b>{dealCount}</b> Item(s)</h2>
          </div>
            
        </Link>
      </div>
      

    </div>

    </>
  )
}

export default Collections