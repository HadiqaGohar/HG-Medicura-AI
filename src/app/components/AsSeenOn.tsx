// components/AsSeenOn.js
import React from 'react';
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

// const logos = [
//   { src: '/images/logo-1.png', alt: 'TechCrunch Logo' },
//   { src: '/images/logo-2.png', alt: 'Forbes Logo' },
//   { src: '/images/logo-3.png', alt: 'The Verge Logo' },
//   { src: '/images/logo-4.png', alt: 'Fast Company Logo' },
//   { src: '/images/logo-5.png', alt: 'Wired Logo' },
// ];

const AsSeenOn = () => {
  return (
    <div className="bg-blue-50 py-12 mt-8">
      
      {/* Stats Section */}
      <section className="bg-blue-100 w-full py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          
          <div className="flex flex-col items-center">
            <p className={`${anton.className} text-gray-800 text-4xl sm:text-5xl md:text-6xl`}>24/7</p>
            <p className="text-gray-800 text-xs sm:text-lg md:text-xl font-light mt-2">AI Health Support</p>
          </div>

          <div className="flex flex-col items-center">
            <p className={`${anton.className} text-gray-800 text-4xl sm:text-5xl md:text-6xl`}>50k+</p>
            <p className="text-gray-800 text-xs sm:text-lg md:text-xl font-light mt-2">Symptoms Checked</p>
          </div>

          <div className="flex flex-col items-center">
            <p className={`${anton.className} text-gray-800 text-4xl sm:text-5xl md:text-6xl`}>92%</p>
            <p className="text-gray-800 text-xs sm:text-lg md:text-xl font-light mt-2">User Satisfaction</p>
          </div>

          <div className="flex flex-col items-center">
            <p className={`${anton.className} text-gray-800 text-4xl sm:text-5xl md:text-6xl`}>30+</p>
            <p className="text-gray-800 text-xs sm:text-lg md:text-xl font-light mt-2">Health Supported</p>
          </div>

        </div>
      </section>

      {/* Logos Section */}
      {/* <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-gray-700 text-lg font-semibold uppercase tracking-wide">
          As Seen On
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="grayscale hover:grayscale-0 transition duration-300 object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default AsSeenOn;
