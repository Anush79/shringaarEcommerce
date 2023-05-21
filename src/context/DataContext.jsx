import { createContext, useContext } from 'react'
import {useState, useEffect} from 'react'

export const DataContext = createContext();

export function DataProvider({ children }) {
const [backendData, setBackendData] = useState({loading: true, error: null, productsData:[]})

const getBackendData =async()=>{
  try{
    const response = await fetch("/api/products");
    const finalData= await response.json()
    setBackendData({...backendData,loading:false, productsData:[...finalData.products]})
  }
  catch (error){
    setBackendData({...backendData,loading:false, error: error})
  }
}
useEffect(()=>{
  getBackendData()
},[])




console.log(backendData?.productsData)
  return <DataContext.Provider value={{backendData}}>
    {children}
  </DataContext.Provider>
}

export const useData =()=>{
  return useContext(DataContext)
}


