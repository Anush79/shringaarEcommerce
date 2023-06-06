import { useAuth, useCart, useWish } from "../../../";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export default function User() {
  const { logOutHandler, currentUser } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWish();

  return (
    <>
      <div className="userProfileDetails">
        <h3>{currentUser.firstName} Profile</h3>
        <div className="userDetails">
          <img src="\assets\model5.jpg" alt="" srcset="" />
          <div>
            <p className="info">
              {" "}
              <span className="heading">Name : </span>
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p className="info">
              <span className="heading">Gender : </span>Female
            </p>
            <p className="info">
              {" "}
              <span className="heading">Email Address: </span>
              {currentUser.email}
            </p>
            <p className="info">
              {" "}
              <span className="heading">Mobile : </span>
              +91 9000000009
            </p>
            <p className="info">
              <span className="heading">Total Items in Cart: </span>
              {cartCount}
            </p>
            <p className="info">
              <span className="heading">Total Items in WishList: </span>
              {wishlistCount}
            </p>
            <button class="logOutBtn" onClick={logOutHandler}>
              <LogoutRoundedIcon /> Log Out{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
