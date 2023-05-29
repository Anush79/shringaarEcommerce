import "./productDetails.css";

import InnerImageZoom from "react-inner-image-zoom";

import { useParams } from "react-router-dom";
import { useData, useWish, useCart, useAuth } from "../../";

export default function ProductDetails() {
  const { backendData, getSingleProduct } = useData();
  const {addToCardFunction} = useCart();
  const {token} = useAuth()
  const todate = new Date().toString();
  const { prodID } = useParams();
  const { addWishListData } = useWish();

  const product = backendData?.productsData.find(
    (item) => item._id === prodID
  );
  if (product) {
    const {
      product_brand,
      product_category,
      product_color,
      product_description,
      _id,
      product_image,
      product_isBadge,
      product_isCart,
      product_isFavorite,
      product_material,
      product_name,
      product_occasion,
      product_prevPrice,
      product_price,
      product_rating,
      product_reviews,
      product_size,
    } = product;

    const discount = Math.floor(
      100 - (product_price / product_prevPrice) * 100
    );

    return (
      <div className="productDetailsContainer" key={_id}>
        <div className="detailsContainer">
          <div className="imgcontainer">
            <InnerImageZoom src={product_image} zoomSrc={product_image} />

            <div className="buttons">
              <button onClick={() => {
                  addToCardFunction(product, token)
                }}>Add to Cart</button>
              <button
                onClick={() => {
                  addWishListData(product);
                }}
              >
                Add to Wishlist
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
