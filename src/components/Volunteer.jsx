import React from "react";
import backgroundImage from "../assets/img/volunteerimage.png";
import backgroundImageheader from "../assets/img/volunteerheader.png";

const Volunteer = () => {
  return (
    <div className="flex flex-col gap-3">
      <div
        style={{
          backgroundImage: `url(${backgroundImageheader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px"
        }}
        className="flex flex-col lg:p-14 md:p-14 p-4 w-[100%] justify-center items-center gap-2"
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-[#ffffff] lg:text-[64px] md:text-[44px] sm:text-[40px] text-[15px]">
            Volunteer with AccessCareConnect
          </span>
          <span className="text-[#ffffff] lg:text-[64px] md:text-[44px] sm:text-[40px] text-[15px]">
            Referral Foundation
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="lg:text-[14px] md:text-[14px] sm:text-[14px] text-[10px] text-[#ffffff]">
            work is fueled by passionate volunteers like you. Whether you’re
            guiding patients through the ref
          </span>
          <span className="lg:text-[14px] md:text-[14px] sm:text-[14px] text-[10px] text-[#ffffff]">
            process, assisting in administrative tasks, or spreading awareness,
            your time and skills are essential to
          </span>
          <span className="text-[14px] text-[#ffffff]">mission.</span>
        </div>
      </div>
      <div className="flex flex-col py-10 gap-3">
        <div className="flex flex-row justify-start items-center px-5 lg:px-20 md:px-20 sm:px-20">
          <span className="text-[25px] lg:text-[50px] md:text-[50px] sm:text-[30px] text-[#1D1D1D]">
            Why Volunteer with Us
          </span>
        </div>
        <div className="flex gap-3 lg:flex-row md:flex-row sm:flex-col flex-col lg:justify-between md:px-20 sm:px-10 px-5">
          <div className="flex flex-col gap-10 lg:w-[30%] h-[300px] bg-[#45E99E] rounded-[30px] p-5">
            <span className="w-[70%] text-[#025788] text-[30px]">
              Make a Real Difference
            </span>
            <span className="text-[#025788] text-[15px]">
              Volunteering with us means directly impacting the lives of
              individuals in need, making healthcare more accessible to those
              who often face barriers.
            </span>
          </div>
          <div className="flex flex-col gap-10 lg:w-[30%] h-[300px] bg-[#DFFBEE] rounded-[30px] p-5">
            <span className="w-[90%] text-[#025788] text-[30px]">
              Support a Meaningful Mission
            </span>
            <span className="text-[#025788] text-[15px]">
              oining our team allows you to help communities in need gain access
              to healthcare, ensuring they receive the care they deserve
            </span>
          </div>
          <div className="flex flex-col gap-10 lg:w-[30%] h-[300px] bg-[#FFEAC8] rounded-[30px] p-5">
            <span className="w-[70%] text-[#025788] text-[30px]">
              Flexible Roles
            </span>
            <span className="text-[#025788] text-[15px]">
              Volunteer positions are tailored to suit your availability and
              skill set.
            </span>
          </div>
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
          <span className="flex lg:ml-20 flex-row justify-start items-center font-bold text-white text-[30px] lg:text-[60px] md:text-[50px] sm:text-[30px]">
            Volunteer Roles
          </span>
          <div className="flex gap-5 justify-center lg:flex-row md:flex-row sm:flex-col flex-col w-[100%]">
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px] bg-[#FFCF4E] rounded-[30px] p-5">
              <span className="w-[50%] text-[#025788] text-[30px]">
                Patient Support
              </span>
              <span className="text-[#025788] text-[15px]">
                Assist patients in navigating the referral process, ensuring
                they connect with the right healthcare providers.
              </span>
            </div>
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px]  bg-transparent border-[3px]  rounded-[30px] p-5">
              <span className="w-[90%] text-[#FFFFFF] text-[30px]">
                Administrative Support
              </span>
              <span className="text-[#FFFFFF] text-[15px]">
                Help with tasks such as scheduling, data entry, and supporting
                the overall management of referrals.
              </span>
            </div>
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px] bg-transparent border-[3px] rounded-[30px] p-5">
              <span className="w-[70%] text-[#FFFFFF] text-[30px]">
                Community Outreach
              </span>
              <span className="text-[#FFFFFF] text-[15px]">
                Help us expand our reach, educating communities about the
                services we offer and assisting in patient enrolment.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex gap-6 flex-col justify-center items-center px-10">
        <span className="text-[25px] lg:text-[50px] md:text-[50px] sm:text-[30px] text-[#1D1D1D]">
          Volunteer Application Form
        </span>
        <div className="flex flex-col gap-2 w-[100%] justify-center items-center">
          <span className="text-[20px] lg:w-[30%] w-[100%] text-[#1D1D1D] flex flex-row">
            Personal Information
          </span>
          <div className="flex flex-col w-[100%] lg:w-[30%] gap-10  pt-10">
            <input
              placeholder="Full Name*"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
            <input
              placeholder="Contact Email *"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
            <input
              placeholder="Phone Number*"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
            <input
              placeholder="Practice/Organization Name *"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
            <input
              placeholder="Specialization *"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
            <input
              placeholder="Available Services for Underserved Patients *"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[100%] justify-center items-center">
          <span className="text-[20px] lg:w-[30%] w-[100%] text-[#1D1D1D] flex flex-row">
            Skills and Experience
          </span>
          <div className="flex flex-col w-[100%] lg:w-[30%] gap-10  pt-10">
            <textarea
              placeholder="Please provide details of any relevant skills or experience (e.g., healthcare, outreach, administration)."
              className="border-t-0 border-l-0 border-r-0 text-[12px] border-b-2 outline-none resize-none"
              rows={4} // Adjust rows for desired height
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[100%] justify-center items-center">
          <span className="text-[20px] lg:w-[30%] w-[100%] text-[#1D1D1D] flex flex-row">
            How many hours per week can you commit to volunteering?
          </span>
          <div className="flex flex-col w-[100%] lg:w-[30%] gap-10  pt-10">
            <input
              placeholder="Availability"
              className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 lg:ml-80 lg:w-[54%] w-[100%] justify-start items-start">
          <input type="checkbox" className=" border-2 outline-none mt-2" />
          <span>
            I agree to volunteer in accordance with the guidelines of
            AccessCareConnect Referral Foundation
          </span>
        </div>
        <button className="text-[#000000] text-[12px] lg:w-[30%] md:w-[30%] w-[70%] bg-[#45E99E] h-[40px]  rounded-[20px]">
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Volunteer;
