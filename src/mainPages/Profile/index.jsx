import { NavLink,Outlet, } from "react-router-dom";
import './profile.css'


export default function Profile() {
  return (
    <><div className="profile">
      {/* <img src="\assets\model5.jpg" alt="" width="50px"/> want to add small photo of user*/}
      <div className="profileContainer">
        <nav>
        <NavLink to=''>user</NavLink>
        <NavLink to="/profile/address">Address</NavLink>
        <NavLink to="/profile/orders">Orders</NavLink>
       
        </nav>
       <div className="displayPages">
          <Outlet/>
        </div>
      </div>
    </div>

    </>
  );
}
