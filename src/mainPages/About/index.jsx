
import {useState, useEffect} from 'react'
export default function About(){
  const [apiData, setData] = useState();
  const getApiData = async () => {
    try {
      const response = await fetch("/api/products");
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(apiData)
  
  useEffect(() => {
    getApiData();
  }, []);
  return(<>About Page</>)
}

