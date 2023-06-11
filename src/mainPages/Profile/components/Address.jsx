import { useState } from "react";

import { useAddress } from "../../../";
import UpdateAddress from "../../../components/UpdateAdd";
import AddressCard from "../../../components/AddressCard";
export default function Address({ isPresentinCheckout, setSelectedAddress ,id}) {
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const { address, handleEdit, addressDispatch } = useAddress();

  return (
    <div className="address">
      <div
        className="addAddress"
        onClick={() => {
          handleEdit(123, false);
          setIsAddClicked(!isAddClicked);
        }}
      >
        <span className="plus">+</span>
        Add New Address
      </div>
      {address.length<1? <h6>Please Add atleast one Address</h6>:
      address.map((item) => {
        return isPresentinCheckout ? (
          <label htmlFor="" class="checkoutLabel">
            <input
              type="radio"
              name="setAddress"
              onChange={() => {
                setSelectedAddress(item);
              }}
            />
            <div>
              <AddressCard
              addObj={item}
              addressDispatch={addressDispatch}
              isEditClicked={isEditClicked}
              setIsEditClicked={setIsEditClicked}
              handleEdit={handleEdit}
              isPresentinCheckout
            />
            </div>
            
          </label>
        ) : (
          <AddressCard
            addObj={item}
            addressDispatch={addressDispatch}
            isEditClicked={isEditClicked}
            setIsEditClicked={setIsEditClicked}
            handleEdit={handleEdit}
          />
        );
      })}
      {isAddClicked || isEditClicked ? (
        <div className="overlay">
          <UpdateAddress
            clickF={setIsAddClicked}
            isEditClicked={isEditClicked}
            setIsEditClicked={setIsEditClicked}
          />
        </div>
      ) : null}
    </div>
  );
}
