import React from 'react';
import { Link } from 'react-router-dom'; 


const MakeDifference = () => {
    return (


        <div className="flex flex-col lg:flex-row justify-between  mx-8 lg:pl-20 lg:pt-15 pt-10">
            <div className="w-full flex flex-col pt-4">
                <h1 className="text-3xl lg:text-5xl  font-bold text-[#11112D] mb-4">
                    Why Get
                </h1>
                <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D] mb-4">
                    Involved?
                </h1>
            </div>
            <div className="flex flex-col w-full gap-8">

                <ul className="w-full text-left text-lg text-[#11112d] font-normal list-disc pl-5 space-y-4">
                    <li>
                        Be part of a compassionate community making a tangible impact.
                    </li>
                    <li>
                        Help us advocate for and provide equitable healthcare.
                    </li>
                    <li>
                        Join a cause that’s transforming lives every day.
                    </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Link to /donate */}
                    <Link
                        to="/donate"
                        className="text-white text-base bg-[#22E27F] px-6 py-3 rounded-full"
                    >
                        Start Donating Now
                    </Link>
                    {/* Link to /volunteer */}
                    <Link
                        to="/volunteer"
                        className="text-[#22E27F] text-base bg-white px-6 py-3 rounded-full border-[#22E27F] border"
                    >
                        Become a Volunteer
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default MakeDifference