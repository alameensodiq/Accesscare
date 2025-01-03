import React from "react";
import curve from "../assets/icons/curvyline.svg"; // Example icon 1

const Privacy = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Title and Description */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold text-[#11112D] mb-4">
          Privacy Policy
        </h1>

        <img src={curve} alt="Icon 1" className="absolute top-0 right-0" />
      </div>

      <div className="flex flex-col items-center mt-20 relative">
        {/* Paragraph Section */}
        <p className="w-[90%] md:w-2/3 text-center text-lg text-[#11112d] font-normal mb-8">
          At AccessCareConnect Referral Foundation, we value your trust and are
          committed to protecting your privacy. This policy outlines how we
          collect, use, and safeguard your information.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[18px] text-black font-bold lg:text-[20px]">
            Information We Collect
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center">
                <div className="flex flex-row items-center">
                  <span className="w-[5px]  h-[5px] bg-black rounded-[100%] mr-2"></span>
                  <span className="text-[14px] lg:text-[16px] font-bold">
                    Personal Information:{" "}
                  </span>
                </div>
                <span className="text-[12px] lg:text-[16px]">
                  Name, email address, phone number, and other
                </span>
              </div>
              <div className="flex flex-row justify-center">
                <span className="text-[12px] lg:text-[16px]">
                  details provided when you contact us, volunteer, or donate.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center">
                <div className="flex flex-row items-center">
                  <span className="w-[5px]  h-[5px] bg-black rounded-[100%] mr-2"></span>
                  <span className="text-[14px] lg:text-[16px] font-bold">
                    Non-Personal Information:{" "}
                  </span>
                </div>
                <span className="text-[12px] lg:text-[16px]">
                  Data such as browser type, device information,
                </span>
              </div>
              <div className="flex flex-row justify-center">
                <span className="text-[12px] lg:text-[16px]">
                  and website usage statistics collected via cookies.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-[18px] text-black font-bold lg:text-[20px]">
            How We Use Your Information
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-row items-center">
                <div className="flex flex-row items-center">
                  <span className="w-[5px]  h-[5px] bg-black rounded-[100%] mr-2"></span>
                </div>
                <span className="text-[12px] lg:text-[16px]">
                  To process donations and issue receipts.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[80%]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-row items-center lg:items-center">
                <div className="flex flex-row items-center">
                  <span className="w-[5px]  h-[5px] bg-black rounded-[100%] mr-2"></span>
                </div>
                <span className="text-[12px] lg:text-[16px] text-center">
                  To communicate updates about our programs and events.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-row items-center">
                <div className="flex flex-row items-center">
                  <span className="w-[5px]  h-[5px] bg-black rounded-[100%] mr-2"></span>
                </div>
                <span className="text-[12px] lg:text-[16px]">
                  To improve our website and services.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-[18px] text-black font-bold lg:text-[20px]">
            Your Rights
          </span>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center">
                <span className="text-[12px] lg:text-[16px] text-center">
                  You have the right to access, update, or request deletion of
                  your personal information.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center">
                <span className="text-[12px] lg:text-[16px]">
                  Contact us at{" "}
                  <span style={{ textDecoration: "underline" }}>
                    privacy@accesscareconnect.org
                  </span>{" "}
                  for assistance.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-[18px] text-black font-bold lg:text-[20px]">
            Security
          </span>
          <div className="flex flex-col lg:w-[48%] w-[88%] ">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center">
                <span className="text-[12px] flex text-center lg:text-[16px]">
                  We use industry-standard security measures to protect your
                  data. However, no method of transmission over the internet is
                  100% secure, and we encourage you to contact us with any
                  concerns.
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center">
                <span className="text-[12px] lg:text-[16px]">
                  method of transmission over the internet is 100% secure, and
                  we encourage you
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="flex lg:flex-row md:flex-row flex-col items-center">
                <span className="text-[12px] lg:text-[16px]">
                  to contact us with any concerns.
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
