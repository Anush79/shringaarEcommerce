import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src="\assets\mt-cart.png" alt="empty cart" srcset="" />
      <p>You have no items in your shopping cart.</p>

      <button
        onClick={() => {
          navigate("/browse");
        }}
      >
        Shop Now
      </button>
    </div>
  );
}
