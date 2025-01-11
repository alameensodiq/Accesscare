import React from 'react';
import { Link } from "react-router-dom";




const GetInvolved = () => {
    const cards = [
        {
            title: "Volunteer with Us",
            description:
                "Join our team of volunteers who are making a direct impact on underserved communities. Your time can change lives!",

            bgColor: "#45E99E",
        },
        {
            title: "Donate",
            description:
                "Your donation helps us continue to connect patients with the care they deserve. Every contribution counts towards improving healthcare access for underserved populations.",
            bgColor: "#F9EFCC",
        },
    ];

    return (
        <div
            className="py-16 px-8 bg-[#E4FFF2] flex flex-col items-center gap-11 h-auto"
        >
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#1D1D1D] leading-tight">
                    Get Involved
                </h2>
                <p className="text-lg text-[#11112d] font-normal mt-4 leading-relaxed">
                    Help Us Make a Difference
                </p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="md:h-[300px] md:w-1/2 lg:h-[250px] flex flex-col justify-between items-start p-8 rounded-[30px]"
                        style={{ backgroundColor: card.bgColor }}
                    >
                        <h3 className="text-3xl md:text-5xl font-medium mb-4 text-[#025788]">
                            {card.title}
                        </h3>
                        <p className="text-lg font-normal text-[#025788]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Link to /donate */}
                <Link
                    to="/volunteer"
                    className="text-[#0A142F] text-base bg-[#22E27F] px-6 py-3 rounded-full"
                >
                    Volunteer
                </Link>
                {/* Link to /volunteer */}
                <Link
                    to="/donate"
                    className="text-[#0A142F] text-base px-6 py-3 rounded-full border-[#0A142F] border"
                >
                    Donate Now
                </Link>
            </div>
        </div>
    );
};

export default GetInvolved;

