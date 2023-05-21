import './productDetails.css'
import { v4 as uuid } from 'uuid';

const product = {
  "product_id": uuid(),
  "product_name": "vestibulum",
  "product_description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "product_price": 1267.21,
  "product_category": "bracelate",
  "product_brand": "Twinte",
  "product_image": "https://images.cltstatic.com/media/product/350/AT00177-SS0000-a-lazy-morning-bracelet-in--silver-prd-1-model.jpg",
  "product_rating": 3.6,
  "product_reviews": 334,
  "product_color": "Silver",
  "product_size": "extra large",
  "product_material": "silver",
  "product_occasion": "Casual",
  "product_prevPrice": 1944.478,
  "product_isFavorite": "true",
  "product_isCart": "false",
  "product_isBadge": "Trending"
}

export default function ({prodID}){
  
  const todate= new Date().toString();


  const {product_brand,product_category,product_color,product_description,product_id,product_image,product_isBadge,product_isCart, product_isFavorite, product_material, product_name, product_occasion, product_prevPrice, product_price, product_rating, product_reviews, product_size} = product

  const discount  =Math.floor(100-( (product_price/product_prevPrice)*100 ))


  return <div className="productDetailsContainer">
    
  <h1>Product Details</h1>
  <div className="detailsContainer" >
    <div className="imgcontainer">
       <img src={product_image} alt="dummy Image" />
    </div>
    <div className="textContentContainer">
       <h2>{product_name}</h2>
       <small>by</small><h3>{product_brand}</h3>
       <small>{product_category}</small>
       <div className="offer">Buy 2 & get 5% cashback</div>
       <div className="price">$ {product_price} <span className="stikeThrough">$ {product_prevPrice}</span> ({discount}% off)</div>
       <div className="deliveryDate">
       Delivery by { todate.slice(0,15)}
       </div>
       <div className="buttons">
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
       </div>
       <div className="description">
       {product_description}
       </div>
       <div className="color">
        Color: {product_color}
       </div>
       <div className="material">Made of : {product_material}</div>
       <div className="occasion">
        Occasion : {product_occasion}
       </div>
       <div className="rating">Rating : {product_rating} ⭐</div>
       <div className="review">
        Total Reviews : {product_reviews}
       </div>
    </div>
  </div>
  </div>
  
}
/**
 * ,
 */