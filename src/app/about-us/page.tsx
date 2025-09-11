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
          <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-2xl">
            <h2 className="text-sm font-bold text-green-600 uppercase">About Us</h2>
            <hr className="w-16 border-4 border-green-500 mb-4 rounded-full mx-auto" />
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-snug">
              We are a team of content writers who share their learnings.
            </h3>
            <p className="mt-4 text-gray-600">
              We are a passionate group of individuals dedicated to creating meaningful content that helps people learn and grow. Through our writing, we aim to inform, educate, and inspire.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 z-10 flex justify-center">
        <div className="grid grid-cols-3 gap-6 bg-gray-400 text-white py-6 px-10 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">12+</h2>
            <p className="text-sm md:text-base font-medium">Blogs Published</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">18+</h2>
            <p className="text-sm md:text-base font-medium">Views on Finweet</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold">30+</h2>
            <p className="text-sm md:text-base font-medium">Total Active Users</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-4 bg-gray-300 mt-4">
        <div className="w-1/3 h-full bg-green-500"></div>
      </div>

      {/* About + Mission */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-700">ABOUT US</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            We are a community of content writers who share their learnings
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="text-green-600 mt-4 inline-block">Read More</a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-700">OUR MISSION</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            Creating valuable content for creatives all around the world
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl font-bold text-yellow-600">Our Team of Creatives</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2">
              We are dedicated to excellence, combining our expertise and passion to create innovative and impactful solutions.
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team consists of professionals from various fields, each bringing their unique skills and perspective. We work collaboratively, driven by a shared goal of delivering exceptional work that resonates with our audience. From conceptualization to execution, we strive for creativity and quality in every project we undertake. Together, we turn ideas into reality.
            </p>
          </div>
          <Image
            src="/team.jpg" // Replace with your team image path
            alt="Team of Creatives"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Why We Started */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/started.jpg" // Replace with your started image path
          alt="Why We Started"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-xl font-bold text-purple-700">Why we started this blog</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-2">
            Our journey began with a passion to share insights and connect with like-minded individuals.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            This blog was born out of a desire to provide valuable content to readers across the globe. We wanted to create a space where we could share our knowledge, experiences, and ideas on topics that matter most to us and our community. From personal stories to expert advice, our goal is to inspire, inform, and spark meaningful conversations. Whether you are here to learn something new, get motivated, or simply enjoy great content, we welcome you to join us on this exciting journey.
          </p>
        </div>
      </div>
    </div>
  );
}
