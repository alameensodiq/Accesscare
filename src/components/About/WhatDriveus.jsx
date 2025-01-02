import React from "react";
import bigCardBgImage from "../../assets/img/bgwhatdrives.jpeg";

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
        <div className="py-16 px-8">
            {/* Outer Section */}
            <div className="container mx-auto">
                {/* Title */}
                <h2
                    className="text-center text-5xl font-bold mb-12"
                    style={{ color: "#1D1D1D" }}
                >
                    {sectionData.title}
                </h2>

                {/* Big Card with Background */}
                <div
                    className="relative bg-cover bg-no-repeat bg-top rounded-[30px]"
                    style={{
                        backgroundImage: `url(${sectionData.bigCardBgImage})`,
                        height: "648px",
                    }}
                >
                    {/* Small Cards Section */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
                        {sectionData.cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#FFEAC8] flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-lg font-bold mb-4" style={{ color: "#025788" }}>
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
