import React from 'react';
import bigCardBgImage from "../../../assets/img/nurse.png";
import project from '../../../assets/icons/projects.svg';
import health from '../../../assets/icons/health.svg';
import community from '../../../assets/icons/commnity.svg';
import { Link } from 'react-router-dom';



const Impact = () => {
    return (
        <div className="py-16 px-8 bg-[#F6FEFA] h-auto">

            <div className="container mx-auto flex flex-col gap-3">
                {/* Title */}
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-[#1D1D1D] font-bold mb-12"
                >
                    Our Impact So Far
                </h2>

                {/* Big Card with Background */}
                <div
                    className="relative h-[400px] lg:h-[600px] bg-cover bg-no-repeat bg-center rounded-[30px] flex flex-col justify-end items-center"
                    style={{
                        backgroundImage: `url(${bigCardBgImage})`,
                    }}
                >
                    {/* <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div> */}
                </div>
                <div className="container mx-auto flex justify-evenly mt-8">
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

                <div className="flex flex-col lg:flex-row justify-between mx-4 lg:pl-20 lg:pt-15 pt-10">
                    <div className="w-full flex flex-col pt-4">
                        <h1 className="text-3xl lg:text-5xl  font-bold text-[#11112D]">
                            Join Our
                        </h1>
                        <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D] mb-4">
                            Community?
                        </h1>
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <p className="w-full text-left text-lg text-[#11112d] font-normal">
                            Become Part of the AccessCareConnect Patient Community and discover a network dedicated to connecting you with the care and resources you need, including:
                        </p>

                        <ul className="w-full text-left text-lg text-[#11112d] font-normal pl-5 space-y-4">
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#22E27F]"></i>
                                Trusted healthcare providers
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#22E27F]"></i>
                                Support for navigating the healthcare system.
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fas fa-check text-[#22E27F]"></i>
                                Essential services like transportation and housing support
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/get-started"
                                className="text-black text-base bg-[#22E27F] px-6 py-3 rounded-full"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Impact