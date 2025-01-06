import React from 'react';
import education from "../../assets/img/Education.png";
import health from "../../assets/img/Health.png";
import advocate from "../../assets/img/advocacy.png";
import medical from "../../assets/img/medical.png";
import social from "../../assets/img/social.png";
import doctor from "../../assets/img/doctor.png";

const services = [
    {
        title: 'Educational Outreach',
        description: 'Our outreach initiatives empower communities by:',
        image: education,
        list: ['Conducting workshops on healthcare access and wellness practices.',
            'Sharing resources to increase awareness of available healthcare and social services.',
            'Providing educational materials tailored to community needs.'],
    },
    {
        title: 'Healthcare Provider Partnerships',
        description: 'We collaborate with clinics, hospitals, and community health centres to:',
        image: health,
        list: ['Ensure underserved populations can access affordable, high-quality care.',
            'Build a robust network of providers committed to healthcare equity.'],
    },
    {
        title: 'Social Service Connections',
        description: 'Recognizing the role of social determinants in health outcomes, we:',
        image: social,
        list: ['Link individuals to housing support services',
            'Connect families to food security programs and mental health resources',
            'Assist with accessing community-based programs that promote overall well-being'],
    },
    {
        title: 'Advocacy and Policy Influence',
        description: 'We address systemic barriers to healthcare by:',
        image: advocate,
        list: ['Advocating for reduced wait times and expanded preventive care.',
            'Promoting policies that improve healthcare access for underserved groups.',
            'Collaborating with stakeholders to drive meaningful change in healthcare equity.'],
    },
    {
        title: 'Non-Emergency Medical Transportation',
        description: 'We ensure patients have reliable transportation by:',
        image: medical,
        list: ['Coordinating non-emergency medical transport to healthcare appointments.',
            'Supporting access to critical services for individuals without reliable transportation'],
    },
    {
        title: 'Patient Support Programs',
        description: 'We help patients navigate the often-complicated healthcare system by:',
        image: doctor,
        list: ['Assisting with scheduling appointments.',
            'Securing referrals to appropriate healthcare providers.',
            'Offering guidance to ensure patients receive timely and necessary care'],
    },
];

const ServicesList = () => {
    return (
        <div className="space-y-12">
            <div>


                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'bg-[#F6FEFA]' : 'bg-white'
                            } ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } w-full py-12 px-6`}
                    >
                        {/* Text Section */}
                        <div className="md:w-1/2 pl-20 px-6 flex flex-col justify-center space-y-4">
                            <h2 className="w-full md:w-2/3 text-4xl md:text-5xl font-medium text-[#1D1D1D] leading-tight">
                                {service.title}
                            </h2>
                            <p className="text-[#43474F] text-base font-semibold leading-relaxed">{service.description}</p>
                            <ul className="list-disc pl-5 text-[#616E87]">
                                {service.list.map((item, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="md:w-1/2 px-6 flex justify-center">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesList;
