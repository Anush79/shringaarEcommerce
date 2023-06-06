
import { NavLink,Outlet } from "react-router-dom";

import {useCart} from '../../'
import './cart.css'

export default function Cart(){
const {cartCount} = useCart()
  return <div className="mainCartContainerPage">
         <h3>Your Cart</h3>
        <nav className= "cartNav">
        <NavLink to=''> Shopping Cart </NavLink> ----{`>`}
        <NavLink to={cartCount?'/cart/checkout':""}> Checkout Detail </NavLink>----{`>`}
        <NavLink to={cartCount?'/cart/checkout':""}> Order Complete</NavLink>
        </nav>
       <div className="displayCart">
          <Outlet/>
        </div>
    </div>
}


