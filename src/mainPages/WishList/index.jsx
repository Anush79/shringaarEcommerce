import "./wishList.css";
import { NavLink } from "react-router-dom";
import { useWish } from "../..";

import ProductCard from "../../components/ProductCard";
export default function WishList() {
  const { wishList } = useWish();
  return (
    <div className="wishLish">
      <h3>Your Wish List</h3>

      {wishList?.backendWishList.length === 0 ? (
        <p className="empty_Wishlist ">
          <img src="\assets\empty-wishlist.png" alt="" width={300} />
          <p>Wishlist is empty...{" "}</p>
          <NavLink to="/browse">
            <button>Browse shop</button>
          </NavLink>
        </p>
      ) : (
        <div className="productsContainer">
          {wishList?.backendWishList.map((item) => (
            <ProductCard item={item} inWishlist={true} />
          ))}
        </div>
      )}
    </div>
  );
}
