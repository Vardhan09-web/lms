import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import  './globals.css'

const UnderMaintenance: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 p-6">
            {/* Maintenance Illustration */}
            <div className="relative w-full md:w-1/2 h-auto flex justify-center">
                <Image 
                    src="/assets/undermaintenance/undermaintenance.jpg" 
                    alt="Under Maintenance" 
                    width={600}
                    height={600}
                    priority
                    className="rounded-lg"
                />
            </div>

            {/* Text and Button Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-6">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    This Site is Under Maintenance
                </h1>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                    Our website is currently undergoing scheduled maintenance. <br/>
                    We apologize for the inconvenience and appreciate your patience.
                </p>

                {/* Button */}
                <Link href="/">
                    <button
                        className="px-6 py-3  text-white border border-lightBlue bg-lightBlue font-medium text-sm rounded-lg hover:bg-Orange hover:border hover:border-Orange hover:text-white transition"
                    >
                        Go back to Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UnderMaintenance;
