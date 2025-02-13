import React from 'react';
import curve from "../../assets/icons/curvyline.svg";
import dot from "../../assets/icons/dot.svg";

const Topsection = () => {
    return (
        <>
            {/* Title and Description */}
            <div className="relative text-center">
                <h1 className="text-5xl font-bold text-[#11112D] mb-4">
                    Join Us In Transforming Lives
                </h1>

                <img
                    src={curve}
                    alt="Curve Decoration"
                    className="hidden md:block absolute top-[-20px] right-0 w-[150px] md:w-[200px] lg:w-[250px]"
                />
            </div>
            <div className="flex flex-col items-center mt-4 relative">
                {/* Paragraph Section */}
                <p className="w-[90%] md:w-1/2 text-center text-lg text-[#11112d] font-normal mb-8">
                    At ACC Referral Foundation, we believe in the power of collective action. Here are ways you can make a difference:

                </p>

                {/* Dot Icon */}
                <div className='absolute top-0 left-0'>
                    <img src={dot} alt="Icon 2" />
                </div>
            </div>

        </>
    )
}

export default Topsection