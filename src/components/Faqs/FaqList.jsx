import React, { useState } from "react";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

const FaqList = () => {
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
    {
      question: "How are donations used?",
      answer:
        "Our services are designed to help underserved populations who need access to equitable healthcare, social services, and non-emergency medical transportation.",
    },
    {
      question: "I am a patient. How can I seek assistance?",
      answer:
        "Our services are designed to help underserved populations who need access to equitable healthcare, social services, and non-emergency medical transportation.",
    },
  ];



  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
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
      </div>
    </div>
  );
};

export default FaqList;
