import {createContext, useReducer} from 'react'

import { initialWishList, wishReducerFunction } from '../allReducers/wishReducer';

export const  wishContext = createContext();



export function WishProvider ({children}){
const [wishlist, setWishList] = useReducer(wishReducerFunction, initialWishList)

const getWishList = async ()=>{
  
}


  return <wishContext value={{wishlist}}>
    {children}
  </wishContext>
}

