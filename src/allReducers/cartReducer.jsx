export const initialCartData = {
  cartData: [],
  orderPlaced:[],
  loading: true,
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DISPLAYCART":
      return {...state,  loading: false, cartData: payload };
    case "ADDTOCART":
      return {...state,  loading: false, cartData: payload };
    case "DELETEFROMCART":
      return {...state,  loading: false, cartData: payload };
    case "INCREASEQUANT":
      return {...state,  loading: false, cartData: payload };
    case "DECREASEQUANT":
      return { ...state, loading: false, cartData: payload };
    case "ORDERPLACED":
      return {loading:false, orderPlaced: [...state.orderPlaced, payload]};
    default:
      console.log("something is wrong in cart reducer");
      return state;
  }
};
