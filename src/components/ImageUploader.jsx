import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ImageUploader = ({
  setIsOpenForm,
  newUserData,
  setNewUserData,
  currentUser,
  setCurrentUser,
}) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageSrc = e.target.result;
      setNewUserData((newUserData) => ({
        ...newUserData,
        selectedImage: imageSrc,
      }));
      localStorage.setItem("selectedImage", imageSrc);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleInput = (e) => {
    const input = e.target.value;
    const prop = e.target.name;
    if (e.target.type === "checkbox") {
      setNewUserData({ ...newUserData, [prop]: e.target.checked });
    } else setNewUserData({ ...newUserData, [prop]: input });
  };

  return (
    <div className="formBox overlay">
      <div className="formValue">
        <div
          className="closeForm"
          onClick={() => {
            setIsOpenForm(false);
          }}
        >
          <HighlightOffIcon />
        </div>
        <label htmlFor="dp">Upload new image: </label>
        <input
          type="file"
          accept="image/*"
          id="dp"
          name="selectedImage"
          onChange={handleImageUpload}
        />
        <label for="fname">First name:</label>
        <input
          type="text"
          id="fname"
          value={currentUser.firstName}
          title="You cannot change this now"
          name="fname"
          disabled
        />
        <label for="lname">Last name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={currentUser.lastName}
          title="You cannot change this now"
          disabled
        />
        <label for="emailId">Email:</label>
        <input
          type="text"
          id="emailId"
          name="lname"
          value={currentUser.email}
          title="You cannot change this now"
          disabled
        />
        <label htmlFor="mobileP"> </label>
        Enter your Mobile Number:
        <input
          type="number"
          name="mobile"
          id="mobileP"
          placeholder="Mobile Number"
          onChange={handleInput}
        />
        <label>
          Gender :
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              onChange={handleInput}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              onChange={handleInput}
            />
            Female
          </label>
        </label>
        <button
          onClick={() => {
            setIsOpenForm(false);

            setCurrentUser({ ...currentUser, ...newUserData });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
