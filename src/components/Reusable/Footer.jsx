import React from "react";
import Logo from "../../assets/img/logocare.png";
import facebook from "../../assets/icons/facebook.svg";
import linkdin from "../../assets/icons/Linkedin.svg";
import twitter from "../../assets/icons/Twitter.svg";

const footerData = {
  contact: {
    phone: "+1 (7635)  XXX XXX",
    email: "support@access.care",
  },
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Impact", path: "/impact" },
    { name: "Donate", path: "/donate" },
    { name: "News & Event", path: "/news-events" },
    { name: "Contact Us", path: "/contact" },
    { name: "Get Involved", path: "/get-involved" },
  ],
  socials: [
    { name: "LinkedIn", icon: linkdin, path: "#" },
    { name: "Facebook", icon: facebook, path: "#" },
    { name: "Twitter", icon: twitter, path: "#" },
  ],
  copyright: "© 2024 Access Care. All rights reserved.",
};

const Footer = () => {
  return (
    <footer className="bg-[#F6FEFA] py-8">
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
            <p className="mt-2 text-[#0A142F] text-lg font-medium">
              {footerData.contact.phone}
            </p>
            <p className="text-[#0A142F] text-base font-normal">
              {footerData.contact.email}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Quick Links</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-[#0A142F] text-base font-normal transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Column 3: Subscribe to Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-[#0A142F] mb-2">Subscribe to Newsletter</h3>
            <form className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-l-lg w-full focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="bg-[#45E99E] text-white px-4 py-2 rounded-r-lg hover:bg-[#45E99E] transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
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
                className="text-gray-600 hover:text-[#45E99E] transition duration-300"
                aria-label={social.name}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-6 w-6" // You can adjust the size
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-[#0A142F] font-normal text-base">{footerData.copyright}</div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
