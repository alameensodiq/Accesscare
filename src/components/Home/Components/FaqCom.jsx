import React, { useState } from 'react';
import { Link } from "react-router-dom";
import minusIcon from "../../../assets/icons/minus.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import arrowright from "../../../assets/icons/arrowright.svg";






const FaqCom = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [

        {
            question: "What is AccessCareConnect Referral Foundation?",
            answer:
                "We are a nonprofit organization focused on connecting underserved patients with healthcare providers and essential social services.",
        },
        {
            question: "How do I get involved?",
            answer:
                "You can volunteer your time, donate to support our programs, or partner with us as a healthcare provider.",
        },
        {
            question: "Who can benefit from your services?",
            answer:
                "Our services are designed to help underserved populations who need access to equitable healthcare, social services, and non-emergency medical transportation.",
        },

    ];

    return (
        <div
            className="py-16 px-8  flex flex-col items-center gap-11 h-auto"
        >
            <div className="w-full md:w-1/2 text-center">
                <h2 className="text-3xl md:text-4xl font-normal text-[#1D1D1D] leading-tight">
                    Frequently asked questions
                </h2>
                <p className=" text-lg text-[#11112d] font-normal mt-4 leading-relaxed">
                    Find answers to common questions about AccessCareConnect Referral Foundation’s mission, services, and involvement opportunities.                </p>
            </div>
            <div className="w-full max-w-3xl mx-auto px-4">

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden ${index === faqs.length - 1 ? "" : "border-b border-[#EAECF0]"
                                }`}
                        >
                            {/* Question Section */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center transition"
                            >
                                <span className="text-lg font-semibold text-[#101828]">
                                    {faq.question}
                                </span>
                                <img
                                    src={activeIndex === index ? minusIcon : plusIcon}
                                    alt={activeIndex === index ? "Collapse" : "Expand"}
                                    className="w-6 h-6"
                                />
                            </button>
                            {/* Answer Section */}
                            {activeIndex === index && (
                                <div className="px-6 py-4 text-[#667085]">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/faqs" className="flex items-center gap-2 ml-7">
                        <p className="text-lg text-[#15A359] font-normal mt-2 leading-relaxed">
                            Explore Other Answered Questions
                        </p>
                        <img
                            src={arrowright}
                            alt="arrow"
                            className="w-3 h-3 mt-2"
                        />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default FaqCom;

