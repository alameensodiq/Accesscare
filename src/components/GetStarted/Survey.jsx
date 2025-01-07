import React, { useState } from "react";

const surveyQuestions = [
    {
        id: "healthcareServices",
        question: "Do you need healthcare services?",
        type: "radio",
        options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" }
        ]
    },
    {
        id: "financialChallenges",
        question: "Do you face financial challenges accessing healthcare?",
        type: "radio",
        options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" }
        ]
    },
    {
        id: "insuranceCoverage",
        question: "Do you currently have health insurance coverage?",
        type: "radio",
        options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" }
        ]
    }
];

const Survey = () => {
    const [responses, setResponses] = useState({});

    const handleResponseChange = (id, value) => {
        setResponses((prevResponses) => ({
            ...prevResponses,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        console.log("Survey Responses:", responses);
    };

    return (
        <div className="container mx-auto">
            <div className="p-8 max-w-5xl w-full">
                <h2 className="text-[#11112D] text-4xl lg:text-5xl font-semibold mb-6">
                    1. Patient Support Survey
                </h2>
                <p className="text-base font-normal mb-8">
                    Please answer the following questions to help us understand your needs and how we can best assist you:
                </p>
                <ul className="space-y-8">
                    {surveyQuestions.map(({ id, question, options }) => (
                        <li key={id}>
                            <p className="text-lg font-medium text-gray-700 mb-4">{question}</p>
                            <div className="flex flex-col space-y-3">
                                {options.map(({ value, label }) => (
                                    <label key={value} className="flex items-center space-x-3">
                                        <input
                                            type="radio"
                                            name={id}
                                            value={value}
                                            checked={responses[id] === value}
                                            onChange={() => handleResponseChange(id, value)}
                                            className="form-radio w-5 h-5 text-green-500"
                                        />
                                        <span className="text-gray-700">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <h3 className="text-4xl font-semibold text-[11112d]">
                        Why are we asking this?
                    </h3>
                    <p className="text-[11112d] text-base mt-2">
                        We ask about insurance coverage to help us connect you to
                        the right healthcare providers. If you have health
                        insurance, we’ll refer you to providers who accept your
                        plan. If you do not have insurance, don’t worry. We will
                        help you find affordable care options.
                    </p>
                </div>
                <button
                    onClick={handleSubmit}
                    className="mt-8 px-6 py-3 bg-green-500 text-white rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Survey;