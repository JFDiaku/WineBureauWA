import { useEffect, useState } from "react"
import makeRequests from '../makeRequests.js'


const useFetch = (url)=>{

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        setLoading(true)
        const res = await makeRequests.get(url);
        setData(res.data.data) 
        console.log(res)
      }catch(err){
        setError(true)
        console.log(err)
      }  
      setLoading(false);
    }
    fetchData();
  },[url])
  
  return {data,loading,error};
};


export default useFetch;
