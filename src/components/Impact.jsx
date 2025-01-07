import React from "react";
import backgroundImage from "../assets/img/volunteerimage.png";
import backgroundImageheader from "../assets/img/volunteerheader.png";
import curve from "../assets/icons/curvyline.svg"; // Example icon 1
import { Link } from "react-router-dom";

const Impact = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col pt-10 bg-[#F6FEFA]">
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-[#11112D] mb-1">
            Making a difference
          </h1>
          <h1 className="text-5xl font-bold text-[#11112D] mb-4">Together</h1>
          <img src={curve} alt="Icon 1" className="absolute top-0 right-0" />
        </div>
        <div className="flex flex-col items-center mt-16 relative">
          {/* Paragraph Section */}
          <p className="w-[90%] lg:w-[41%] md:w-[50%] text-center text-lg text-[#11112d] font-normal mb-8">
            At ACC Referral Foundation, our work directly impacts lives. We
            measure our success by the stories of hope and transformation that
            come from the communities we serve. Here are some highlights
          </p>
        </div>
      </div>
      <div className="px-5 lg:px-20">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%"
          }}
          className="flex flex-col lg:p-14 md:p-14 p-4 w-[100%] rounded-[20px] justify-between gap-20"
        >
          <span className="flex lg:ml-20 flex-row justify-start items-center font-bold text-white text-[30px] lg:text-[60px] md:text-[50px] sm:text-[30px]"></span>
          <div className="flex gap-5 justify-center lg:flex-row md:flex-row sm:flex-col flex-col w-[100%]">
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px] bg-[#FFCF4E] rounded-[30px] p-5">
              <span className="w-[50%] text-[#025788] text-[30px]">
                Patients Connected
              </span>
              <span className="text-[#025788] text-[15px] lg:w-[60%]">
                Thousands of underserved individuals have been matched with the
                healthcare providers they need.
              </span>
            </div>
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px]  bg-transparent border-[3px]  rounded-[30px] p-5">
              <span className="w-[90%] text-[#FFFFFF] text-[30px]">
                Communities Empowered
              </span>
              <span className="text-[#FFFFFF] text-[15px] lg:w-[70%]">
                Our outreach programs have reached over 10,000 people, providing
                them with knowledge to take control of their health.
              </span>
            </div>
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px] bg-transparent border-[3px] rounded-[30px] p-5">
              <span className="w-[90%] text-[#FFFFFF] text-[30px]">
                Healthcare Providers Supported
              </span>
              <span className="text-[#FFFFFF] text-[15px] lg::w-[60%]">
                We’ve built a network of dedicated providers who share our
                mission of equitable care.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E4FFF2] flex flex-col pt-10">
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-[#11112D] mb-4">
            Your Role in Our Impact
          </h1>
        </div>
        <div className="flex flex-col items-center mt-16 relative">
          {/* Paragraph Section */}
          <p className="w-[90%] lg:w-[61%] md:w-[50%] text-center text-lg text-[#11112d] font-normal mb-8">
            Every donation, volunteer effort, and partnership amplifies our
            ability to create lasting change. Join us in making healthcare
            accessible for all.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-4 sm:flex-row gap-4">
          {/* Link to /donate */}
          <Link
            to="/"
            className="text-black text-base bg-[#22E27F] px-6 py-3 rounded-full"
          >
            Get Started
          </Link>
          {/* Link to /volunteer */}
          <Link
            to="/volunteer"
            className="text-[#22E27F] text-base bg-transparent px-6 py-3 rounded-full border-[#373E3B] border"
          >
            Volunteer
          </Link>
          <Link
            to="/donate"
            className="text-[#22E27F] text-base bg-transparent px-6 py-3 rounded-full border-[#373E3B] border"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impact;
