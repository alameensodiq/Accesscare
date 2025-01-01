import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logocare.png"; // Import logo image

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Get Involved", path: "/getinvolved" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-8" // Adjust height of the logo
          />
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "hover:text-blue-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Donate Button */}
        <div>
          <a
            href="#donate"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
