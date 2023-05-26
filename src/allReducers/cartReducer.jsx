

export const initialCartData= {
  cartData:[],
  loading: true
}

export const cartReducer =(state, action)=>{
const {type, payload} = action;
  switch(action.type){
    case "ADDTOCART":

      return ({loading: false, cartData:payload})

      return({});
      case "DELETEFROMCART":
      
      return({});
      case "INCREASEQUANT":
      
      return({});
      case "DECREASEQUANT":
      
      return({});
  default:
      console.log("something is wrong in cart reducer");
      break;
  }
}



