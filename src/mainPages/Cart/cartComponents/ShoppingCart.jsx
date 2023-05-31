import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useCart, useAuth ,useData} from "../../../";
import { NavLink } from "react-router-dom";

export default function ShoppingCart() {
  const {getSingleProduct} = useData()
  const {
    cartManager,
    changeQuantity,
    deleteFromCartFunction,
    totalPrice,
    totalPrevPrice,
    totalDiscount,
  } = useCart();
  const { token } = useAuth();
  return (
    <div className="shoppingCart">
      <table className="cartData">
        <thead>
          <tr>
            <th class="product-thumbnail screen-reader-text">Product image</th>
            <th class="product-name">Product</th>
            <th class="product-price">Price</th>
            <th class="product-quantity">Quantity</th>
            <th class="product-subtotal">Subtotal</th>
            <th class="product-remove">Remove</th>
          </tr>
        </thead>
        <tbody>
          {token ? (
            cartManager?.loading ? (
              <h4>loading cart data...</h4>
            ) : (
              cartManager?.cartData.map((item) => {
                const { _id, product_image, product_name, product_price, qty } =
                  item;
                console.log(qty);
                const shortName = product_name.slice(0, 14);

                return (
                  <tr className="cartItem" key={_id}>
                    <td class="product-thumbnail" data-cell="">
                      <NavLink to={`/products/${_id}`}>
                        <div
                          onClick={() => {
                            getSingleProduct(_id);
                          }}
                        >
                          <img src={product_image} width="70px" alt="" />
                        </div>
                      </NavLink>
                    </td>

                    <td class="product-name" data-cell="Product ">
                      {shortName}...
                    </td>

                    <td class="product-price" data-cell="Price  ">
                     $ {product_price}
                    </td>

                    <td class="product-quantity" data-cell="Quantity :">
                      <div className="counter">
                        <span
                          style={{ color: qty < 2 ? "#d1d1d1" : "" }}
                          onClick={() => {
                            if (qty > 1)
                              changeQuantity(_id, token, "decrement");
                          }}
                        >
                          <RemoveCircleOutlineIcon />
                        </span>
                        <span className="displayQty">{qty}</span>
                        <span
                          onClick={() => {
                            changeQuantity(_id, token, "increment");
                          }}
                        >
                          <AddCircleOutlineIcon />
                        </span>
                      </div>
                    </td>

                    <td class="product-subtotal" data-cell="Subtotal :">
                      <span><b>$ {Math.floor(product_price * qty)}</b></span>
                    </td>
                    <td
                      class="product-remove"
                      onClick={() => {
                        deleteFromCartFunction(_id, product_name, token);
                      }}
                    >
                      <HighlightOffIcon />
                    </td>
                  </tr>
                );
              })
            )
          ) : (
            <h2>Please Login to see Cart items</h2>
          )}
        </tbody>
      </table>

      <table className="cartTotal">
        <thead>
          <th>Cart Total</th>
        </thead>
        <tbody>
          <tr className="subTotal">
            <span className="dataTitle">Subtotal</span>
            <span className="Sprice">${totalPrevPrice}</span>
          </tr>
          <tr className="discount">
            <span className="disc">Discount :</span> {totalDiscount}%
          </tr>
          <tr className="Tprice">
            {" "}
            <span>Total</span>
            <span className="TotalPrice">${totalPrice}</span>
          </tr>
          <div className="applyCoupon">Apply Coupon</div>
          <button>Proceed to Checkout</button>
        </tbody>
      </table>
    </div>
  );
}
