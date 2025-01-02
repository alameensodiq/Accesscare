import React from 'react';
import curve from '../../assets/icons/curvyline.svg'; // Example icon 1
import dot from '../../assets/icons/dot.svg'; // Example icon 2
import project from '../../assets/icons/projects.svg';
import health from '../../assets/icons/health.svg';
import community from '../../assets/icons/commnity.svg';

const TopSection = () => {
    return (
        <div className="container mx-auto py-16">
            {/* Title and Description */}
            <div className="relative text-center">
                <h1 className="text-5xl font-bold text-[#11112D] mb-4">
                    About Us
                </h1>

                <img src={curve} alt="Icon 1"
                    className="absolute top-0 right-0"
                />

            </div>

            <div className="flex flex-col items-center mt-20 relative">
                {/* Paragraph Section */}
                <p className="w-[90%] md:w-2/3 text-center text-lg text-[#11112d] font-normal mb-8">
                    AccessCareConnect Referral Foundation (ACC Referral Foundation) is a nonprofit organization dedicated to bridging the gap between underserved populations and essential healthcare services. We believe everyone deserves access to timely and affordable healthcare, regardless of their socioeconomic status. Beyond healthcare, we also connect communities to critical social services, temporary housing, and non-emergency medical transportation.
                </p>

                {/* Dot Icon */}
                <div className='w-[100%] flex justify-between'>
                    <div
                    //  className="absolute left-0 top-[50%]"
                     >

                        <img src={dot} alt="Icon 2" />
                    </div>
                    <div className="w-full lg:w-[40%] flex lg:mr-[17rem] justify-between mt-8">
                        <div
                            className="text-center bg-cover bg-center bg-no-repeat w-32 h-32 rounded-full flex flex-col justify-center items-center"
                            style={{ backgroundImage: `url(${project})` }}
                        >
                            <p className="font-medium text-3xl md:text-5xl text-black">10k+</p>
                            <p className="text-sm font-normal text-[#4A4A4A]">Projects</p>
                        </div>

                        <div
                            className="text-center bg-cover bg-center bg-no-repeat w-32 h-32 rounded-full flex flex-col justify-center items-center"
                            style={{ backgroundImage: `url(${health})` }}
                        >
                            <p className="font-medium text-3xl md:text-5xl text-black">50+</p>
                            <p className="text-sm font-normal text-[#4A4A4A]">Healthcare
                                <br />  Partners</p>
                        </div>

                        <div
                            className="text-center bg-cover bg-center bg-no-repeat w-32 h-32 rounded-full flex flex-col justify-center items-center"
                            style={{ backgroundImage: `url(${community})` }}
                        >
                            <p className="font-medium text-3xl md:text-5xl text-black">20+</p>
                            <p className="text-sm font-normal text-[#4A4A4A]">
                                Communities <br /> Served</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default TopSection;
