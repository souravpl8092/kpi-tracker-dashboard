import React from "react";
import { PiCirclesFour } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineImageSearch } from "react-icons/md";
import "../App.css";

const Sidebar = () => (
  <div className="sidebar">
    <img src="/logo.png" alt="Logo" style={{ width: "200px" }} />
    <ul>
      <li className="active">
        <PiCirclesFour /> Dashboard
      </li>
      <li>
        <RiComputerLine /> Camera View
      </li>
      <li>
        <MdOutlineImageSearch /> Event Log
      </li>
    </ul>
  </div>
);
export default Sidebar;
