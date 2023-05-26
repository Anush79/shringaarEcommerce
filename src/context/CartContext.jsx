import {useContext, createContext} from 'react'

export const CartContext = createContext()

export function CartProvider ({children}){
  return <CartContext.Provider value={{}}>
    {children}
  </CartContext.Provider>
}

export function useCart(){
  return useContext(CartContext);
}
