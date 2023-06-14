import { toast } from "react-toastify";
import { useAddress } from "../context/AddressContext";

export default function UpdateAddress({
  clickF,
  isEditClicked,
  setIsEditClicked,
}) {
  const { addressState, setAddressState, dummyAddress, addressDispatch } =
    useAddress();

  const handleAddressInput = (e) => {
    const input = e.target.value;
    let prop = e.target.id;

    if (e.target.type === "radio") {
      setAddressState(() => ({ ...addressState, [prop]: e.target.checked }));
    } else setAddressState(() => ({ ...addressState, [prop]: input }));
  };

  const handleAddressFormSubmit = (e) => {
    e.preventDefault();

    if (!isEditClicked) {
      addressDispatch({ type: "ADDRESSADD", payload: addressState });
      toast.success("New Address added successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else if (isEditClicked) {
      addressDispatch({ type: "EDITADD", payload: addressState });
      toast.success("Address Edited Successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    clickF(false);
    if (isEditClicked) setIsEditClicked(false);
  };

  return (
    <>
      <div className="addFormBox">
        <form className="addressForm" onSubmit={handleAddressFormSubmit}>
          <div
            className="closeAdd"
            onClick={() => {
              setIsEditClicked(false);
              clickF(false);
            }}
          >
            X
          </div>
          <div className="fullNameAdd">
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              placeholder="Full Name"
              value={addressState.fullName}
              onChange={handleAddressInput}
            />
          </div>
          <div className="buildingAdd">
            <input
              type="text"
              name="building"
              id="building"
              required
              placeholder="Building"
              value={addressState.building}
              onChange={handleAddressInput}
            />
          </div>
          <div className="streetAdd">
            <input
              type="text"
              name="streetName"
              id="streetName"
              required
              placeholder="Street Name"
              value={addressState.streetName}
              onChange={handleAddressInput}
            />
          </div>
          <div className="cityAdd">
            <input
              type="text"
              name="town"
              id="town"
              required
              placeholder="City Name"
              value={addressState.town}
              onChange={handleAddressInput}
            />
          </div>
          <div className="cityAdd">
            <input
              type="text"
              name="districtName"
              id="districtName"
              required
              value={addressState.districtName}
              placeholder="District Name"
              onChange={handleAddressInput}
            />
          </div>
          <div className="stateAdd">
            <input
              type="text"
              name="state"
              id="state"
              required
              value={addressState.state}
              placeholder="State"
              onChange={handleAddressInput}
            />
          </div>
          <div className="pinCodeAdd">
            <input
              type="number"
              size={6}
              min={100001}
              max={999999}
              name="pincode"
              id="pincode"
              required
              placeholder="Pincode"
              value={addressState.pincode}
              onChange={handleAddressInput}
            />
          </div>
          <div className="mobileAdd">
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={addressState.mobile}
              required
              placeholder="Mobile"
              onChange={handleAddressInput}
            />
          </div>

          <div className="addTypeAdd">
            Address Type
            <label htmlFor="home">
              {" "}
              <input
                type="radio"
                name="addType"
                id="home"
                checked={addressState.home}
                onChange={handleAddressInput}
              />
              Home{" "}
            </label>
            <label htmlFor="work">
              <input
                type="radio"
                name="addType"
                id="work"
                checked={addressState.work}
                onChange={handleAddressInput}
              />
              Work{" "}
            </label>
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setAddressState(dummyAddress);
              }}
            >
              Dummy Address
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
