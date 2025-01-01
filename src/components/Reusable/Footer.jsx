import React from "react";
import Logo from "../../assets/img/logocare.png"; // Import logo image

const footerData = {
  contact: {
    phone: "+1 (234) 567-8901",
    email: "info@yourdomain.com",
  },
  quickLinks: [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Contact Us", path: "#contact" },
    { name: "Get Involved", path: "#getinvolved" },
  ],
  socials: [
    { name: "Facebook", icon: "F", path: "#" },
    { name: "Twitter", icon: "T", path: "#" },
    { name: "Instagram", icon: "I", path: "#" },
  ],
  copyright: "© 2024 Access Care. All rights reserved.",
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Logo, Number, and Email */}
          <div>
            {/* Logo */}
            <div>
              <img
                src={Logo}
                alt="Logo"
                className="h-12 mb-4" // Adjust height and add margin-bottom
              />
            </div>
            <p className="mt-2 text-gray-700">
              <strong>Phone:</strong> {footerData.contact.phone}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {footerData.contact.email}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Quick Links</h3>
            <ul className="flex flex-wrap space-x-4">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subscribe to Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Subscribe to Newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-lg flex-grow focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {footerData.socials.map((social, index) => (
              <a
                key={index}
                href={social.path}
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm">{footerData.copyright}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
