import { useState } from "react";

import { useAddress } from "../../../";
import UpdateAddress from "../../../components/UpdateAdd";
import AddressCard from "../../../components/AddressCard";
export default function Address({ isPresentinCheckout, setSelectedAddress }) {
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
      {address.map((item) => {
        return isPresentinCheckout ? (
          <label htmlFor="">
            <input
              type="radio"
              name="setAddress"
              onChange={() => {
                setSelectedAddress(item);
              }}
            />
            <AddressCard
              addObj={item}
              addressDispatch={addressDispatch}
              isEditClicked={isEditClicked}
              setIsEditClicked={setIsEditClicked}
              handleEdit={handleEdit}
            />
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
