
import {useAuth, useCart, useWish} from '../../../'

export default function User() {

  const {logOutHandler, currentUser}= useAuth()
  const {cartCount} = useCart()
  const {wishlistCount} = useWish()

  return (
    <div className="userDetails">
      <img src="\assets\model5.jpg" alt="" srcset="" />
      <div>
          <p className="info">
        {" "}
        <span className="heading">Name : </span>{currentUser.firstName  } {currentUser.lastName}
      </p>
      <p className="info">
        <span className="heading">Gender : </span>Female
      </p>
      <p className="info">
        {" "}
        <span className="heading">Email Address: </span>{currentUser.email}
      </p>
      <p className="info">
        {" "}
        <span className="heading">Mobile : </span>
        +91 9833322992
      </p>
      <p className="info">
      <span className="heading">Total Items in Cart: </span>
       {   cartCount}
      </p>
      <p className="info">
      <span className="heading">Total Items in WishList: </span>
       { wishlistCount}
      </p>
      
      </div>
      
    <button onClick={logOutHandler}>log out</button>
    </div>
  );
}
