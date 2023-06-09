import { createContext, useContext, useState, useReducer } from "react";

import { v4 as uuid } from "uuid";
import {initialAddressData, reducer} from '../allReducers/addressReducer';


export const AddressContext = createContext();


export const AddressProvider = ({ children }) => {
  const [address, addressDispatch] = useReducer(reducer,initialAddressData);
  const dummyAddress = {
    id: uuid(),
    fullName: "Dummy Malhotra",
    mobile: "+91 9998886661",
    building: "A43",
    streetName: "Street 332",
    town: "New Town",
    districtName: "Dummy District",
    pincode: "400005",
    state: "Use State of React",
    home: true,
    work: false,
  };
  const [addressState, setAddressState] = useState({
    id: uuid(),
    fullName: null,
    mobile: null,
    building: null,
    streetName: null,
    town: null,
    districtName: null,
    pincode: null,
    state: null,
    home: false,
    work: false,
  });

  const handleEdit = (id, isEditClicked) => {

    const addressToEdit = address.find((item) => item.id === id);
     if(isEditClicked){
    setAddressState(addressToEdit);
  }
    else
   { setAddressState(initialAddressData);
    
}
     
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        addressState,
        dummyAddress,
        setAddressState,
        addressDispatch,
        handleEdit,
        initialAddressData
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
export const useAddress = () => useContext(AddressContext);
