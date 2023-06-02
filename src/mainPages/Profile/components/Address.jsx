import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAddress } from "../../../";
import UpdateAddress from "../../../components/UpdateAdd";

export default function Address() {
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const { address, handleEdit, addressDispatch } = useAddress();

  return (
    <div className="address">
      <div
        className="addAddress"
        onClick={() => {
          handleEdit(123, false)
          setIsAddClicked(!isAddClicked);
        }}
      >
        <span className="plus">+</span>
        Add New Address
      </div>
      {address.map((item) => (
        <AddressCard
          addObj={item}
          addressDispatch={addressDispatch}
          isEditClicked={isEditClicked}
          setIsEditClicked={setIsEditClicked}
          handleEdit={handleEdit}
        />
      ))}
      {isAddClicked || isEditClicked  ? (
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

const AddressCard = ({
  addObj,
  handleEdit,
  isEditClicked,
  setIsEditClicked,
  addressDispatch,

}) => {
  const {
    id,
    fullName,
    home,
    work,
    streetName,
    mobile,
    building,
    town,
    districtName,
    pincode,
    state,
  } = addObj;
  return (
    <div key={id} className="addressContainer">
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
      <div className="buttons">
        <button
          onClick={() => {
            handleEdit(id, true)            
            setIsEditClicked(()=>true);
            console.log(isEditClicked, "from address edit button")
          }}
        >
          Edit <EditIcon />
        </button>
        <button
          onClick={() => {
            addressDispatch({ type: "DELETEADD", payload: id });
          }}
        >
          Delete <DeleteForeverIcon />
        </button>
      </div>
    </div>
  );
};
