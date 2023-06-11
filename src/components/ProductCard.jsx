import { NavLink } from "react-router-dom";

import { useData, useAuth, useWish, useCart } from "..";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function ProductCard({ item, inWishlist }) {
  const { deleteWishListData, addWishListData ,isAvailableInWishList} = useWish();
  const { getSingleProduct } = useData();
  const { addToCardFunction, isItemInCart,changeQuantity } = useCart();
  const { token } = useAuth();
  const {
    _id,
    product_name,
    product_price,
    product_prevPrice,
    product_image,
    product_isBadge,
    
    
  } = item;
  const discount = Math.floor(
    100 - (product_price / product_prevPrice) * 100
  );
  return (
    <div className="ProductCard" key={_id}>
      <NavLink to={`/products/${_id}`}>
        <div
          onClick={() => {
            getSingleProduct(_id);
          }}
        >
          <img src={product_image} alt="exclusive jewelry by Shringaar" />
          <div className="cardTextContent">
            <h3>{product_name.slice(0, 15)}</h3>
            <p className="price">
              {product_prevPrice && (
                <span className="stikeThrough">$ {product_prevPrice}</span>
              )}
              <b> $ {product_price} </b> ({discount} % off)
            </p>
            
          </div>
          <span className="favorite" title= "Add to WishList" onClick={(e)=>{e.preventDefault();
          token && isAvailableInWishList(_id)>=0 ?deleteWishListData(_id):addWishListData(item)
          }}>
           {
           token&&isAvailableInWishList(_id)>=0 ?<FavoriteRoundedIcon/>:
            <FavoriteTwoToneIcon/>
          
            
}
          </span>
          <span title={product_isBadge} className="trendingIcon">
            {product_isBadge.length > 0 ? (
              <div className="ribbon ribbon-top-left">
                <span>{product_isBadge}</span>
              </div>
            ) : null}

          </span>
      
       

          <div className="buttons">
            <div className="addToCartButton" title= "Add to Cart">
              {token && isItemInCart(_id) ? (
                <span
                  title="Move to Cart"
                  className="moveToCart"
                  style={{ background: "#cb9fe3", borderRadius: "12px" }}
                >
                  <NavLink to="/cart">
                    <ShoppingCartCheckoutIcon />
                  </NavLink>
                </span>
              ) : (
                <AddShoppingCartIcon
                  onClick={(e) => {
                    e.preventDefault();
                    addToCardFunction(item, token);
                  }}
                />
              )}
            </div>

            
        </div>
        {isItemInCart(_id)&& inWishlist ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  changeQuantity(_id, token, "increment");
                }}
              >
                + 1 in Cart
              </button>
            ) : null}
          </div>
      </NavLink>
    </div>
  );
}
