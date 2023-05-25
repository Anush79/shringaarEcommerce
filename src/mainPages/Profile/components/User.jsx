
import {useAuth} from '../../../'


export default function User() {

  const {logOutHandler}= useAuth()
  return (
    <div className="userDetails">
      <img src="\assets\model5.jpg" alt="" srcset="" />
      <div>
          <p className="info">
        {" "}
        <span className="heading">Name : </span>Anushka Jaiswal
      </p>
      <p className="info">
        <span className="heading">Gender : </span>Female
      </p>
      <p className="info">
        {" "}
        <span className="heading">Email Address: </span>anushka123@gmail.com
      </p>
      <p className="info">
        {" "}
        <span className="heading">Mobile : </span>
        +91 9833322992
      </p>
      </div>
    <button onClick={logOutHandler}>log out</button>
    </div>
  );
}
