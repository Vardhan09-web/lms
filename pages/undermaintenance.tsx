import React from 'react';
import Image from 'next/image';

const UnderMaintenance: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                {/* Maintenance Illustration */}
                <div className="relative w-64 h-64 mx-auto">
                    <Image 
                        src="/assets/undermaintenance/undermaintenance.jpg" 
                        alt="Under Maintenance" 
                    />
                </div>
                
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-800 mt-6">
                    We'll Be Back Soon!
                </h1>

                {/* Description */}
                <p className="text-gray-600 mt-4">
                    Our website is currently undergoing scheduled maintenance. 
                    We apologize for the inconvenience and appreciate your patience.
                </p>
                <p className="text-gray-500 mt-2">
                    Please check back later.
                </p>

                {/* Refresh Button */}
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

export default UnderMaintenance;
