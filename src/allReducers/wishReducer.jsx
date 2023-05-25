export const initialWishList = {
  backendWishList: [],
  loading:true
};

export const wishReducerFunction = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ALLWISHLIST":
      return ({ loading:false,backendWishList: payload });
    case "ADDTOWISH": 
    
    return ({
      loading:false,
      backendWishList: payload

    })
    case "DELETEWISH":
      return ({
        loading:false, 
        backendWishList: payload
      })
    default:
      console.log("something is wrong in wishlist reducer funtion");
      break;
  }
};
