import React from 'react';
import curve from "../../assets/icons/curvyline.svg";


const FaqTop = () => {
    return (
        <>
            {/* Title and Description */}
            <div className="relative text-center px-3">
                <h1 className="text-5xl font-bold text-[#11112D] mb-4 leading-[1.4]">
                    Frequently Asked <br className="mb-4" />
                    Questions
                </h1>
                <img
                    src={curve}
                    alt="Curve Decoration"
                    className="hidden md:block absolute top-[-20px] right-0 w-[150px] md:w-[200px] lg:w-[250px]"
                />
            </div>
            <div className="flex flex-col items-center">
                <p className="w-full md:w-1/2 text-center text-lg text-[#11112d] font-normal mb-8">
                    Find answers to common questions about AccessCareConnect Referral Foundation’s mission, services, and involvement opportunities.                </p>
            </div>

        </>
    )
}

export default FaqTop