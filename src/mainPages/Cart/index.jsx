import {NavLink} from 'react-router-dom'

import './cart.css'

/**
 * 
 *   {
    "product_id": uuid(),
    "product_name": "ac diam cras pellentesque volutpat",
    "product_description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "product_price": 699.85,
    "product_category": "ring",
    "product_brand": "Oba",
    "product_image": "https://staticimg.titan.co.in/Tanishq/Catalog/51T404FGNAA00_1.jpg?impolicy=pqmed&imwidth=640",
    "product_rating": 2.5,
    "product_reviews": 945,
    "product_color": "blue",
    "product_size": "extra large",
    "product_material": "gold",
    "product_occasion": "Traditional",
    "product_prevPrice": 1730.693,
    "product_isFavorite": "false",
    "product_isCart": "false",
    "product_isBadge": "Trending"
  },
 */

// const isCartEmpty = true;
export default function Cart(){
  return <div className="cart">
    <div className="allProductsInCarts">
           i am alll products
    </div>
    <div className="totalPrice">
i am total price
    </div>
  </div>

}


// isCartEmpty?<div className="emptyCart">
//     <img src="\assets\mt-cart.png" alt="empty cart"  srcset="" />
//     <p >You have no items in your shopping cart.</p>
//    <NavLink to='/'><button>Shop Now</button></NavLink> 
  
//     </div>:<div>Non empty</div>