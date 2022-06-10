import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar" className="bg-slate-300 h-9 w-100">
      <nav className="flex justify-center">
        <NavLink className="px-8 py-1" to="/">
          Home
        </NavLink>
        <NavLink className="px-8 py-1" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="px-8 py-1" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
