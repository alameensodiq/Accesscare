import React from "react";
import { Link } from "react-router-dom";

const LastServiceSec = () => {
    return (
        <div className="space-y-12">
            {/* First Section: Title and Description (Flex layout) */}
            <div className="container mx-auto flex flex-row items-center justify-between space-x-6 px-6 py-12">
                <div className="flex flex-col md:flex-row">
                    <h2 className="w-full lg:w-1/2 text-4xl lg:text-5xl font-semibold text-[#1D1D1D] leading-tight">
                        How to Access <br /> Our Services
                    </h2>
                    <p className="w-full lg:w-1/2 text-lg text-[#43474F] font-normal mt-4 leading-relaxed">
                        If you or someone you know could benefit from these services, visit our Get Started page to complete the Patient Support Survey. Together, we’ll create a plan to address your needs and connect you with the appropriate resources.
                    </p>
                </div>
            </div>

            {/* Second Section: Title, Description, and Buttons (Flex-col layout) */}
            <div className="bg-[#E4FFF2] py-12 px-6">
                <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">
                    {/* Title and Description */}
                    <div className="text-center">
                        <h2 className="text-xl md:text-5xl font-semibold text-[#1D1D1D] leading-tight">
                            Join Us in Making a Difference
                        </h2>
                        <p className="text-lg text-[#11112d] font-normal mt-4 leading-relaxed">
                            Whether you’re a patient, provider, or supporter, AccessCareConnect Referral Foundation is here to transform lives and create equitable access to care for everyone.

                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Link to /donate */}
                        <Link
                            to="/get-involved"
                            className="text-[0A142F] text-base bg-[#22E27F] px-6 py-3 rounded-full"
                        >
                            Get Involved
                        </Link>
                        {/* Link to /volunteer */}
                        <Link
                            to="/contact"
                            className="text-[#22E27F] text-base px-6 py-3 rounded-full border-[#22E27F] border"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastServiceSec;
