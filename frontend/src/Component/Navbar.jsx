import React from "react";
import { NavLink } from "react-router-dom"; // Ensure this is installed: npm install react-router-dom
import logo from "../images/download.png";

export default function Navbar({ name = "User" }) {
  return (
    <header className="bg-blue-100 shadow rounded-lg p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <img src={logo} alt="Company Logo" className="rounded-full w-12 h-12" />
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex space-x-4 text-blue-700 font-semibold">
          <li>
            <NavLink to="/add" activeClassName="text-blue-900 underline" exact>
              Add
            </NavLink>
          </li>
          <li>
            <NavLink to="/alluser" activeClassName="text-blue-900 underline">
              All Users
            </NavLink>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}



