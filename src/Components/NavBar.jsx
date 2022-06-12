import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar" className="bg-slate-300 h-9 m-0 p-0">
      <nav className="flex justify-center w-full">
        <NavLink
          className="px-8 py-1 h-9 font-bold hover:bg-slate-700 hover:text-white"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="px-8 py-1 h-9 font-bold hover:bg-slate-700 hover:text-white"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          className="px-8 py-1 h-9 font-bold hover:bg-slate-700 hover:text-white"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
