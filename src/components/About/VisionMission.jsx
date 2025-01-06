import React from "react";

const VisionMission = () => {
    const cards = [
        {
            title: "Our Mission",
            description:
                "To ensure equitable healthcare access for all by creating pathways that connect patients to the services they need while addressing systemic barriers to care.",

            bgColor: "#45E99E",
        },
        {
            title: "Our Vision",
            description:
                "A world where healthcare is accessible, affordable, and equitable for everyone, especially those who are often overlooked by traditional healthcare systems.",
            bgColor: "#DFFBEE",
        },
    ];

    return (
        <div
            className="py-16 px-8 bg-[#F6FEFA] h-auto"
        //   style={{ backgroundColor: "#F6FEFA" }}
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="md:h-[300px] lg:h-[250px] flex flex-col justify-between items-start p-8 rounded-[30px] shadow-md"
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
        </div>
    );
};

export default VisionMission;
