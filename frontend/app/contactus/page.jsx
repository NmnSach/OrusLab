import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className='flex justify-center items-center'>

            <div className="flex flex-col md:flex-row items-center justify-center p-8 w-10/12">

                {/* Form */}
                <div className="w-full md:w-5/12 p-4 flex flex-col justify-center items-center">
                    <div className='flex flex-col justify-start items-start w-full'>
                        <h2 className=' text-2xl sm:text-5xl font-bold my-5 underline decoration-yellow-400'>About</h2>
                        <p className='text-[#828282] my-2 text-sm sm:text-lg w-full'>
                            Send us your details and we&apos;ll be in touch with you shortly.
                        </p>
                    </div>
                    <form className="space-y-4 w-full">
                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-1/2 p-2 border border-gray-300 rounded my-2"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-1/2 p-2 border border-gray-300 rounded my-2"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your message"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="5"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-black text-white rounded hover:bg-yellow-400"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Image */}
                <div className="w-full md:w-6/12 p-4 flex justify-center items-center">
                    <Image
                        src="/contact-2.jpg"
                        alt="Contact Us"
                        className="rounded shadow-lg"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
