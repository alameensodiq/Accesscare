import React from 'react';
import { Link } from "react-router-dom";
import news1 from "../../../assets/img/news1.png";
import news2 from "../../../assets/img/news2.png";


const NewsSection = () => {
    const cards = [
        {
            imgSrc: news1,
        },
        {
            imgSrc: news2,
        },
    ];

    return (
        <div className="py-16 px-16 bg-[#F6FEFA] flex flex-col items-start h-auto">
            <div className="container mx-auto  text-start mb-14">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#1D1D1D] leading-tight">
                    News And Events
                </h2>
                <p className="text-lg text-[#11112d] font-normal mt-4 leading-relaxed">
                    Stay updated on the latest news and upcoming events from AccessCareConnect Referral Foundation.
                </p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
                {cards.map((card, index) => (
                    <img
                        src={card.imgSrc}
                        alt={`Card ${index + 1}`}
                        className="w-full md:w-1/2 h-auto object-cover"
                    />

                ))}
            </div>
            <div className='container mx-auto '>
                <Link to="/news-events">
                    <p className="text-lg text-[#11112d] font-normal mt-2 leading-relaxed">
                        Explore our latest initiatives, community stories, and upcoming events.
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default NewsSection;
