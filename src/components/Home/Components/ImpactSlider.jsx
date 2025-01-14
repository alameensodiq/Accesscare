import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import maria from "../../../assets/img/maria.png";
import james from "../../../assets/img/james.png"


const testimonials = [
    {
        id: 1,
        image: maria,
        name: "Maria",
        occupation: "Patient",
        description:
            "Thanks to the foundation, I was able to see a specialist I could never have afforded otherwise.",
    },
    {
        id: 2,
        image: james,
        name: "James",
        occupation: "Patient",
        description: "The process was easy, and the care I received was life-changing. Thank you for this incredible service!",
    },
    {
        id: 3,
        image: maria,
        name: "Mary Johnson",
        occupation: "Teacher",
        description: "A wonderful community that has truly changed my life.",
    },
    {
        id: 4,
        image: james,
        name: "Robert Lee",
        occupation: "Business Analyst",
        description:
            "An amazing platform that provides exactly what I need to thrive!",
    },
];

const ImpactSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="container mx-auto px-6 py-8">
            {/* Section 1: Title and Arrows */}
            <div className="grid grid-cols-12 items-center mb-8">
                <div className="col-span-8">
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute top-[25px] left-4 w-[8rem] lg:w-[9rem] h-2 lg:h-3 bg-[#22E27F]"></div>
                        <div className="absolute bottom-3 lg:bottom-[10px] left-4 w-[14rem] lg:w-[18rem] h-2 lg:h-3 bg-[#22E27F]"></div>


                        {/* Text */}
                        <h2 className="relative text-4xl lg:text-5xl text-[#1D1D1D] font-bold leading-tight">
                            <span className="block w-fit px-4">Impact</span>
                            <span className="block w-fit px-4">Testimonials</span>
                        </h2>
                    </div>
                </div>

                <div className="col-span-4 flex justify-end gap-4">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-lg bg-[#22E27F] hover:bg-[#b6f1d4]"
                    >
                        <FaArrowLeft className="text-base text-[#0F713E]" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-lg bg-[#22E27F] hover:bg-[#b6f1d4]"
                    >
                        <FaArrowRight className="text-base text-[#0F713E]" />
                    </button>
                </div>
            </div>

            {/* Section 2: Slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                {/* Testimonial Cards */}
                {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
                    (testimonial, idx) => (

                        <div
                            key={testimonial.id}
                            className={`h-[210px] border rounded-lg p-6 transition-transform ${idx === 0 ? "border-[#22E27F]" : "border-[#E3E3E3]"
                                }`}
                        >
                            {/* Image, Name, and Occupation */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.occupation}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700">{testimonial.description}</p>
                        </div>
                    )
                )}

                {/* Empty Card */}
                <div
                    className="h-[210px] bg-[#EEFBF5] rounded-lg flex items-center justify-center border border-[#B3EDD1]"
                >
                    <FaPlus className="bg-[#B3EDD1] text-3xl p-2 text-[#22E27F] rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default ImpactSlider;
