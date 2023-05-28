import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "necklace",
    thumbnail: "/assets/categoryIcon/necklace.png",
  },
  {
    _id: uuid(),
    categoryName: "bracelet",
    thumbnail: "/assets/categoryIcon/bracelet.png",
  },
  {
    _id: uuid(),
    categoryName: "ring",
    thumbnail: "/assets/categoryIcon/ring.png",
  },
  {
    _id: uuid(),
    categoryName: "earring",
    thumbnail: "/assets/categoryIcon/earring.png"
  }
];
