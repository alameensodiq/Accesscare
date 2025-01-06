import React from 'react';
import bannerBgImage from '../../assets/img/donate.png';

const DonateBanner = () => {


    return (
        <div
            className="relative text-center py-32 px-4 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bannerBgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
                    Your donation helps patients <br /> get the care they need.
                </h1>

                <p className="text-lg text-white mb-8">
                    Fill the form & become a part of us.
                </p>
            </div>
        </div>
    );
};

export default DonateBanner;
