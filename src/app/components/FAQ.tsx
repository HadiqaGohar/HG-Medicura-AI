"use client";

import { Anton } from "next/font/google";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const faqs = [
  {
    category: "Medical AI Tools",
    questions: [
      {
        question: "How can AI assist doctors in patient diagnosis?",
        answer:
          "AI can analyze patient data, medical images, and lab results to provide diagnostic suggestions, highlight anomalies, and help prioritize cases.",
      },
      {
        question: "Is AI safe to use in healthcare?",
        answer:
          "Yes, AI is designed to support, not replace, healthcare professionals. All recommendations are reviewed by doctors, ensuring patient safety.",
      },
      {
        question: "Can AI help in predicting disease outbreaks?",
        answer:
          "Absolutely! AI models can track trends, detect early warning signs, and forecast potential outbreaks using historical and real-time data.",
      },
      {
        question: "Do I need special training to use AI medical tools?",
        answer:
          "Most AI tools are designed with user-friendly interfaces. Basic training is recommended to interpret AI insights effectively.",
      },
      {
        question: "How is patient data protected when using AI?",
        answer:
          "All patient data is encrypted and anonymized. AI tools comply with healthcare privacy regulations such as HIPAA to ensure data security.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500  to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiHelpCircle className="w-8 h-8 text-white" />
          </div>
          <h3
            className={`${anton.className} mt-10 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}
          >
            {/* className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"> */}
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about medical AI tools
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300  px-6 py-4">
                <h2 className="text-2xl font-bold text-white">
                  {category.category}
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems.includes(itemId);

                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-2 -m-2"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <FiChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <FiChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="mt-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
