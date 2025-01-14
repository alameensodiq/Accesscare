import React from 'react';
import hero from "../../../assets/img/Hero.jpeg";
import gradient from "../../../assets/icons/Gradient.svg";

const Hero = () => {
    return (
        <div className="relative mb-16 md:h-[500px] lg:h-[840px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center filter grayscale"
                style={{
                    backgroundImage: `url(${hero})`, 
                }}
            ></div>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {/* Content */}
            <div className="relative flex flex-col container mx-auto px-6 lg:px-20 py-20 lg:py-40 items-center text-center text-white">
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight mb-6 relative inline-block">
                    <span className="relative inline-flex items-center">
                        <span className="absolute left-10  lg:-top-0 lg:left-24 z-10">
                            <img
                                src={gradient}
                                alt="Gradient decoration"
                                className="w-24 md:w-40 lg:w-64"
                            />
                        </span>
                        <span className="relative z-20">Making</span>
                        <span className="ml-4">Healthcare</span>
                    </span>
                    <br />
                    <span className="block">Accessible for All</span>
                </h1>



                {/* Description */}
                <p className="w-full lg:w-2/3 text-center text-lg lg:text-xl font-light mb-8">
                    We are dedicated to creating pathways to healthcare for middle-class and underserved populations. By connecting patients and providers, we are making a tangible difference in communities that need it the most.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* Get Started Button */}
                    <a href="/get-started">
                        <button className="bg-[#1bb96a] text-black px-3 md:px-8 py-3 rounded-full font-medium hover:bg-[#45E99E] hover:text-white transition duration-300">
                            Get Started
                        </button>
                    </a>
                    {/* Get Involved Button */}
                    <a href="/get-involved">
                        <button className="bg-transparent text-[#1bb96a] border border-[#1bb96a] px-3 md:px-8 py-3 rounded-full font-medium hover:bg-[#1bb96a] hover:text-white transition duration-300">
                            Get Involved
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Hero;
