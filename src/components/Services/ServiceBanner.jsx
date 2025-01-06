import React from 'react';
import curve from '../../assets/icons/curvyline.svg';

const ServiceBanner = () => {
    return (
        <div
            className="bg-[#45E99E] text-center py-32 px-4 bg-cover bg-no-repeat"
        >
            <div className="relative z-10 flex flex-col items-center">
                <img
                    src={curve}
                    alt="Curve Decoration"
                    className="hidden md:block absolute top-[-20px] left-0 w-[150px] md:w-[200px] lg:w-[250px]"
                />

                <h1 className="text-4xl md:text-5xl font-bold text-[11112d] mb-4 leading-snug">
                    What We Offer
                </h1>

                <p className=" w-full md:w-1/2 text-lg text-[11112d] mb-8">
                    At AccessCareConnect Referral Foundation, we are committed to providing holistic support to underserved populations. Our services address not only healthcare needs but also broader social determinants of health, ensuring every individual receives the care and resources they need to thrive.

                </p>
                <img
                    src={curve}
                    alt="Curve Decoration"
                    className="hidden md:block absolute top-[-20px] right-0 w-[150px] md:w-[200px] lg:w-[250px]"
                />
            </div>

        </div>
    )
}

export default ServiceBanner