"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/about-hero.jpg" // apni image path yahan daalna (public folder me rakhna)
          alt="Medicura AI Team"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase">
              About Us
            </h2>
            <hr className="w-16 border-4 border-blue-500 mb-4 rounded-full mx-auto" />
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-snug">
              We are a team of healthcare innovators
              <br /> bringing AI to medical assistance
            </h3>
            <p className="mt-4 text-gray-600">
              At Medicura AI, we are passionate about transforming healthcare
              with Artificial Intelligence to make medical guidance accessible,
              reliable, and efficient for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 z-10 flex justify-center">
        <div className="grid grid-cols-3 gap-6 bg-blue-600 text-white py-6 px-10 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">12+</h2>
            <p className="text-sm md:text-base font-medium">AI Features</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">18+</h2>
            <p className="text-sm md:text-base font-medium">Medical Tools</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">30+</h2>
            <p className="text-sm md:text-base font-medium">Experts Engaged</p>
          </div>
        </div>
      </div>

      {/* About + Mission */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-blue-700">ABOUT US</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            A trusted AI-powered medical assistant
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Medicura AI is a digital healthcare companion that helps analyze
            symptoms, check drug interactions, summarize medical reports, and
            provide accessible health insights. We aim to assist patients and
            healthcare professionals with intelligent tools that save time and
            improve decision-making.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-700">OUR MISSION</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            Making healthcare accessible for all
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to democratize healthcare by combining artificial
            intelligence with medical expertise. We want to empower individuals
            worldwide with easy-to-use tools that simplify healthcare and ensure
            reliable support when they need it the most.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl font-bold text-blue-700">Our Team</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2">
              Driven by Innovation in Healthcare
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team is a diverse group of doctors, AI specialists, and
              innovators committed to improving healthcare delivery. Together,
              we combine technology and compassion to create impactful solutions
              for patients and professionals alike.
            </p>
          </div>
          <Image
            src="/team.jpg" // apni image path yahan daalna
            alt="Medicura AI Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Why We Started */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/started.jpg" // apni image path yahan daalna
          alt="Why We Started"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-xl font-bold text-blue-700">Why We Started</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            A vision to transform healthcare
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Medicura AI was born out of a mission to make healthcare smarter and
            more accessible. With rising healthcare challenges, we envisioned a
            platform that integrates AI to support medical needs—from basic
            symptom analysis to advanced drug safety checks—helping people take
            control of their health.
          </p>
        </div>
      </div>
    </div>
  );
}
