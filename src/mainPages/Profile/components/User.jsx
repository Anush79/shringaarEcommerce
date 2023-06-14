import { useState, useEffect } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useAuth, useCart, useWish } from "../../../";
import ImageUploader from "../../../components/ImageUploader";
export default function User() {
  const { logOutHandler, currentUser, setCurrentUser } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWish();
  const [newUserData, setNewUserData] = useState({
    gender: currentUser?.gender,
    mobile: currentUser?.mobile,
    selectedImage: null,
  });
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    const imageSrc = localStorage.getItem("selectedImage");
    if (imageSrc) {
      setNewUserData((newUserData) => ({
        ...newUserData,
        selectedImage: imageSrc,
      }));
    }
  }, []);
  return (
    <>
      <div className="userProfileDetails">
        <h3>{currentUser.firstName} Profile</h3>
        <div className="userDetails">
          {newUserData.selectedImage ? (
            <img src={newUserData.selectedImage} alt="" />
          ) : (
            <img
              src="\assets\model5.jpg"
              alt="default photo"
              srcset=""
              width={"300px"}
            />
          )}
          <div>
            <p className="info">
              {" "}
              <span className="heading">Name : </span>
              {currentUser.firstName} {currentUser.lastName}
            </p>
            {newUserData.gender && (
              <p className="info">
                <span className="heading">Gender : </span>
                {currentUser.gender}
              </p>
            )}
            <p className="info">
              {" "}
              <span className="heading">Email Address: </span>
              {currentUser.email}
            </p>
            {newUserData.mobile && (
              <p className="info">
                {" "}
                <span className="heading">Mobile : </span>
                {currentUser.mobile}
              </p>
            )}
            <p className="info">
              <span className="heading">Total Items in Cart: </span>
              {cartCount}
            </p>
            <p className="info">
              <span className="heading">Total Items in WishList: </span>
              {wishlistCount}
            </p>
            <div class="profileButtons">
              <button
                onClick={() => {
                  setIsOpenForm(!isOpenForm);
                }}
              >
                Edit Profile
              </button>
              <button class="logOutBtn" onClick={logOutHandler}>
                <LogoutRoundedIcon /> Log Out{" "}
              </button>
            </div>
          </div>
        </div>
        {isOpenForm ? (
          <ImageUploader
            setIsOpenForm={setIsOpenForm}
            newUserData={newUserData}
            setNewUserData={setNewUserData}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        ) : null}
      </div>
    </>
  );
}
