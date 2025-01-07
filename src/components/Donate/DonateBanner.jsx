import React from 'react';
import bannerBgImage from '../../assets/img/donatebg.jpeg';

const DonateBanner = () => {


    return (
        <div
            className="h-[553px] relative text-center py-52 px-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerBgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col items-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
                    <span className="block">Help Make Healthcare</span>
                    <span className="block lg:mt-4">Accessible</span>
                </h1>
                <p className="w-full lg:w-1/2 text-lg text-white mb-8">
                    At AccessCareConnect Referral Foundation, your donation helps bridge that gap. Your support ensures we can continue connecting underserved communities with essential healthcare services.
                </p>
            </div>
        </div>
    );
};

export default DonateBanner;
