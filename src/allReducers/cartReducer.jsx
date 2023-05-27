export const initialCartData = {
  cartData: [],
  loading: true,
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "DISPLAYCART":
      return { loading: false, cartData: payload };
    case "ADDTOCART":
      return { loading: false, cartData: payload };
    case "DELETEFROMCART":
      return { loading: false, cartData: payload };
    case "INCREASEQUANT":
      return { loading: false, cartData: payload };
    case "DECREASEQUANT":
      return { loading: false, cartData: payload };
    default:
      console.log("something is wrong in cart reducer");
      return state;
  }
};
