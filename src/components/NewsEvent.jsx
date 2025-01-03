import React from "react";
import curve from "../assets/icons/curvyline.svg"; // Example icon 1
import news from "../assets/icons/News.svg";
import newstwo from "../assets/icons/Newstwo.svg";
import arrowup from "../assets/icons/Arrowup.svg";

const NewsEvent = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Title and Description */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold text-[#11112D] mb-4">
          News and Events
        </h1>

        <img src={curve} alt="Icon 1" className="absolute top-0 right-0" />
      </div>

      <div className="flex flex-col items-center mt-20 relative">
        {/* Paragraph Section */}
        <p className="w-[90%] lg:w-[50%] md:w-[50%] text-center text-lg text-[#11112d] font-normal mb-8">
          Stay updated on the latest news and upcoming events from
          AccessCareConnect Referral Foundation.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="w-[100%]  flex flex-col justify-start">
          <img src={news} alt="news" />
          <div className="flex flex-col justify-start gap-2 pl-8">
            <span className="text-[14px] lg:text-[18px]">
              Title of Blog Post 1
            </span>
            <span className="text-[14px] lg:text-[16px] text-[#667085]">
              Short description of Blog Post 1
            </span>
            <div className="flex flex-row items-center">
              <span className="text-[14px] lg:text-[16px] text-[#15A359]">
                Read post
              </span>
              <img src={arrowup} alt="arrowup" />
            </div>
          </div>
        </div>
        <div className="w-[95%] lg:w-[100%] md:w-[100%]  flex flex-col justify-start">
          <img src={newstwo} className="h-[280px] pt-3 ml-5" alt="news" />
          <div className="flex flex-col justify-start gap-2 pl-8 lg:pt-10 md:pt-10 pt-0">
            <span className="text-[14px] lg:text-[18px]">
              Title of Blog Post 1
            </span>
            <span className="text-[14px] lg:text-[16px] text-[#667085]">
              Short description of Blog Post 1
            </span>
            <div className="flex flex-row items-center">
              <span className="text-[14px] lg:text-[16px] text-[#15A359]">
                Read post
              </span>
              <img src={arrowup} alt="arrowup" />
            </div>
          </div>
        </div>
        <div className="w-[100%]  flex flex-col justify-start">
          <img src={news} alt="news" />
          <div className="flex flex-col justify-start gap-2 pl-8">
            <span className="text-[14px] lg:text-[18px]">
              Title of Blog Post 1
            </span>
            <span className="text-[14px] lg:text-[16px] text-[#667085]">
              Short description of Blog Post 1
            </span>
            <div className="flex flex-row items-center">
              <span className="text-[14px] lg:text-[16px] text-[#15A359]">
                Read post
              </span>
              <img src={arrowup} alt="arrowup" />
            </div>
          </div>
        </div>
        <div className="w-[95%] lg:w-[100%] md:w-[100%]  flex flex-col justify-start">
          <img src={newstwo} className="h-[280px] pt-3 ml-5" alt="news" />
          <div className="flex flex-col justify-start gap-2 pl-8 lg:pt-10 md:pt-10 pt-0">
            <span className="text-[14px] lg:text-[18px]">
              Title of Blog Post 1
            </span>
            <span className="text-[14px] lg:text-[16px] text-[#667085]">
              Short description of Blog Post 1
            </span>
            <div className="flex flex-row items-center">
              <span className="text-[14px] lg:text-[16px] text-[#15A359]">
                Read post
              </span>
              <img src={arrowup} alt="arrowup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
