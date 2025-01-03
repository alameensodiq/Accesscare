import React from 'react';
import curve from "../../assets/icons/curvyline.svg";
import dot from "../../assets/icons/dot.svg";

const Topsection = () => {
    return (
        <>
            {/* Title and Description */}
            <div className="relative text-center">
                <h1 className="text-5xl font-bold text-[#11112D] mb-4">
                    Get Involved Today
                </h1>

                <img src={curve} alt="Icon 1"
                    className="absolute top-0 right-0"
                />
            </div>
            <div className="flex flex-col items-center mt-20 relative">
                {/* Paragraph Section */}
                <p className="w-[90%] md:w-2/3 text-center text-lg text-[#11112d] font-normal mb-8">
                    At ACC Referral Foundation, we believe in the power of collective action. Here are ways you can make a difference: Join us in creating equitable healthcare access. Here’s how you can help                </p>

                {/* Dot Icon */}
                <div className='absolute top-0 left-0'>
                    <img src={dot} alt="Icon 2"  />
                </div>


            </div>

        </>
    )
}

export default Topsection