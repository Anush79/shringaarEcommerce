
export const initialWishList = {
  backendWishList: [],
  loading:true
};
 const uniqueArrayOfObjects = (array)=>array.reduce((acc, current) => {
  const exists = acc.some(obj =>
    obj._id === current._id
  );
  if (!exists) {
    acc.push(current);
  }
  return acc;
}, []);


export const wishReducerFunction = (state, action) => {
  
  const { type, payload } = action;

  switch (type) {
    case "ALLWISHLIST":
      return ({ loading:false,backendWishList: payload });
    case "ADDTOWISH": 
      const newArrayofObj= uniqueArrayOfObjects(payload)
    return ({
      loading:false,
      backendWishList: newArrayofObj
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
