export const initialCartData= {
}

export const cartReducer =(state, action)=>{

  switch(action.type){
    case "ADDTOCART":

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



