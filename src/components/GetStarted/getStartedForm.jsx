import React from "react";

const GetStartedForm = () => {
    return (
        <div className="bg-[#F0FFF8]">
            <div className="container mx-auto py-10 px-8 flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Title Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[#11112D] text-4xl lg:text-5xl font-semibold mb-4">
                        <span className="block">Your Role in Our</span>
                        <span className="block">Impact</span>
                    </h2>

                    <p className="text-gray-600">
                        Join us in making healthcare accessible to everyone. Fill in your details below to get started with AccessCareConnect Referral Foundation.
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2">
                    <form className="space-y-6">
                        {/* Full Name Input */}
                        <input
                            type="text"
                            required
                            placeholder="Full Name*"
                            className="w-full border-b bg-inherit border-gray-300 focus:outline-none focus:border-green-500 py-2 text-gray-700 placeholder-gray-500"
                        />

                        {/* Email Address Input */}
                        <input
                            type="email"
                            required
                            placeholder="Email Address*"
                            className="w-full border-b bg-inherit focus:outline-none focus:border-green-500 py-2 text-gray-700 placeholder-gray-500"
                        />

                        {/* Phone Number Input */}
                        <input
                            type="tel"
                            required
                            placeholder="Phone Number*"
                            className="w-full border-b bg-inherit border-gray-300 focus:outline-none focus:border-green-500 py-2 text-gray-700 placeholder-gray-500"
                        />

                        {/* Healthcare Needs Textarea */}
                        <div>
                            <label
                                htmlFor="healthcareNeeds"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Healthcare Needs
                            </label>
                            <textarea
                                id="healthcareNeeds"
                                placeholder="What type of healthcare are you seeking?"
                                className="w-full border-b bg-inherit border-gray-300 focus:outline-none focus:border-green-500 py-2 text-gray-700 placeholder-gray-500 resize-none"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="consent"
                                className="form-checkbox w-5 h-5 text-green-500"
                            />
                            <label htmlFor="consent" className="text-gray-700">
                                I consent to the AccessCareConnect Referral Foundation sharing
                                my information with healthcare providers to facilitate a
                                referral.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full text-black text-base bg-[#22E27F] px-6 py-3 rounded-full"
                        >
                            Submit and Get Connected
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetStartedForm;
