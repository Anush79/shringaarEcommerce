import { useState } from "react";

import { useCart, useAddress, useAuth } from "../../../";

import EmptyCart from "../../../components/EmptyCart";
import FilledCart from "../../../components/FilledCart";

export default function CheckoutDetails() {
  const { address } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState({
    id: null,
    fullName: "",
    mobile: "",
    building: "",
    streetName: "",
    town: "",
    districtName: "",
    pincode: "",
    state: "",
    home: "",
    work: "",
  });
  const [paymentSelected, setPaymentSelected] = useState(null);
  const {
    cartManager,
    totalPrice,
    totalDiscount,
    deleteFromCartFunction,
    addItemstoOrdersPlaced,
  } = useCart();
  const { token } = useAuth();

  return (
    <div className="checkout">
      {cartManager?.cartData.length > 0 ? (
        <FilledCart
          token={token}
          deleteFromCartFunction={deleteFromCartFunction}
          cartArray={cartManager}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          setPaymentSelected={setPaymentSelected}
          paymentSelected={paymentSelected}
          addItemstoOrdersPlaced={addItemstoOrdersPlaced}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

