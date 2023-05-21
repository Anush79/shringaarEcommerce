
import {NavLink} from 'react-router-dom'
export default function ProductCard({item}){
  const {product_id, product_name, product_price, product_prevPrice, product_image } = item;
  return (
   
    <div className="ProductCard" key={product_id}>
       <NavLink to={`/products/${product_id}`}>
        <div>
      <img src={product_image} alt="eclusive jewelry by Shringaar"/>
      <h3>{product_name}</h3>
      <p className="price">
      {product_prevPrice && <span className="stikeThrough">$ {product_prevPrice}</span>}
      <b> $ {product_price}</b></p>
      </div>
      </NavLink>
    </div>
    
  );
}