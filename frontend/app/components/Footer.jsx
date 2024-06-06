import React from 'react';
import { CiLinkedin, CiInstagram, CiFacebook, CiYoutube } from "react-icons/ci";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
    return (
        <div className="flex justify-between p-5 border-t-2 mx-2 mt-10">
            <div className="flex flex-col">
                <div className="font-bold text-2xl">Orus Ilyas Lab</div>
                <div className="mt-2 flex">
                    {/* Add your social media icons here */}
                    <CiLinkedin className='text-3xl mx-1 hover:font-bold' />
                    <CiInstagram className='text-3xl mx-1 hover:font-bold' />
                    <CiFacebook className='text-3xl mx-1 hover:font-bold' />
                    <FaGoogleScholar className='text-3xl mx-1 hover:font-bold' />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mb-2">
                    {/* Add your contact information here */}
                </div>
                <div className="flex flex-row">
                    <Link href="/about"><p href="/about" className="mb-1 text-gray-700 hover:text-gray-900 mx-2 hover:font-bold hover:border-b-2 hover:border-yellow-400">About</p></Link>
                    <Link href="/people"><p href="/people" className="mb-1 text-gray-700 hover:text-gray-900 mx-2 hover:font-bold hover:border-b-2 hover:border-yellow-400">People</p></Link>
                    <Link href="/contactus"><p href="/contact" className="mb-1 text-gray-700 hover:text-gray-900 mx-2 hover:font-bold hover:border-b-2 hover:border-yellow-400">Contact</p></Link>
                    <Link href="/research"><p href="/research" className="text-gray-700 hover:text-gray-900 mx-2 hover:font-bold hover:border-b-2 hover:border-yellow-400">Research</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer

