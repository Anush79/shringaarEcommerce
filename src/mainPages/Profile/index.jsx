import { NavLink,Outlet, Routes, Route } from "react-router-dom";
import './profile.css'
import Address from "./components/Address";
import Orders from "./components/Orders";
import User from "./components/User";

export default function Profile() {
  return (
    <><div className="profile">
      <h2>Profile page</h2>
      <div className="profileContainer">
        <NavLink to=''>user</NavLink>--||--
        <NavLink to="/profile/address">Address</NavLink>--||--
        <NavLink to="/profile/orders">Orders</NavLink>
        <div className="profilePages">
          <Outlet/>
        </div>
      </div>
    </div>

    </>
  );
}
