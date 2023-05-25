import {createContext, useReducer, useEffect, useContext} from 'react'
import { toast } from "react-toastify";
import { initialWishList, wishReducerFunction } from '../allReducers/wishReducer';
import {getWishList, removeFromWishList, addToWishList} from '../services/shopingService/wishlistService'

import {useAuth} from '../'
export const  WishContext = createContext();



export function WishProvider ({children}){
const [wishList, setWishList] = useReducer(wishReducerFunction, initialWishList)
const {token} = useAuth()

const getWishListData = async ()=>{
  try {
    const response = await getWishList(token)
    const {status, data: {wishlist}} = response;

    if(status===200){
      setWishList({type:"ALLWISHLIST", payload: wishlist})

    }
  }catch (error){
     console.log(error)
  }
  finally{
    console.log(wishList, "finally")
  }
}
const addWishListData = async (product)=>{
  try {
    const response = await addToWishList(product, token)
    const {status, data: {wishlist}} = response;

    if(status===201){
      setWishList({type:"ADDTOWISH", payload: wishlist})
      toast.success("Product added to wishlist",{
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  }catch (error){
     console.log(error)
     toast.error("Product could not be found",{
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
  finally{
    console.log(wishList, "finally")
  }
}
const deleteWishListData = async (productId)=>{
  try {
    const response = await removeFromWishList(productId, token)
    const {status, data: {wishlist}} = response;

    if(status===200){
      setWishList({type:"DELETEWISH", payload: wishlist})
      toast.warn("Product Deleted from wishlist",{
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  }catch (error){
     console.log(error)
     toast.error("Product could not be found",{
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
  finally{
    console.log(wishList, "finally")
  }
}
useEffect(()=>{
  getWishListData();
},[token])
  return <WishContext.Provider value={{wishList, wishlistCount : wishList.backendWishList.length, addWishListData,deleteWishListData}}>
    {children}
  </WishContext.Provider>
}

export const useWish = ()=>{
  return useContext(WishContext)
}