import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function ShoppingCart() {
  return (
    <div className="shoppingCart">
      
        <table className="cartData">
      

          <thead>
            <tr>
              <th class="product-thumbnail screen-reader-text">
              Product image
              </th>
              <th class="product-name">Product</th>
              <th class="product-price">Price</th>
              <th class="product-quantity">Quantity</th>
              <th class="product-subtotal">Subtotal</th>
              <th class="product-remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cartItem">
              <td class="product-thumbnail" data-cell="">
                <img src='\assets\stonesjewel.jpg'width="70px" alt="" />
              </td>

              <td class="product-name" data-cell="Product ">
              Lorem, ipsum dolor.
              </td>

              <td class="product-price" data-cell="Price  ">
                <b>$ {900}</b>
              </td>

              <td class="product-quantity" data-cell="Quantity :">
                <div className="counter">
                    <span><RemoveCircleOutlineIcon/></span>
                  <span className="displayQty">2</span>
                <span><AddCircleOutlineIcon/></span>            
             
                </div>
                </td>

              <td class="product-subtotal" data-cell="Subtotal :">
                <span>$ {800.00}</span>
              </td>
              <td class="product-remove" ><HighlightOffIcon/></td>
            </tr>
            <tr className="cartItem">
              <td class="product-thumbnail" data-cell="">
                <img src='\assets\stonesjewel.jpg'width="70px" alt="" />
              </td>

              <td class="product-name" data-cell="Product ">
              Lorem, ipsum dolor.
              </td>

              <td class="product-price" data-cell="Price  ">
                <b>$ {900}</b>
              </td>

              <td class="product-quantity" data-cell="Quantity :">
                <div className="counter">
                    <span><RemoveCircleOutlineIcon/></span>
                  <span className="displayQty">2</span>
                <span><AddCircleOutlineIcon/></span>            
             
                </div>
                </td>

              <td class="product-subtotal" data-cell="Subtotal :">
                <span>$ {800.00}</span>
              </td>
              <td class="product-remove" ><HighlightOffIcon/></td>
            </tr>
          </tbody>

        </table>
       
      <table className='cartTotal'>
        <thead><th>Cart Total</th></thead>
        <tbody>
          <tr className='subTotal'>
             <span className="dataTitle">Subtotal</span>
             <span className="Sprice">${3000}</span></tr>
          <tr className='discount'><span className="disc">Discount :</span> 10%</tr>
          <tr className="Tprice"> <span>Total</span><span className="TotalPrice">${2300}</span></tr>
          <div className="applyCoupon">Apply Coupon</div>
        <button>Proceed to Checkout</button>
        </tbody>
      </table>
    </div>
  );
}
