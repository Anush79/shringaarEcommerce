import { NavLink } from "react-router-dom";

import { useData,useAuth, useWish, useCart } from "..";

export default function ProductCard({ item, inWishlist }) {
  const { deleteWishListData } = useWish();
  const {getSingleProduct} = useData()
  const {addToCardFunction} = useCart()
  const {token} = useAuth()
  const {
    _id,
    product_name,
    product_price,
    product_prevPrice,
    product_image,
  } = item;
  return (
    <div className="ProductCard" key={_id}>
      <NavLink to={`/products/${_id}`}>
        <div onClick={()=>{getSingleProduct(_id)}}>
          <img src={product_image} alt="eclusive jewelry by Shringaar" />
          <div className="cardTextContent">
            <h3>{product_name}</h3>
            <p className="price">
              {product_prevPrice && (
                <span className="stikeThrough">$ {product_prevPrice}</span>
              )}
              <b> $ {product_price}</b>
            </p>
          </div>
          <div className="buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCardFunction(item,token)
               
              }}
            >
              Add to cart
            </button>
            {inWishlist ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(_id);
                  deleteWishListData(_id);
                }}
              >
                Remove from wishList
              </button>
            ) : null}
          </div>
        </div>
      </NavLink>
    </div>
  );
}
