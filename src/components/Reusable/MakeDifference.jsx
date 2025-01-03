import React from 'react'

const MakeDifference = ({title1, title2, description}) => {
    return (
        <div className="container mx-auto py-16 relative">

            <div className="flex lg:flex-row md:flex-col  flex-col justify-between lg:pl-20 lg:pt-15 pt-10">
                <div className="flex flex-col pt-4">
                    <h1 className="text-3xl lg:text-5xl  font-bold text-[#11112D] mb-4">
                         {title1}
                    </h1>
                    <h1 className="text-3xl lg:text-5xl font-bold text-[#11112D] mb-4">
                       {title2}
                    </h1>
                </div>
                <div className="flex flex-col w-[80%] lg:w-[50%] gap-8">
                    <p className="w-[100%] md:w-2/3 text-left text-lg text-[#11112d] font-normal mb-8">
                        {description}
                    </p>
                    <div className="flex flex-row lg:w-[50%] w-[100%] justify-between gap-4">
                        <button className="text-white lg:text-[12px] text-[10px] bg-[#45E99E] h-[40px]  rounded-[20px] w-[50%]">
                            Start Donating Now
                        </button>
                        <button className="text-[#45E99E] lg:text-[12px] text-[10px] bg-white h-[40px]  rounded-[20px] w-[50%] border-[#45E99E] border-[1px]">
                            Become a Volounteer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeDifference