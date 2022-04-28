import React from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

const Sidebar = (props) => {
  const { sidebar, toggleSidebar } = props;
  return (
    <div className={sidebar ? "sidebar open" : "sidebar"}>
      <li>
        <Link to="/about" onClick={toggleSidebar}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={toggleSidebar}>
          Contact
        </Link>
      </li>
    </div>
  );
};

export default Sidebar;
