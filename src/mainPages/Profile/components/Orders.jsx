export default function Orders(){
  const orders= []
  return(
  <div className="ordersContainer">
    <h2>Orders</h2>
    <div className="allOrders">
      {
        orders.length > 0? "here are all your previous orders" : <div>
         <p> "No orders yet , please shop something"</p>
          <button>Shop Now</button>
        </div>
      }
    </div>

  </div>
  
    )
}