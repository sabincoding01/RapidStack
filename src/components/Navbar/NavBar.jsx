import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { LayoutDashboard, Droplets, Dumbbell, Lightbulb } from "lucide-react";
import { MdQrCodeScanner } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate();
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 py-2 text-gray-900 transition duration-300 ${
      isActive ? "font-semibold" : ""
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 py-2.5 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl px-4 mx-auto relative">
        {/* Left Side - Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="src\assets\logo (1).png"
            alt="Logo"
            className="h-10 w-10 sm:h-12 sm:w-12"
          />
          <h2 className="text-yellow-100 text-xl font-semibold  tracking-tight flex flex-col ">
              <span className='text-green-500 text-2xl'>Eco-Vital </span>
              <span className='text-green-400'>HealthCare</span>
            </h2>
        </NavLink>

        {/* Center - NavLinks */}
        <ul className="flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <NavLink
              to="/"
              className={linkStyle}
              style={({ isActive }) => ({
                color: isActive ? "#238b45" : undefined,
              })}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/water"
              className={linkStyle}
              style={({ isActive }) => ({
                color: isActive ? "#238b45" : undefined,
              })}
            >
              <Droplets size={18} />
              WaterIntake
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exercise"
              className={linkStyle}
              style={({ isActive }) => ({
                color: isActive ? "#238b45" : undefined,
              })}
            >
              <Dumbbell size={18} />
              Exercise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tips"
              className={linkStyle}
              style={({ isActive }) => ({
                color: isActive ? "#238b45" : undefined,
              })}
            >
              <Lightbulb size={18} />
              Tips
            </NavLink>
          </li>
        </ul>


        <button
      onClick={() => navigate('/scanner')}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-indigo-600 
                 hover:bg-indigo-700 text-white rounded-full shadow-lg 
                 hover:scale-110 active:scale-95 transition-all duration-200
                 flex items-center justify-center group"
    >
      <MdQrCodeScanner className="text-2xl group-hover:rotate-12 transition-transform" />

      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs 
                        px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 
                        transition-opacity whitespace-nowrap">
        Scan QR / Barcode
      </span>

      {/* Pulse ring */}
      <span className="absolute w-full h-full rounded-full border-2 
                        border-indigo-400 animate-ping opacity-30" />
    </button>

        {/* Right Side - ID + Logout */}
        <div className="flex items-center gap-4">
          <span className="text-gray-900 font-medium">ID: 12345</span>
          <button
            className="text-white font-medium rounded-lg text-sm px-4 py-2 transition"
            style={{ backgroundColor: "#238b45" }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
