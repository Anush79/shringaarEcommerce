import { createContext, useReducer, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import {useNavigate, useLocation} from 'react-router-dom'
import {
  initialWishList,
  wishReducerFunction,
} from "../allReducers/wishReducer";
import {
  getWishList,
  removeFromWishList,
  addToWishList,
} from "../services/shopingService/wishlistService";

import { useAuth } from "../";
export const WishContext = createContext();

export function WishProvider({ children }) {
  const [wishList, setWishList] = useReducer(
    wishReducerFunction,
    initialWishList
  );
  const navigate = useNavigate()
  const location = useLocation()
  const { token } = useAuth();

  const getWishListData = async () => {
    try {
      const response = await getWishList(token);
      const {
        status,
        data: { wishlist },
      } = response;

      if (status === 200) {
        setWishList({ type: "ALLWISHLIST", payload: wishlist });
      }
    } catch (error) {
      console.log(error);
    } 
  };
  const addWishListData = async (product) => {
    try {
      if (!token){
        navigate('/login', {state:{from :location}})
        toast.warn("You need to login first", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });}
      else {
        const response = await addToWishList(product, token);
        const {
          status,
          data: { wishlist },
        } = response;

        if (status === 201) {
          setWishList({ type: "ADDTOWISH", payload: wishlist });
          toast.success("Product added to wishlist", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("You need to login first", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate('/login', {state:{from :location}})
    } 
  };
  const deleteWishListData = async (productId) => {
    try {
      const response = await removeFromWishList(productId, token);
      const {
        status,
        data: { wishlist },
      } = response;

      if (status === 200) {
        setWishList({ type: "DELETEWISH", payload: wishlist });
        toast.warn("Product Deleted from wishlist", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Product could not be found", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const isAvailableInWishList = (id)=>{
    return wishList?.backendWishList.findIndex(item=>item._id===id)
  }

  useEffect(() => {
    if(token)
    getWishListData();
  }, [token]);
  return (
    <WishContext.Provider
      value={{
        wishList,
        wishlistCount: wishList.backendWishList.length,
        addWishListData,
        deleteWishListData,
        isAvailableInWishList
      }}
    >
      {children}
    </WishContext.Provider>
  );
}

export const useWish = () => {
  return useContext(WishContext);
};
