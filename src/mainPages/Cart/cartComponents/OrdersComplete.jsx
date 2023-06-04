import { useNavigate } from "react-router-dom";

export default function OrderComplete() {
  const navigate = useNavigate()
  return (
    <div className="orderComplete">
      Order Complete
      <div className="orderPlaced">
        <img
          src="\assets\order-placed-purchased-icon.svg"
          alt="empty cart"
          srcset=""
          width="200px"
        />
      </div>
      <h5>Great Choice, Order successfully Placed</h5>
      <button onClick={()=>{navigate('/profile/orders')}}>See your Orders</button>
    </div>
  );
}
