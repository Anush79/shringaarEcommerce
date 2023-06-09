import "./productDetails.css";
import { useNavigate } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

import { useData, useWish, useCart, useAuth } from "../../";
import Loader from "../../components/Loader";

export default function ProductDetails() {
  const { singleProduct } = useData();
  const { addToCardFunction, isItemInCart } = useCart();
  const { token } = useAuth();
  const todate = new Date().toString();
  const { addWishListData, isAvailableInWishList, deleteWishListData } =
    useWish();
  const navigate = useNavigate();

  const product = singleProduct?.product;

  if (product) {
    const {
      _id,
      product_brand,
      product_category,
      product_color,
      product_description,

      product_image,
      product_material,
      product_name,
      product_occasion,
      product_prevPrice,
      product_price,
      product_rating,
      product_reviews,

    } = product;

    const discount = Math.floor(
      100 - (product_price / product_prevPrice) * 100
    );

    if (singleProduct.loading)
      return <Loader />
    return (

      <div className="productDetailsContainer" key={_id}>
        <div className="detailsContainer">
          <div className="imgcontainer">
            <InnerImageZoom src={product_image} zoomSrc={product_image} />

            <div className="buttons">
              <button
                onClick={() => {
                  token && isItemInCart(_id)
                    ? navigate("/cart")
                    : addToCardFunction(product, token);
                }}
              >
                {token && isItemInCart(_id) ? "Go to Cart" : "Add to Cart"}
              </button>
              <button
                onClick={() => {
                  if (token && isAvailableInWishList(_id) >= 0) deleteWishListData(_id);
                  else addWishListData(product);
                }}
              >
                {token && isAvailableInWishList(_id) >= 0 ? (
                  <span class="removeWish">
                    Remove <FavoriteRoundedIcon />{" "}
                  </span>
                ) : (
                  <span class="removeWish">
                    Add to <FavoriteTwoToneIcon />{" "}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="textContentContainer">
            <h2>{product_name}</h2>
            <small>{product_category} by </small>
            {product_brand}

            <div className="offer">Buy 2 & get 5% cashback</div>
            <div className="price">
              $ {product_price}{" "}
              <span className="stikeThrough">$ {product_prevPrice}</span>
              <span className="discount">({discount}% off)</span>
            </div>
            <div className="deliveryDate">
              Delivery by {todate.slice(0, 15)}
            </div>

            <div className="highlights">
              <div>
                <p class="head">Highlights</p>
                <ul>
                  <li>Color: {product_color}</li>
                  <li>Made of : {product_material}</li>
                  <li>Occasion : {product_occasion}</li>
                  <li>Rating : {product_rating} ⭐</li>
                  <li>Total Reviews : {product_reviews}</li>
                </ul>
              </div>

              <div className="description">
                <p class="head">Description</p>
                <p>{product_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <h2 style={{ height: "80vh", marginTop: "100px" }}>
        sorry, We could not find that product
      </h2>
    );
}
