import {NavLink} from 'react-router-dom'

import './cart.css'

const isCartEmpty = true;
export default function Cart(){
  return isCartEmpty?<div className="emptyCart">
    <img src="\assets\mt-cart.png" alt="empty cart"  srcset="" />
    <p >You have no items in your shopping cart.</p>
   <NavLink to='/'><button>Shop Now</button></NavLink> 
  
    </div>:<div>Non empty</div>

}
const FilledCart = ({cartItems})=>{

}