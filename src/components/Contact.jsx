import React from "react";
import phone from "../assets/icons/phone.svg";
import emails from "../assets/icons/email.svg";
import location from "../assets/icons/location.svg";
import curve from "../assets/icons/curvyline.svg";
import dot from "../assets/icons/dot.svg";

const Contact = () => {
  return (
    <div className="container mx-auto py-16 relative">
      <img
        src={curve}
        alt="Icon 1"
        className="absolute top-4 lg:right-20 right-0"
      />
      <div className="flex lg:flex-row md:flex-col pb-40 flex-col justify-between lg:justify-center relative lg:gap-20">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-[#11112D] mb-4">Contact Us</h1>
          <p className="w-[100%] md:w-2/3 text-left text-lg text-[#11112d] font-normal mb-8">
            Contact us if you have a question and we will answer them.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <img src={phone} alt="Icon 2" />
              <span>(XXX) XXX-XXXX</span>
            </div>
            <div className="flex flex-row gap-4">
              <img src={emails} alt="Icon 3" />
              <span>support@accesscareconnect.org</span>
            </div>
            <div className="flex flex-row gap-4">
              <img src={location} alt="Icon 4" />
              <span>Add location details</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] lg:w-[30%] gap-8  pt-20">
          <input
            placeholder="Name*"
            className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
          />
          <input
            placeholder="Email*"
            className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
          />
          <input
            placeholder="Leave us a message (Optional)"
            className="border-t-0 border-l-0 border-r-0 border-b-2 outline-none"
          />
          <button className="text-white text-[12px] bg-[#45E99E] h-[40px]  rounded-[20px]">
            Send message
          </button>
        </div>
        <img
          src={dot}
          alt="Icon 2"
          className="absolute bottom-0 lg:top-95 top-95 lg:left-20 left-0"
        />
      </div>
      <div className="flex lg:flex-row md:flex-col  flex-col justify-between lg:pl-20 lg:pt-15 pt-10">
        <div className="flex flex-col pt-4">
          <h1 className="text-3xl lg:text-5xl  font-bold text-[#11112D] mb-4">
            Ready To make
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D] mb-4">
            a Difference?
          </h1>
        </div>
        <div className="flex flex-col w-[80%] lg:w-[50%] gap-8">
          <p className="w-[100%] md:w-2/3 text-left text-lg text-[#11112d] font-normal mb-8">
            Join our team of volunteers who are making a direct impact on
            underserved communities. Your time can change lives!
          </p>
          <div className="flex flex-row lg:w-[50%] w-[100%] justify-between gap-4">
            <button className="text-white lg:text-[12px] text-[10px] bg-[#45E99E] h-[40px]  rounded-[20px] w-[50%]">
              Start Donating Now
            </button>
            <button className="text-[#45E99E] lg:text-[12px] text-[10px] bg-white h-[40px]  rounded-[20px] w-[50%] border-[#45E99E] border-[1px]">
              Become a Volounteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
