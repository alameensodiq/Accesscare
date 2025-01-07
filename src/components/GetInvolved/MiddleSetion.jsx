import React from "react";
import bigCardBgImage from "../../assets/img/bg2.jpeg";

const MiddleSetion = () => {
    const sectionData = {
        title: "What Drives Us",
        bigCardBgImage: bigCardBgImage,
        cards: [
            {
                title: "Volunteer",
                description: "Dedicate your time and skills.",
            },

            {
                title: "Donate",
                description: "Support our programs and initiatives.",
            },
            {
                title: "Partner With Us",
                description: "Collaborate as a healthcare provider.",
            },
        ],
    };

    return (
        <div
            className="relative h-[900px] sm:h-[700px] mx-8 md:h-[600px] bg-cover bg-no-repeat bg-center rounded-[30px] mt-12 flex flex-col justify-end items-center"
            style={{
                backgroundImage: `url(${sectionData.bigCardBgImage})`,
            }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>
            {/* Small Cards Section */}
            <div className="w-full z-10 max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 px-4 pb-8">
                {sectionData.cards.map((card, index) => (
                    <div
                        key={index}
                        className={`h-44 lg:h-56 flex flex-col justify-between p-6 rounded-[20px] shadow-md ${index !== 0
                            ? "bg-transparent border-2 border-white"
                            : "bg-[#FFCF4E]"
                            }`}
                    >
                        <h3
                            className={`text-2xl font-bold mb-4 ${index !== 0 ? "text-white" : "text-[#025788]"
                                }`}
                        >
                            {card.title}
                        </h3>
                        {/* Wrapper for description and button */}
                        <div className="flex flex-col gap-4">
                            <p
                                className={`text-sm ${index !== 0 ? "text-white" : "text-[#025788]"
                                    }`}
                            >
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiddleSetion;
