import React from 'react';
import { Link } from 'react-router-dom';

const MakeDifference = ({ title1, title2, description }) => {
    return (
        <div className="flex lg:flex-row flex-col justify-between mx-8 lg:pl-20 lg:pt-15 pt-10">
            <div className="w-full flex flex-col gap-3 pt-4 mb-4">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D]">
                    {title1}
                </h1>
                <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D]">
                    {title2}
                </h1>
            </div>
            <div className="flex flex-col w-full gap-8">
                <p className="w-full text-left text-lg text-[#11112d] font-normal">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Link to /donate */}
                    <Link
                        to="/donate"
                        className="text-white text-base bg-[#22E27F] px-6 py-3 rounded-full"
                    >
                        Start Donating Now
                    </Link>
                    {/* Link to /volunteer */}
                    <Link
                        to="/volunteer"
                        className="text-[#22E27F] text-base bg-white px-6 py-3 rounded-full border-[#22E27F] border"
                    >
                        Become a Volunteer
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MakeDifference;
