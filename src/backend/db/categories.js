import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "necklace",
    thumbnail: "assetscategoryIcon\necklace.png",
  },
  {
    _id: uuid(),
    categoryName: "bracelet",
    thumbnail: "assetscategoryIcon\bracelet.png",
  },
  {
    _id: uuid(),
    categoryName: "ring",
    thumbnail: "assetscategoryIcon\ring.png",
  },
  {
    _id: uuid(),
    categoryName: "earring",
    thumbnail: "assetscategoryIcon\earring.png"
  }
];
