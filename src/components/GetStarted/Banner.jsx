import React from 'react';
import bannerBgImage from '../../assets/img/getbg.png';


const Banner = () => {
    return (
        <div
            className="h-[553px] relative text-center py-52 px-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bannerBgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col items-center z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
                    Get Started with Access to Care
                </h1>
                <p className="w-full lg:w-1/2 text-lg text-white mb-8">
                we remove barriers to healthcare for underserved individuals and families. Our goal is to connect you to the healthcare you deserve, quickly and efficiently. By simply providing us with your details, we’ll ensure you are linked with a trusted healthcare provider                </p>
            </div>
        </div>
    )
}

export default Banner