import React, { useEffect } from 'react'
import './search_results.css'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card.jsx'
import Loader from '../components/Loader.jsx'
const Search_results = () => {

  const query = useParams().query

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][$or][0][name][$contains]=${query}&[filters][$or][1][description][$contains]=${query}&[filters][$or][2][price][$contains]=${query}&[filters][$or][3][type][$contains]=${query}&[filters][$or][4][ABV][$contains]=${query}&[filters][$or][5][country][$contains]=${query}&[filters][$or][6][wine][$contains]=${query}`);

  console.log(data)

  const styles = {
    justifyContent: data?.length <= 4 ? 'start' : "space-between"
  }



  return (
    <div className='Search-results container'>
      
      {data && data.length === 0 ? <h1 className='search-title'>Your search for "{query}" revealed no results.</h1> :
      <h1 className='search-title'>Your search for "{query}" revealed the following:</h1>}
      
  
      
      
      <div className="search-data" style={styles}>
        {
        loading? 
        <Loader/>:
        error ?
        'something went wrong':
        data &&
        data.map(item=> (
          <Card key={item.id} item={item}/>
        ))
       }
      </div>

    </div>

 
  )
}

export default Search_results