import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs">Massages</NavLink>
      </div>
      <div className="item">
        <NavLink to="/new">News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className="item">
        <NavLink to="setting">Settings</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
