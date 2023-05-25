export const initialWishList = {
  backendWishList: [],
};

const wishReducerFunction = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ALLWISHLIST":
      return { ...state, wishlist: payload };
    default:
      console.log("something is wrong in wishlist reducer funtion");
      break;
  }
};
