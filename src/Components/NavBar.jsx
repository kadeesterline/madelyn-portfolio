import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar" className="bg-slate-300 h-9 w-100">
      <nav className="flex justify-end">
        <NavLink className="px-2 py-1/2" to="/">
          Home
        </NavLink>
        <NavLink className="px-2 py-1/2" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="px-2 py-1/2" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
