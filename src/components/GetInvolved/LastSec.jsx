import React from 'react'

const MakeDifference = () => {
    return (
        <div>

            <div className="flex flex-col lg:flex-row justify-between lg:pl-20 lg:pt-15 pt-10">
                <div className="w-full flex flex-col pt-4">
                    <h1 className="text-3xl lg:text-5xl  font-bold text-[#11112D] mb-4">
                        Why Get
                    </h1>
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D] mb-4">
                        Involved?
                    </h1>
                </div>
                <div className="flex flex-col w-full gap-8">

                    <ul className="w-[100%] md:w-2/3 text-left text-lg text-[#11112d] font-normal list-disc pl-5 space-y-4">
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
                        <button className="text-white text-base bg-[#45E99E] px-6 py-3  rounded-full">
                            Start Donating Now
                        </button>
                        <button className="text-[#45E99E] text-base bg-white px-6 py-3  rounded-full border-[#45E99E] border-[1px]">
                            Become a Volounteer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeDifference