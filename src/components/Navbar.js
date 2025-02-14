import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import "../App.css";
const Navbar = () => (
  <div className="navbar">
    <h2>KPI Tracker</h2>
    <div className="user-profile">
      <img src="/profileImage.png" alt="User" className="profile-img" />
      <span>User</span>
      <FaChevronDown />
    </div>
  </div>
);
export default Navbar;
