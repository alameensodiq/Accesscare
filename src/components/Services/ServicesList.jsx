import React from "react";
import education from "../../assets/img/Education.png";
import health from "../../assets/img/Health.png";
import advocate from "../../assets/img/advocacy.png";
import medical from "../../assets/img/medical.png";
import social from "../../assets/img/social.png";
import doctor from "../../assets/img/doctor.png";

const services = [
    {
        title: "Patient Support Programs",
        description: "We help patients navigate the often-complicated healthcare system by:",
        image: doctor,
        list: [
            "Assisting with scheduling appointments.",
            "Securing referrals to appropriate healthcare providers.",
            "Offering guidance to ensure patients receive timely and necessary care.",
        ],
        buttonText: "Access Care ",
        buttonLink: "/patient-support",
    },
    {
        title: "Healthcare Provider Partnerships",
        description: "We collaborate with clinics, hospitals, and community health centres to:",
        image: health,
        list: [
            "Ensure underserved populations can access affordable, high-quality care.",
            "Build a robust network of providers committed to healthcare equity.",
        ],
        buttonText: "Partner With Us",
        buttonLink: "/partner",
    },
    {
        title: "Educational Outreach",
        description: "Our outreach initiatives empower communities by:",
        image: education,
        list: [
            "Conducting workshops on healthcare access and wellness practices.",
            "Sharing resources to increase awareness of available healthcare and social services.",
            "Providing educational materials tailored to community needs.",
        ],
    },
    {
        title: "Advocacy and Policy Influence",
        description: "We address systemic barriers to healthcare by:",
        image: advocate,
        list: [
            "Advocating for reduced wait times and expanded preventive care.",
            "Promoting policies that improve healthcare access for underserved groups.",
            "Collaborating with stakeholders to drive meaningful change in healthcare equity.",
        ],
    },
    {
        title: "Social Service Connections",
        description: "Recognizing the role of social determinants in health outcomes, we:",
        image: social,
        list: [
            "Link individuals to housing support services.",
            "Connect families to food security programs and mental health resources.",
            "Assist with accessing community-based programs that promote overall well-being.",
        ],
        buttonText: "Access Benefits",
        buttonLink: "/soc",
    },
    {
        title: "Non-Emergency Medical Transportation",
        description: "We ensure patients have reliable transportation by:",
        image: medical,
        list: [
            "Coordinating non-emergency medical transport to healthcare appointments.",
            "Supporting access to critical services for individuals without reliable transportation.",
        ],
        buttonText: "Get Started",
        buttonLink: "/get-started",
    },
];

const ServicesList = () => {
    return (
        <div className="space-y-12 mx-auto">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`w-full flex justify-center items-center ${
                        index % 2 === 0 ? "bg-[#F6FEFA]" : "bg-white"
                    }`}
                >
                    <div
                        className={`flex flex-col gap-6 md:flex-row ${
                            index % 2 === 0 ? "" : "md:flex-row-reverse"
                        } w-full container py-12 rounded-lg`}
                    >
                        {/* Image Section */}
                        <div
                            className={`md:w-1/2 px-6 flex ${
                                index % 2 === 0
                                    ? "justify-start items-start"
                                    : "justify-end items-end"
                            }`}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full max-w-lg rounded-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="md:w-1/2 px-6 flex flex-col justify-center items-start space-y-4">
                            <h2 className="text-4xl lg:text-5xl font-medium text-[#1D1D1D] leading-10">
                                {service.title}
                            </h2>
                            <p className="text-[#43474F] text-base font-semibold leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="list-disc pl-5 text-[#616E87]">
                                {service.list.map((item, idx) => (
                                    <li key={idx} className="leading-9">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {/* Add Button to the first two and last two sections */}
                            {(index < 2 || index > 3) && (
                                <a
                                    href={service.buttonLink}
                                    className="mt-4 px-6 py-3 bg-[#22E27F] text-black rounded-full font-semibold hover:bg-[#1cc96a]"
                                >
                                    {service.buttonText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesList;
