import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-10 py-8 rounded-2xl 
                    bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 
                    flex flex-col md:flex-row items-center justify-between shadow-lg">
      <h2 className="text-white text-2xl md:text-3xl font-medium leading-snug mb-4 md:mb-0">
        Transform Your <span className="font-extrabold">Healthcare</span> Experience with <br /> <b>Smart</b> AI Solutions!
      </h2>
      <button className="ml-0 md:ml-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Banner;
