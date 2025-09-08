"use client";

import React from "react";

// CV, Resume, and AI job-related topics
const topRowPills = [
  "AI-Powered Resume Builder",
  "ATS-Friendly CV Templates",
  "Professional Resume Design",
  "Career Objective Writing",
  "Skills Section Optimization",
  "Work Experience Formatting",
  "Achievement Quantification",
  "Industry-Specific Resumes",
];

const midRowPills = [
  "Executive CV Creation",
  "Technical Skills Showcase",
  "Leadership Experience Highlighting",
  "Career Gap Solutions",
  "Professional Summary Writing",
  "Education Section Enhancement",
  "Certification Placement",
  "Portfolio Integration",
];

const bottomRowPills = [
  "Interview Preparation Guide",
  "Salary Negotiation Tips",
  "LinkedIn Profile Optimization",
  "Cover Letter Automation",
  "Job Market Analysis",
  "Career Transition Support",
  "Personal Branding Strategy",
  "AI Job Matching",
];

export default function MovingPills() {
  const sectionBgColorClass = "bg-white dark:bg-neutral-950";
  const fadeColorClass = "from-white dark:from-neutral-950";

  return (
    <section
      className={`w-full py-16 ${sectionBgColorClass} text-black dark:text-white overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto space-y-5 lg:space-y-8">
        {/* Top Row: Left to Right */}
        <div className="flex overflow-hidden relative">
          <div
            className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r ${fadeColorClass} to-transparent z-10 pointer-events-none`}
          ></div>
          <div
            className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l ${fadeColorClass} to-transparent z-10 pointer-events-none`}
          ></div>
          <div className="flex animate-scroll-ltr">
            {topRowPills.concat(topRowPills).map((text, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-4 lg:px-6 py-2 lg:py-3 border bg-blue-500/20 dark:bg-neutral-800 text-blue-700 dark:text-neutral-200 rounded-full text-sm md:text-lg font-light shadow-md"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Row: Right to Left */}
        <div className="flex overflow-hidden relative justify-end">
          <div
            className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r ${fadeColorClass} to-transparent z-10 pointer-events-none`}
          ></div>
          <div
            className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l ${fadeColorClass} to-transparent z-10 pointer-events-none`}
          ></div>
          <div className="flex animate-scroll-rtl">
            {midRowPills.concat(midRowPills).map((text, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-4 lg:px-6 py-2 lg:py-3 border bg-blue-400/20 dark:bg-neutral-800 text-blue-700 dark:text-neutral-200 rounded-full text-sm md:text-lg font-light shadow-md"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Left to Right */}
        <div className="flex overflow-hidden relative">
          <div
            className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r ${fadeColorClass} to-transparent z-10 pointer-events-none`}
          ></div>
          <div
            className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l ${fadeColorClass} to-transparent z-10 pointer-events-none`}
          ></div>
          <div className="flex animate-scroll-ltr">
            {bottomRowPills.concat(bottomRowPills).map((text, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 px-4 lg:px-6 py-2 lg:py-3 border bg-blue-300/30 dark:bg-neutral-800 text-blue-700 dark:text-neutral-200 rounded-full text-sm md:text-lg font-light shadow-md"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
