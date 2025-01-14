import React from "react";
import bigCardBgImage from "../../assets/img/bg.jpeg";

const WhatDrivesUs = () => {
    const sectionData = {
        title: "What Drives Us",
        bigCardBgImage: bigCardBgImage,
        cards: [
            {
                title: "Equity",
                description: "We champion healthcare as a fundamental right.",
            },
            {
                title: "Empathy",
                description: "We prioritize patient-centric solutions.",
            },
            {
                title: "Integrity",
                description: "We uphold transparency and trust in all we do.",
            },
            {
                title: "Community Impact",
                description:
                    "We bridge gaps between patients, providers, and social services.",
            },
        ],
    };

    return (
        <div className="container mx-auto py-16 px-8">
            {/* Outer Section */}
            <div className="container mx-auto flex flex-col gap-3">
                {/* Title */}
                <h2
                    className="text-4xl md:text-5xl font-bold mb-12"
                    style={{ color: "#1D1D1D" }}
                >
                    {sectionData.title}
                </h2>

                {/* Big Card with Background */}
                <div
                    className="relative h-[900px] sm:h-[700px] md:h-[600px] bg-cover bg-no-repeat bg-center rounded-[30px] flex flex-col justify-end items-center"
                    style={{
                        backgroundImage: `url(${sectionData.bigCardBgImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-[30px]"></div>

                    {/* Small Cards Section */}
                    <div className="w-full z-10 max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 px-4 pb-8">
                        {sectionData.cards.map((card, index) => (
                            <div
                                key={index}
                                className="h-44 lg:h-56 bg-[#FFEAC8] flex flex-col justify-between p-6 rounded-[20px] shadow-md"
                            >
                                <h3 className="text-2xl font-bold mb-4" style={{ color: "#025788" }}>
                                    {card.title}
                                </h3>
                                <p className="text-sm" style={{ color: "#025788" }}>
                                    {card.description}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhatDrivesUs;
