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
    <footer>
      {/* First Section */}
      <div className="bg-[#FAFAFA] py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Title and Description */}
          <div>
            <h3 className="text-2xl font-semibold text-[#11112D] mb-2">
              Sign up for our newsletter
            </h3>
            <p className="text-[#43474F] text-base">
              Be the first to know about any updates, industry news, and insights.
            </p>
          </div>

          {/* Newsletter Form */}
          <div>
            <form className="flex flex-col gap-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-3 border rounded-full border-[#D0D5DD] focus:outline-none focus:ring-1 focus:ring-[#22E27F]"
                />
                <button
                  type="submit"
                  className="bg-[#22E27F] text-black px-6 py-2 ml-3 rounded-full hover:bg-[#1AD67E] transition duration-300"
                >
                  Subscribe
                </button>
              </div>
              {/* Consent Checkbox */}
              <label className="flex items-start gap-2 text-[#43474F] text-sm">
                <input
                  type="checkbox"
                  className="mt-1 border-gray-300 focus:ring-[#22E27F]"
                />
                <span>
                  I consent to the use of my information as outlined in the{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#22E27F] hover:text-[#1AD67E] transition duration-300"
                  >
                    Privacy Policy
                  </a>.
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#F6FEFA]">
        <div className="container mx-auto px-4 py-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1: Logo, Number, and Email */}
            <div>

              <img
                src={Logo}
                alt="Logo"
                className="h-20 mb-4"
              />
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-4">
              <ul className="flex flex-wrap gap-4">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-[#11112D] hover:text-[#22E27F] transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-6 items-center">
                <p className=" text-[#0A142F] text-lg font-normal">
                  {footerData.contact.phone}
                </p>
                <p className="text-[#0A142F] text-base font-normal">
                  {footerData.contact.email}
                </p>
              </div>


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
      </div>
    </footer>

  );
};

export default Footer;
