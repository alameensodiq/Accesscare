import React from "react";
import backgroundImage from "../assets/img/partnerimage.png";
import backgroundImageheader from "../assets/img/partnerheader.png";

const Partner = () => {
  return (
    <div className="flex flex-col gap-3">
      <div
        style={{
          backgroundImage: `url(${backgroundImageheader})`,
          backgroundSize: "cover",
          backgroundPosition: "start",
          backgroundRepeat: "no-repeat",
          height: "500px"
        }}
        className="flex flex-col lg:p-14 md:p-14 p-4 w-[100%] justify-center items-center gap-2"
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-[#ffffff] lg:text-[64px] md:text-[44px] sm:text-[40px] text-[15px]">
            Partner with Us
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="lg:text-[30px] lg:w-[70%] text-center md:text-[14px] sm:text-[14px] text-[10px] text-[#ffffff]">
            Join AccessCareConnect Referral Foundation as a healthcare provider
            and help connect underserved patients with quality healthcare
            services.
          </span>
          {/* <span className="lg:text-[30px] md:text-[14px] sm:text-[14px] text-[10px] text-[#ffffff]">
            and help connect underserved patients with quality healthcare
            services.
          </span> */}
        </div>
      </div>
      <div className="flex lg:px-20 gap-20 md:py-10 md:px-20 sm:py-10 sm:px-5 py-10 px-5  lg:py-10 lg:flex-row md:flex-col sm:flex-col flex-col">
        <div className="lg:w-[38%]">
          <span className="text-[#11112D] font-bold lg:text-[56px] md:text-[56px] sm:text-[36px] text-[20px]">
            Join Our Network of Compassionate Providers.
          </span>
        </div>
        <div className="lg:w-[52%] flex flex-col gap-6">
          <span className="lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-start text-[#11112D]">
            AccessCareConnect Referral Foundation invites healthcare providers
            to partner with us in creating equitable access to quality care. By
            joining our network, you’ll connect with patients who need your
            services while making a measurable difference in underserved
            communities.
          </span>
          <div className="flex  flex-col gap-2">
            <span className="text-[20px] font-bold text-[#11112D]">
              Benefits of Partnership
            </span>
            <div className="flex flex-row items-center gap-2">
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  background: "black",
                  borderRadius: "50%"
                }}
              ></span>
              <span className="text-[16px] text-[#11112D]">
                Expand your reach to patients in need
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  background: "black",
                  borderRadius: "50%"
                }}
              ></span>
              <span className="text-[16px] text-[#11112D]">
                Collaborate on impactful healthcare initiatives.
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  background: "black",
                  borderRadius: "50%"
                }}
              ></span>
              <span className="text-[16px] text-[#11112D]">
                Be recognized as a champion for healthcare equity.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-20">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "start",
            backgroundRepeat: "no-repeat",
            height: "100%"
          }}
          className="flex flex-col lg:p-14 md:p-14 p-4 w-[100%] rounded-[20px] justify-between gap-20"
        >
          <span className="flex lg:ml-20 flex-row justify-start items-center font-bold text-white text-[30px] lg:text-[60px] md:text-[50px] sm:text-[30px]">
            Benefits of Partnership
          </span>
          <div className="flex gap-5 justify-center lg:flex-row md:flex-row sm:flex-col flex-col w-[100%]">
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px] bg-[#FFCF4E] rounded-[30px] p-5">
              <span className="w-[80%] text-[#025788] text-[30px]">
                Complete the Partnership Form
              </span>
              <span className="text-[#025788] text-[15px]">
                Fill out the form below with your information.
              </span>
            </div>
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px]  bg-transparent border-[3px]  rounded-[30px] p-5">
              <span className="w-[90%] text-[#FFFFFF] text-[30px]">
                Schedule on Introductory Meeting
              </span>
              <span className="text-[#FFFFFF] text-[15px]">
                We’ll connect to discuss how we can collaborate.
              </span>
            </div>
            <div className="flex flex-col gap-10 lg:w-[30%] md:w-[30%] sm:w-[100%] w-[100%] h-[300px] bg-transparent border-[3px] rounded-[30px] p-5">
              <span className="w-[50%] text-[#FFFFFF] text-[30px]">
                Onboard with Us
              </span>
              <span className="text-[#FFFFFF] text-[15px]">
                Gain access to tools and resources to start making an impact.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex gap-6 flex-col justify-center items-center px-10">
        <span className="text-[25px] lg:text-[50px] md:text-[50px] sm:text-[30px] text-[#1D1D1D]">
          Partnership Form
        </span>
        <div className="flex flex-col gap-2 w-[100%] justify-center items-center">
          <div className="flex flex-col w-[100%] lg:w-[30%] gap-10  pt-10">
            <input
              placeholder="Full Name *"
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

export default Partner;
