import axios from "axios";

export const getCartList = async (encodedToken) =>
  await axios.get("/api/user/cart", {
    headers: {
      authorization: encodedToken,
    },
  });

export const addToCart = async ( product, encodedToken ) =>
  await axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const incDecQuantity = async ( productId, encodedToken, type ) =>
  await axios.post(
    `/api/user/cart/${productId}`,
    {
      action: { type },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
export const deleteFromCart = async ( productId, encodedToken ) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
