import axios from "axios";

export const getWishList = async (encodedToken) =>
  await axios.get("/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });

export const addToWishList = async (product, encodedToken) =>
  await axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: encodedToken } }
  );

export const removeFromWishList = async (productId, encodedToken) =>
  await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
