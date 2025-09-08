import React from 'react';
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const HowItWorks = () => {
  const steps = [
    { number: 1, text: "Enter patient information and medical history into the AI system" },
    { number: 2, text: "Upload lab results, scans, or reports for AI-assisted analysis" },
    { number: 3, text: "Receive AI insights, diagnostic suggestions, and treatment recommendations" },
    { number: 4, text: "AI highlights potential risk factors and alerts healthcare providers" },
    { number: 5, text: "Share AI-generated reports securely with patients and medical staff" },
    { number: 6, text: "Track patient progress over time and update AI recommendations accordingly" }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`${anton.className}  text-gray-800 text-3xl md:text-5xl mb-6 md:mb-12 leading-tight`}>
          How <span className="text-blue-500">Medical AI</span> Works
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12">
          Simple steps to leverage AI for smarter healthcare decisions
        </p>

        {/* Grid layout: 3 columns on medium+ screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-3xl shadow-lg border-2 border-blue-200 transition-transform transform hover:scale-105"
              style={{
                background: `linear-gradient(180deg, rgba(219,234,254,1) 0%, rgba(191,219,254,1) 100%)`
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full text-white text-xl font-bold mb-4 mx-auto"
                style={{ backgroundColor: `rgba(59,130,246,0.8)` }}
              >
                {step.number}
              </div>
              <p className="text-base md:text-lg text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
