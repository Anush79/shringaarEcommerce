
import { NavLink,Outlet } from "react-router-dom";


import './cart.css'

export default function Cart(){

  return <div className="mainCartContainerPage">
        <nav>
        <NavLink to=''>Shopping Cart</NavLink>--------
        <NavLink to="/cart/checkout">Checkout Details </NavLink>--------
        <NavLink to="/cart/completedorders">Order Complete</NavLink>
       
        </nav>
       <div className="displayPages">
          <Outlet/>
        </div>
    </div>
}



<div className="emptyCart">
    <img src="\assets\mt-cart.png" alt="empty cart"  srcset="" />
    <p >You have no items in your shopping cart.</p>
   <NavLink to='/'><button>Shop Now</button></NavLink> 
  
    </div>