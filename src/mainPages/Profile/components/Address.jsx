import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { v4 as uuid } from "uuid";
const addresses = [
  {
    id: uuid(),
    userName: 'Anushka Jaiswal',
    mobile: "9746472738",
    house: "A12",
    town: "RamNagar",
    district: "Madhubani",
    pincode: '543221',
    state: "Bihar",
    addressType: "home"
  },
  {
    id: uuid(),
    userName: 'Niharika Kesharwani',
    mobile: "6276736374",
    house: "N32",
    town: "Nasiknagar",
    district: "Punepur",
    pincode: '422013',
    state: "Maharashtra",
    addressType: "work"
  }
]


export default function Address() {
  return (
    <div className="address">
      <div className="addAddress">
        <span className="plus">+</span>
        Add New Address

      </div>
      {
        addresses.map(item => <AddressCard addObj={item} />)
      }
    </div>
  )
}

const AddressCard = ({ addObj }) => {
  const { userName, addressType, id, mobile, house, town, district, pincode, state } = addObj
  return <div key={id} className="addressContainer">
    <div className="addressText">
      <p className='addType'><small>{addressType}</small></p>
      <p><b>{userName}<span style={{ width: "20px" }}> ... </span>{mobile}</b></p>
      <p>House Number: {house}</p>
      <p>{town},{district}</p>
      <p>{state} - <b>{pincode}</b></p>
    </div>
    <div className="buttons">
      <button>Edit <EditIcon/></button>
      <button>Delete <DeleteForeverIcon/></button>
    </div>
  </div>
}