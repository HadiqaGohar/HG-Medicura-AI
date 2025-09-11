"use client";

import React from "react";
import Image from "next/image";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div className="font-sans min-h-screen justify-center items-center flex flex-col text-gray-900 bg-gray-50">
      {/* Hero Section */}
          <section className="relative w-full h-[300px] sm:h-[500px] mx-auto justify-center items-center my-8 flex">
        <Image
          src="/ai.jpeg"
          alt="Medicura AI Team"
          // fill
          height={300}
          width={1000}
          className="object-cover opacity-85"
          priority
        />
      </section>

      {/* Stats Section */}
      <section className="bg-transparent mt-4 md:-mt-5 relative z-20 px-4">
        <div className="max-w-2xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 p-8 shadow-lg rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold">12+</h2>
            <p className="mt-2 text-blue-100">AI Features</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold">18+</h2>
            <p className="mt-2 text-blue-100">Medical Tools</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold">30+</h2>
            <p className="mt-2 text-blue-100">Experts Engaged</p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="w-full max-w-[400px] mx-auto h-2 bg-gray-300 mt-6 md:mt-2">
        <div className="w-1/3 h-full bg-blue-500"></div>
      </div>

      {/* About + Mission Section */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-8 bg-white">
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600">ABOUT US</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-1">
            We are a community of content writers who share their learnings
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Read More</a>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600">OUR MISSION</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-1">
            Creating valuable content for creatives all around the world
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="#" className="text-blue-600 text-sm mt-2 inline-block">Read More</a>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="mt-10 max-w-5xl  rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 py-20 text-white mx-4">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-lg uppercase tracking-widest font-bold text-blue-200">
            Our Mission
          </h2>
          <h3 className="text-3xl md:text-3xl font-extrabold mt-3">
            Making healthcare accessible for everyone
          </h3>
          <p className="mt-6 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            We believe in democratizing healthcare. By combining AI technology
            with medical expertise, Medicura AI empowers individuals worldwide
            with reliable insights and easy-to-use tools, ensuring help is
            always within reach.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
          <Image src="/team.png" alt="Team" fill className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-blue-600 font-bold text-lg">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-2">
            Innovators in AI & Healthcare
          </h3>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Behind Medicura AI is a team of doctors, AI researchers, and
            engineers dedicated to building impactful solutions. We combine
            compassion and innovation to help millions worldwide take control of
            their health.
          </p>
        </div>
      </section>

      {/* Why We Started */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-600 font-bold text-lg">Why We Started</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mt-2">
              Transforming healthcare with AI
            </h3>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Medicura AI was born out of the belief that healthcare should be
              simple, reliable, and available to everyone. Our journey began
              with a vision to provide AI-driven solutions that empower
              individuals with instant health insights, making healthcare less
              complicated and more human.
            </p>
          </div>
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/doc.png"
              alt="Why We Started"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      <Banner />
    </div>
  );
}
