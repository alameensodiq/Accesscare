import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logocare.png"; // Import logo image

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
  { name: "Get Involved", path: "/get-involved" }
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-12 w-full" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-[#45E99E] p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <ul className="bg-[#74747414] flex space-x-6  text-[#1D1D1D] px-5 py-2 rounded-full font-normal">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition duration-300 ${isActive
                      ? "text-[#22E27F] font-bold"
                      : "hover:text-[#22E27F]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate Button */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/donate"
            className="text-[#1d1d1d] border border-[#1D1D1D] px-4 py-2 rounded-lg hover: transition duration-300"
          >
            Donate
          </a>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-3/4 bg-white h-full p-4">
            <button onClick={toggleSidebar} className="text-[#1D1D1D] p-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-[#1D1D1D] text-xl font-normal block"
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar after clicking link
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="/donate"
                  className="text-[#1D1D1D] text-xl font-normal block"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar after clicking donate
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
