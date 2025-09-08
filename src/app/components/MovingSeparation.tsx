'use client';

import React from 'react';
import { 
  FaHeartbeat, FaStethoscope, FaSyringe, FaPills, FaMicroscope, 
  FaHospital, FaUserNurse, FaAmbulance, FaCapsules, FaNotesMedical 
} from 'react-icons/fa';
import { MdLocalPharmacy, MdHealthAndSafety } from 'react-icons/md';

const logos = [
  { id: 1, icon: FaHeartbeat, alt: 'Heartbeat Icon' },
  { id: 2, icon: FaStethoscope, alt: 'Stethoscope Icon' },
  { id: 3, icon: FaSyringe, alt: 'Syringe Icon' },
  { id: 4, icon: FaPills, alt: 'Pills Icon' },
  { id: 5, icon: FaMicroscope, alt: 'Microscope Icon' },
  { id: 6, icon: FaHospital, alt: 'Hospital Icon' },
  { id: 7, icon: FaUserNurse, alt: 'Nurse Icon' },
  { id: 8, icon: FaAmbulance, alt: 'Ambulance Icon' },
  { id: 9, icon: FaCapsules, alt: 'Capsules Icon' },
  { id: 10, icon: FaNotesMedical, alt: 'Medical Notes Icon' },
  { id: 11, icon: MdLocalPharmacy, alt: 'Pharmacy Icon' },
  { id: 12, icon: MdHealthAndSafety, alt: 'Health & Safety Icon' },
];

export default function MovingSeparation() {
  return (
    <div className="w-full bg-blue-50 overflow-hidden py-8 relative">
      {/* Fading edges for smooth look */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-blue-50 z-10 pointer-events-none"></div>

      {/* Scrolling container */}
      <div className="flex logo-scroll">
        {logos.concat(logos).map((logo, index) => {
          const Icon = logo.icon;
          return (
            <div key={`${logo.id}-${index}`} className="flex-shrink-0 mx-8">
              <Icon 
                className="h-12 w-auto text-blue-600 opacity-70 hover:opacity-100 transition-opacity duration-300"
                aria-label={logo.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
