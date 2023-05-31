import { NavLink } from "react-router-dom"

export default function Orders(){
  const orders= []
  return(
  <div className="ordersContainer">
    <h2>Orders</h2>
    <div className="allOrders">
      {
        orders.length > 0? "here are all your previous orders" : <div>
         <p> "No orders yet , please shop something"</p>
          <button><NavLink to="/browse">Shop Now</NavLink></button>
        </div>
      }
    </div>

  </div>
  
    )
}