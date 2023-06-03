import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useAddress } from "../../../";
import Address from '../../Profile/components/Address'
import EmptyCart from "../../../components/EmptyCart";


export default function CheckoutDetails() {
 const {address}= useAddress() 
 const [selectedAddress, setSelectedAddress]= useState(address[0])
  const { cartManager } = useCart();


  return (
    <div className="checkout">
      {
        cartManager?.cartData.length>0?
        <FilledCart cartArray= {cartManager} selectedAddress={selectedAddress}setSelectedAddress={setSelectedAddress}/>:
        <EmptyCart/>
      }
      
    </div>
  );
}


const FilledCart = ({cartArray:{cartData, loading}, setSelectedAddress,selectedAddress}) => {

  const navigate = useNavigate()
  const { id, fullName, mobile, building, streetName, town, districtName, pincode, state, home, work } = selectedAddress
  return (
    <div className="filledCart">
      <div className="cutomerDetails">

        <h5>Deliver to</h5>
        <Address isPresentinCheckout={true} setSelectedAddress={setSelectedAddress}/>
        <div className="cartProductBox">
          <h5>Your Order Summary</h5>
          <div className="header">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
            {cartData.map((item) =>{
            return(
              <div className="productCartCard">
                <span>
                  <img src={item.product_image} alt="" srcset="" width="70px" />
                  <span>
                    {item.product_name}x{item.qty}
                  </span>
                </span>
                <span>${item.product_price}</span>
              </div>
            )})}
          </div>
      </div>
      <div className="orderDetails">
      
        <div className="orderBox">
       
         
         
          <div className="totals">
            <h5>Price details</h5>
            <span className="totalPrice">
              <span>SubTotal</span>
              <span>$ {2345}</span>
            </span>
            <span className="totalDiscount">
              <span>Discount</span>
              <span>$ {250}</span>
            </span>

            <span className="deliveryCharges">
              <span>Delivery Charges</span>
              <span>$ { 1}</span>
            </span>
            <span className="grandTotal">
              <span>Grand Total</span>
              <span>$7979</span>
            </span>
          </div>
          <div className="addressShow">
            <h5>Will be delivered to</h5>
            <div className="addressText">
              <p className="addType">
                <small>{home ? "Home" : work ? "Work" : null}</small>
              </p>
              <p>
                <b>
                  {fullName}
                  <span style={{ width: "20px" }}> ... </span>
                  {mobile}
                </b>
              </p>
              <p>House Number: {building}</p>
              <p>{streetName}</p>
              <p>
                {town},{districtName}
              </p>
              <p>
                {state} - <b>{pincode}</b>
              </p>
            </div>
          </div>
          <div className="choosePayment">
           <h5> Choose Payment mode</h5>
            <label htmlFor="online"><input type="radio" name="payment" id="online" />Online</label>
            <label htmlFor="cashOnDelivery"><input type="radio" name="payment" id="cashOnDelivery" />Cash On Delivery</label>
          </div>


          <button onClick={()=>{navigate('/cart/completedorders')}}>Place Order</button>
        </div>
      </div>
    </div>
  );
};
