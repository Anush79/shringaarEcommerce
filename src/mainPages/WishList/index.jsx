import './wishList.css'
import {NavLink} from 'react-router-dom'
import { useWish } from '../..'

import ProductCard from '../../components/ProductCard'
export default function WishList(){
  const {wishList} = useWish()
  console.log(wishList)
  return <div className="wishLish">
     <h1>Your Wish List</h1>
    <div className="productsContainer">
     
                {
                wishList.loading? <p>Wishlist loading...</p>:
                wishList?.backendWishList.length===0?<p>Wishlist is empty... <NavLink to='/browse'><button>Browse shop</button></NavLink></p>:
                wishList?.backendWishList.map((item) => (
                  <ProductCard item={item} inWishlist={true} />
                ))}
              </div>
    </div>

}