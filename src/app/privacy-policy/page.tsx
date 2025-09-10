// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function PrivacyPolicy() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-12 font-sans">
//       <div className="max-w-4xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-10"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1 bg-violet-100 text-sm font-semibold text-gray-900 rounded-full mb-6">
//             <span className="w-3 h-3 bg-violet-500 rounded-full shadow-md"></span>
//             <span>PRIVACY POLICY</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mt-4">
//             We Value Your Trust
//           </h2>

//           <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mt-4">
//             Resume Generator is committed to protecting your privacy. Learn how
//             we handle your data with transparency and care.
//           </p>
//         </motion.div>

//         {/* Decorative Bar */}

//         <div className="flex justify-center mb-12">
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full w-3/4 h-2 shadow-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//         {/* Policy Content */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-8"
//         >
//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               1. Information We Collect
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               We collect data you provide, like your name, email, and resume
//               details, when you use our platform, upload documents, or contact
//               support.
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               2. How We Use Your Information
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               Your data helps us:
//               <ul className="list-disc pl-6 mt-2 space-y-1">
//                 <li>Generate and customize your resume.</li>
//                 <li>Provide personalized support and responses.</li>
//                 <li>Enhance our platform’s features.</li>
//                 <li>Send updates or promotions (with your permission).</li>
//               </ul>
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               3. Data Sharing
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               We don’t sell your data. We may share it with:
//               <ul className="list-disc pl-6 mt-2 space-y-1">
//                 <li>
//                   Trusted service providers for platform operations (e.g.,
//                   hosting).
//                 </li>
//                 <li>Legal authorities when required by law.</li>
//               </ul>
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               4. Data Security
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               We use encryption and secure servers to protect your data. While
//               we strive for top security, we recommend using strong passwords to
//               keep your account safe.
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               5. Your Rights
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               You can:
//               <ul className="list-disc pl-6 mt-2 space-y-1">
//                 <li>Access, edit, or delete your data.</li>
//                 <li>Opt out of promotional emails.</li>
//                 <li>Contact us with privacy concerns.</li>
//               </ul>
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               6. Cookies
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               We use cookies to improve your experience, like saving
//               preferences. Manage cookies via your browser settings.
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               7. Changes to This Policy
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               We may update this policy and will notify you by posting changes
//               here with an updated effective date.
//             </p>
//           </section>

//           <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-3">
//               8. Contact Us
//             </h2>
//             <p className="text-gray-600 text-base sm:text-lg">
//               Have questions? Reach out via our{" "}
//               <Link
//                 href="/contact"
//                 className="text-purple-600 hover:underline font-semibold"
//               >
//                 Contact Page
//               </Link>
//               .
//             </p>
//           </section>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex justify-center gap-4 mt-10"
//         >
//           <Link href="/template">
//             <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 sm:px-10 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition duration-300 shadow-md">
//               Create Your CV
//             </button>
//           </Link>
//           <Link href="/contact">
//             <button className="bg-white border-2 border-purple-600 text-purple-600 px-8 sm:px-10 py-3 rounded-full font-semibold hover:bg-purple-100 hover:border-purple-700 transition duration-300 shadow-md">
//               Contact Us
//             </button>
//           </Link>
//         </motion.div>

//         {/* Decorative Curve */}
//         {/* <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="flex justify-center mt-10"
//         >
//           <svg
//             width="60"
//             height="60"
//             viewBox="0 0 60 40"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5 35C20 15 40 15 55 35"
//               stroke="#7B61FF"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />
//             <circle cx="55" cy="35" r="4" fill="#7B61FF" />
//           </svg>
//         </motion.div> */}
//       </div>
//     </main>
//   );
// }




"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-violet-100 text-sm font-semibold text-gray-900 rounded-full mb-6">
            <span className="w-3 h-3 bg-violet-500 rounded-full shadow-md"></span>
            <span>PRIVACY POLICY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mt-4">
            Your Health Data, Our Responsibility
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mt-4">
            Medicura-AI is committed to safeguarding your medical information.
            Learn how we protect your privacy while delivering AI-powered
            healthcare solutions.
          </p>
        </motion.div>

        {/* Decorative Bar */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full w-3/4 h-2 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Policy Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-8"
        >
          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We collect health-related data such as:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Symptoms you provide for AI analysis.</li>
                <li>Uploaded medical reports and prescriptions.</li>
                <li>Basic personal details (name, email, contact).</li>
                <li>Emergency contact details (if provided).</li>
              </ul>
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Your data helps us:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide AI-powered symptom analysis.</li>
                <li>Check drug interactions safely.</li>
                <li>Summarize and interpret medical reports.</li>
                <li>Offer personalized health recommendations.</li>
                <li>Assist in emergency contact services.</li>
              </ul>
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              3. Data Sharing
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We do not sell your data. Limited sharing may occur with:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Trusted cloud and security providers for system operations.
                </li>
                <li>Medical experts if you explicitly request consultation.</li>
                <li>Legal authorities when required by law.</li>
              </ul>
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              4. Data Security
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We use encryption, secure servers, and healthcare data standards
              (like HIPAA/GDPR compliance) to protect your sensitive information.
              While we strive for maximum security, you are encouraged to use
              strong passwords and keep your account safe.
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              5. Your Rights
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              You can:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access, edit, or delete your health records.</li>
                <li>Request a copy of your medical data.</li>
                <li>Opt out of non-essential notifications.</li>
              </ul>
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              6. Cookies
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We use cookies to enhance your Medicura-AI experience, such as
              saving health preferences and recent activity. You can manage
              cookies through your browser settings.
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              We may update this privacy policy to reflect improvements in our
              healthcare services. Updates will be posted with an effective date.
            </p>
          </section>

          <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              8. Contact Us
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              For privacy concerns, reach out via our{" "}
              <Link
                href="/contact"
                className="text-purple-600 hover:underline font-semibold"
              >
                Contact Page
              </Link>
              .
            </p>
          </section>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mt-10"
        >
          <Link href="/services">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 sm:px-10 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition duration-300 shadow-md">
              Explore Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white border-2 border-purple-600 text-purple-600 px-8 sm:px-10 py-3 rounded-full font-semibold hover:bg-purple-100 hover:border-purple-700 transition duration-300 shadow-md">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
