import React, { useState } from "react";
import { Link } from 'react-router-dom';


const DonateForm = () => {
    const [customAmount, setCustomAmount] = useState("");
    const [selectedAmount, setSelectedAmount] = useState("");

    const donationOptions = [
        {
            amount: 25,
            description: "Provides a referral to a healthcare provider for a patient in need.",
            bgColor: "#F9EFCC",
            borderColor: "#FFCF4E",
        },
        {
            amount: 50,
            description: "Provides a referral to a healthcare provider for a patient in need.",
            bgColor: "#F6FEFA",
            borderColor: "#929593",
        },
        {
            amount: 100,
            description: "Helps maintain and expand our patient referral system, improving the process for more individuals.",
            bgColor: "#F6FEFA",
            borderColor: "#929593",
        },
        {
            title: "Custom Donation",
            description: "Every donation counts, regardless of the amount.",
            bgColor: "#F6FEFA",
            borderColor: "#929593",
        },
    ];

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount("custom");
    };

    const handleDonationClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount(""); // Reset custom amount if another card is clicked
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const donationAmount = selectedAmount === "custom" ? customAmount : selectedAmount;
    //     console.log("Donated Amount:", donationAmount);
    // };

    return (
        <>
            <div className="bg-[#F6FEFA] py-16 px-4">
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#11112D] mb-8 text-center">
                        How Your Donation Makes an Impact
                    </h2>
                    <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {donationOptions.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleDonationClick(option.amount || "custom")}
                                className={`cursor-pointer p-6 rounded-lg border-2 ${selectedAmount === option.amount || (selectedAmount === "custom" && index === 3)
                                    ? "border-[#22E27F]"
                                    : `border-[${option.borderColor}]`
                                    }`}
                                style={{ backgroundColor: option.bgColor }}
                            >
                                {option.amount ? (
                                    <h3 className="text-2xl font-bold text-[#11112D] mb-4">
                                        ${option.amount}
                                    </h3>
                                ) : (
                                    <h3 className="text-2xl font-bold text-[#11112D] mb-4">
                                        {option.title}
                                    </h3>
                                )}
                                <p className="text-[#43474F] text-sm leading-relaxed">{option.description}</p>
                                {/* {index === 3 && (
                                    <input
                                        type="number"
                                        placeholder="Enter custom amount"
                                        className="w-full mt-4 px-4 py-2 border border-[#929593] rounded-lg focus:outline-none focus:border-[#22E27F]"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                    />
                                )} */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-8 relative">
                <div className="flex lg:flex-row flex-col justify-between mx-8 lg:pl-20 lg:pt-15 pt-10">
                    <div className="w-full flex flex-col gap-3 pt-4 mb-4">
                        <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D]">
                            Secure Donation
                        </h1>
                        <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D]">
                            Process:
                        </h1>
                    </div>
                    <div className="flex flex-col w-full gap-8">
                        <p className="w-full text-left text-lg text-[#11112d] font-normal">
                            Choose your preferred donation amount and decide whether you would like to make a one-time contribution or set up a recurring monthly donation. Your donation will directly support the mission of AccessCareConnect Referral Foundation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Link to /donate */}
                            <Link
                                to="/donate"
                                className="text-white text-base bg-[#22E27F] px-6 py-3 rounded-full"
                            >
                                Donating Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DonateForm;
