import {NavLink} from 'react-router-dom'

import './cart.css'
export default function Cart(){
  return <div className="emptyCart">
    <img src="\assets\mt-cart.png" alt="empty cart"  srcset="" />
    <p >You have no items in your shopping cart.</p>
   <NavLink to='/'><button>Shop Now</button></NavLink> 
    </div>
}