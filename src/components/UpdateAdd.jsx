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
      setAddressState(()=>({ ...addressState, [prop]: e.target.checked }));
    } else setAddressState(()=>({ ...addressState, [prop]: input }));
  };

  return (
    <>
      <div className="addFormBox">
        <form className="addressForm" action="">
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
              value={addressState.fullName}
              onChange={handleAddressInput}
            />
            <label htmlFor="fullName"> Full Name</label>
          </div>
          <div className="buildingAdd">
            <input
              type="text"
              name="building"
              id="building"
              value={addressState.building}
              onChange={handleAddressInput}
            />

            <label htmlFor="building">Building </label>
          </div>
          <div className="streetAdd">
            <input
              type="text"
              name="streetName"
              id="streetName"
              required
              value={addressState.streetName}
              onChange={handleAddressInput}
            />
            <label htmlFor="streetName">Street Name</label>
          </div>
          <div className="cityAdd">
            <input
              type="text"
              name="town"
              id="town"
              required
              value={addressState.town}
              onChange={handleAddressInput}
            />
            <label htmlFor="town">City Name</label>
          </div>
          <div className="cityAdd">
            <input
              type="text"
              name="districtName"
              id="districtName"
              required
              value={addressState.districtName}
              onChange={handleAddressInput}
            />
            <label htmlFor="districtName">District Name</label>
          </div>
          <div className="stateAdd">
            <input
              type="text"
              name="state"
              id="state"
              required
              value={addressState.state}
              onChange={handleAddressInput}
            />
            <label htmlFor="state">State </label>
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
              value={addressState.pincode}
              onChange={handleAddressInput}
            />
            <label htmlFor="pincode">Pincode </label>
          </div>
          <div className="mobileAdd">
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={addressState.mobile}
              required
              onChange={handleAddressInput}
            />
            <label htmlFor="mobile">Mobile </label>
          </div>

          <div className="addTypeAdd">
            
            <label htmlFor="home">
              {" "}
              <input
                type="radio"
                name="addType"
                id=""
                checked={addressState.home}
                onChange={handleAddressInput}
              />
              Home{" "}
            </label>
            <label htmlFor="work">
              <input
                type="radio"
                name="addType"
                id="home"
                checked={addressState.work}
                onChange={handleAddressInput}
              />
              Work{" "}
            </label>
            Address Type
          </div>
<div className="buttons">


          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if(!isEditClicked)
              addressDispatch({ type: "ADDRESSADD", payload: addressState });
              else if(isEditClicked)
              addressDispatch({ type: "EDITADD", payload: addressState });

              clickF(false);
              if (isEditClicked) setIsEditClicked(false);
            }}
          >
            Submit
          </button>
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
