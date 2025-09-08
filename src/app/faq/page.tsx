'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiMail, FiMessageCircle } from 'react-icons/fi';
import Link from 'next/link';
const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I create my first resume with HG Resume Builder?',
        answer: 'Getting started is easy! Simply click "CREATE RESUME" on our homepage, choose a template, and follow our guided process. You can either build from scratch or upload an existing resume to get started quickly.'
      },
      {
        question: 'Is HG Resume Builder really free?',
        answer: 'Yes! HG Resume Builder is completely free to use. You can create, edit, and download your professional resume without any cost. We believe everyone deserves access to quality resume building tools.'
      },
      {
        question: 'Do I need to create an account?',
        answer: 'No account required! You can start building your resume immediately. Your data is stored locally in your browser, so you can continue working on it anytime you return to the site.'
      }
    ]
  },
  {
    category: 'Templates & Design',
    questions: [
      {
        question: 'Are the templates ATS-friendly?',
        answer: 'Absolutely! All our templates are designed to be ATS (Applicant Tracking System) friendly. They use proper formatting, standard fonts, and clear section headers that ATS systems can easily parse.'
      },
      {
        question: 'Can I customize the colors and fonts?',
        answer: 'Yes! You can customize header colors, font styles, and font sizes for different sections of your resume. Our Template 1 (Chameleon Pro) offers extensive customization options.'
      },
      {
        question: 'How many templates are available?',
        answer: 'We currently have 1 fully functional professional template with more coming soon! Our focus is on quality over quantity - each template is carefully designed and tested.'
      }
    ]
  },
  {
    category: 'AI Features',
    questions: [
      {
        question: 'How does the AI resume generation work?',
        answer: 'Our AI analyzes your education, skills, and experience to generate professional summaries and suggest relevant skills for your profession. It helps optimize your resume content for better job matching.'
      },
      {
        question: 'Can AI help improve my existing resume?',
        answer: 'Yes! Upload your existing resume and our AI will extract the information, suggest improvements, and help you optimize it for better ATS compatibility and professional presentation.'
      },
      {
        question: 'Is my data safe when using AI features?',
        answer: 'Your privacy is our priority. We process your data securely and don\'t store personal information permanently. All AI processing is done to help you create better resumes.'
      }
    ]
  },
  {
    category: 'Technical Support',
    questions: [
      {
        question: 'What file formats can I upload?',
        answer: 'You can upload PDF and Word (.docx) files. Our system will automatically extract the text and information from your existing resume.'
      },
      {
        question: 'In what formats can I download my resume?',
        answer: 'Currently, you can download your resume as a PDF. We\'re working on adding more export formats like Word and plain text.'
      },
      {
        question: 'Why am I losing focus when typing in input fields?',
        answer: 'This was a known issue that has been fixed! You should now be able to type continuously in all input fields without losing focus. If you still experience this, try refreshing the page.'
      },
      {
        question: 'The preview is not showing - what should I do?',
        answer: 'The live preview is now available! Go to Dashboard → Preview tab to see your resume in real-time. If it\'s not loading, make sure you have some basic information filled in.'
      }
    ]
  },
  {
    category: 'About the Creator',
    questions: [
      {
        question: 'Who created HG Resume Builder?',
        answer: 'HG Resume Builder was created by Hadiqa Gohar, a talented Student Leader, Web Developer, Agentic AI Developer, UI/UX Specialist, and SEO Expert. She\'s a Student Leader at the Governor Sindh Initiative for AI & Computing.'
      },
      {
        question: 'How can I contact the creator?',
        answer: 'You can connect with Hadiqa Gohar through her GitHub (github.com/HadiqaGohar), LinkedIn, or visit our About page to learn more about her background and achievements.'
      },
      {
        question: 'Is this an open-source project?',
        answer: 'The project showcases Hadiqa\'s skills in modern web development using Next.js, TypeScript, TailwindCSS, and AI integration. You can find more of her work on her GitHub profile.'
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiHelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about HG Resume Builder, created by Hadiqa Gohar
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-2 -m-2"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <FiChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <FiChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
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

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
           {" Can't find what you're looking for? We're here to help!"}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <FiMail className="mr-2" />
              Contact Us
            </Link>
            
            <button
              onClick={() => {
                // This would open the chatbot
                const chatbotButton = document.querySelector('[data-chatbot-toggle]') as HTMLElement;
                if (chatbotButton) {
                  chatbotButton.click();
                }
              }}
              className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <FiMessageCircle className="mr-2" />
              Chat with AI Assistant
            </button>
          </div>
        </div>

        {/* Creator Credit */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            HG Resume Builder is created with ❤️ by{' '}
            <Link href="/about" className="text-purple-600 hover:underline font-semibold">
              Hadiqa Gohar
            </Link>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Student Leader | Web Developer | AI Developer | UI/UX Specialist
          </p>
        </div>
      </div>
    </div>
  );
}