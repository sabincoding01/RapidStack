import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Droplets, Dumbbell, Lightbulb } from "lucide-react";

const NavBar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 py-2 text-gray-900 transition duration-300 ${
      isActive ? "text-green-500 font-semibold" : "hover:text-green-500"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 py-2.5 shadow-sm">
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto relative">
        {/* Left Side - Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            alt="Logo"
            className="h-6 w-6 sm:h-9 sm:w-9"
          />
          <span className="text-xl font-semibold text-gray-900">Landwind</span>
        </NavLink>

        {/* Center - NavLinks */}
        <ul className="flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <NavLink to="/" className={linkStyle}>
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/water" className={linkStyle}>
              <Droplets size={18} />
              WaterIntake
            </NavLink>
          </li>
          <li>
            <NavLink to="/exercise" className={linkStyle}>
              <Dumbbell size={18} />
              Exercise
            </NavLink>
          </li>
          <li>
            <NavLink to="/tips" className={linkStyle}>
              <Lightbulb size={18} />
              Tips
            </NavLink>
          </li>
        </ul>

        {/* Right Side - ID + Logout */}
        <div className="flex items-center gap-4">
          <span className="text-gray-900 font-medium">ID: 12345</span>
          <button className="bg-green-400 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-green-500 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
