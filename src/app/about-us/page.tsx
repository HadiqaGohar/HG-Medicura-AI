import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/about-hero.jpg" // Replace with your hero image path
          alt="Team Celebrating"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl">
            <h2 className="text-sm font-bold text-green-600 uppercase">About Us</h2>
            <hr className="w-12 border-2 border-green-500 mb-2 rounded-full mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight">
              We are a team of content writers who share their learnings.
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We are passionate about creating meaningful content to inform and inspire.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12 z-10 flex justify-center">
        <div className="grid grid-cols-3 gap-4 bg-gray-400 text-white py-4 px-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">12+</h2>
            <p className="text-xs md:text-sm font-medium">Blogs Published</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">18+</h2>
            <p className="text-xs md:text-sm font-medium">Views on Finweet</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold">30+</h2>
            <p className="text-xs md:text-sm font-medium">Total Active Users</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-300 mt-2">
        <div className="w-1/3 h-full bg-green-500"></div>
      </div>

      {/* About + Mission */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-green-700">ABOUT US</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-1">
            We are a community of content writers who share their learnings
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="text-green-600 text-sm mt-2 inline-block">Read More</a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-bold text-green-700">OUR MISSION</h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-1">
            Creating valuable content for creatives all around the world
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
