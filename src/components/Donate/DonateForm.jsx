import React, { useState } from 'react';

const DonateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='bg-[#F6FEFA]'>
            <div className="max-w-xl mx-auto py-16 px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#11112D] mb-8 text-center">
                    Donate Now!
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name*"
                        className="w-full px-4 py-2 border-b border-[#000000CC] bg-[#F6FEFA] focus:outline-none focus:border-[#22E27F] text-[#757575]"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email*"
                        className="w-full px-4 py-2 border-b border-[#000000CC] bg-[#F6FEFA] focus:outline-none focus:border-[#22E27F] text-[#757575]"
                        required
                    />
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="Donation amount*"
                        className="w-full px-4 py-2 border-b border-[#000000CC] bg-[#F6FEFA] focus:outline-none focus:border-[#22E27F] text-[#757575]"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        required
                        onChange={handleInputChange}
                        placeholder="Your Message*"
                        className="w-full px-4 py-2 border-b border-[#000000CC] bg-[#F6FEFA] focus:outline-none focus:border-[#22E27F] text-[#757575]"
                    />

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full text-white bg-[#22E27F] px-6 py-3 rounded-full text-lg"
                        >
                            Donate Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonateForm;
