import React, { useState, useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const ConnectSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3); // Default to 3 cards

    const cards = [
        {
            title: 'Access to Essential Care',
            description:
                'We ensure that patients from underserved communities and the middle class are connected to healthcare providers who can offer the care they need without barriers.',
            bgColor: 'bg-[#45E99E]', // Green background
        },
        {
            title: 'Streamlined Referral Process',
            description:
                'We work with trusted healthcare professionals and clinics to streamline the referral process, ensuring that patients receive timely and appropriate care.',
            bgColor: 'bg-[#DFFBEE]', // Light green background
        },
        {
            title: 'Personalized Support',
            description:
                'Our foundation focuses on each patient\'s unique needs, ensuring they receive the right care and ongoing support, every step of the way.',
            bgColor: 'bg-[#FFEAC8]', // Peach background
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    // Update visible card count based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1); // Show 1 card for small screens
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2); // Show 2 cards for medium screens
            } else {
                setVisibleCount(3); // Show 3 cards for large screens
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Set the initial value on component mount
        handleResize();

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Get visible cards based on visibleCount
    const visibleCards = Array.from({ length: visibleCount }, (_, index) =>
        cards[(currentIndex + index) % cards.length]
    );

    return (
        <section className="container mx-auto px-6 py-8 relative">
            <h2 className="text-3xl lg:text-6xl text-black font-semibold mb-8">How We Connect You to Care</h2>
            <div
                className={`grid gap-6 relative ${visibleCount === 1 ? 'grid-cols-1' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-3'
                    } items-end`}
            >
                {visibleCards.map((card, index) => (
                    <div
                        key={index}
                        className={`${card.bgColor} ${index === visibleCount - 1 ? 'h-[220px]' : 'h-[300px]'} 
                        rounded-[30px] p-6 flex flex-col justify-between`}
                    >
                        <h3 className="text-2xl lg:text-3xl font-semibold text-[#025788]">{card.title}</h3>
                        <p className="text-sm lg:text-base text-[#025788]">{card.description}</p>
                    </div>
                ))}
                {/* Arrow Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-[-2%] bottom-[30%] bg-black text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
                >
                    <AiOutlineRight size={24} />
                </button>

                {/* Learn More Text with Arrow */}
                <Link to="/learn-more" className="flex  items-center text-[#1D1D1D] text-lg font-semibold hover:text-[#1d72b8] transition">
                    Learn more
                    <IoIosArrowRoundForward  size={16} className="ml-2"/>

                </Link>
            </div>
        </section>
    );
};

export default ConnectSlide;
