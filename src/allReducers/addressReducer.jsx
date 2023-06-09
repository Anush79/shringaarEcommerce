import { v4 as uuid } from "uuid";
export const initialAddressData=
[
  {
    id: uuid(),
    fullName: "JS Kumari",
    mobile: "+91 91111111110",
    building: "B33",
    streetName: "Street 332",
    town: "TypeScript",
    districtName: "Doodle District",
    pincode: "530005",
    state: "United State of Programming",
    home: false,
    work: true,
  },
]
export const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADDRESSADD":
      return [...state, action.payload];
    case "DELETEADD":
      const newArray = state.filter((item) => item.id !== action.payload);
      return newArray;
    case "EDITADD": 
    const uniqueAddresses =  state.map((item)=>
      item.id === action.payload.id ? action.payload : item)
      return uniqueAddresses;
    default:
      console.log("something is wrong in reducer");
      break;
  }
 
};
