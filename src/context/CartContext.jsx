import {useContext, createContext, useEffect, useState, useReducer} from 'react'
import { toast } from "react-toastify";
import {useAuth} from '../'
import {getCartList,addToCart,incDecQuantity,deleteFromCart} from '../services/shopingService/cartService'
import {initialCartData,cartReducer} from '../allReducers/cartReducer'
export const CartContext = createContext()

export function CartProvider ({children}){
const [cartManager, setCartManager] = useReducer (cartReducer, initialCartData)
const {token } = useAuth()

const getAllCartItems =async (encodedToken) =>{
   try{
    const response = await getCartList(encodedToken)
    const {status, data: {cart}} = response;
    if(status === 200){
      setCartManager({type:"DISPLAYCART", payload:[...cart]})
    }
   }
   catch(error){
    if(token)
    toast.error(error?.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
    console.error(error)
   }
}


const addToCardFunction = async(product,encodedToken)=>{
  try{
    const response = await addToCart(product, encodedToken);
    const {status, data: {cart}} = response;
    if(status === 201){
      setCartManager({type: "ADDTOCART", payload:cart})
      toast.success("Added to cart",{
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
    
  }catch(error){
    toast.warn("Please Login in before you add to cart")
  }
}
const deleteFromCartFunction = async (id, title, encodedToken)=>{
  try{
    const response = await deleteFromCart(id, encodedToken)
    const {status, data:{cart}}= response;

    if(status===200){
         setCartManager({type:"DELETEFROMCART", payload:cart})
         toast.success(`${title} has been removed from cart`,{
          position: toast.POSITION.BOTTOM_RIGHT,
        })
    }

  }catch(error){
    console.log(error)
    toast.error("Error:Cannot remove this item from cart",{
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }
}

const changeQuantity = async(productId,encodedToken ,type)=>{
  try{
    const response = await incDecQuantity(productId, encodedToken, type);
    const {status, data: {cart}} = response;
    if(status === 200){
      if(type==="increment") setCartManager({type: "INCREASEQUANT", payload: cart});
      else setCartManager({type:'DECREASEQUANT', payload: cart})
        toast.success( type === "increment" ? `Cart quantity incrased successfully!` : `Cart quantity decreased successfully!`, 
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
        );    
    }

  }
  catch(error){
    toast.error(error.message)
    console.log(error)
  }
}


useEffect(()=>{
  if(token) getAllCartItems(token)
},[token])
  return <CartContext.Provider value={{changeQuantity,cartManager,addToCardFunction, deleteFromCartFunction, cartCount: cartManager.cartData.length}}>
    {children}
  </CartContext.Provider>
}

export function useCart(){
  return useContext(CartContext);
}
