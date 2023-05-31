import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    "_id": "24f9d283-15d9-40b7-a389-7b335d3696b4",
    "email": "anushka3232@gmail.com",
    "password": "aosuhis",
    "createdAt": "2023-05-20T08:10:47+05:30",
    "updatedAt": "2023-05-20T08:10:47+05:30",
  }
];
