'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

// Define the component props interface
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset } : ErrorProps) {
  return (
    <main className=" bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* <div className="inline-flex items-center gap-3 px-5 py-2 bg-violet-200 text-sm font-bold text-gray-900 rounded-full shadow-sm">
            <span className="w-4 h-4 bg-violet-600 rounded-full shadow-md"></span>
            <span>OOPS, SOMETHING WENT WRONG</span>
          </div> */}
           <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-100 text-sm font-semibold text-gray-900 rounded-full mb-6">
            <span className="w-3 h-3 bg-blue-500 rounded-full shadow-md"></span>
            <span className='text-xs md:text-sm'>OOPS, SOMETHING WENT WRONG</span>
          </div>
          <h2 
           className={`${anton.className}  text-blue-800 text-4xl sm:text-4xl md:text-5xl leading-tight`}

          // className="text-4xl sm:text-5xl lg:text-6xl font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500  mt-4"
          >

            Server Error
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mt-4">
            We’re sorry, something broke on our end. Don’t worry, we’re working to fix it! Try again or reach out for help.
          </p>
        </motion.div>

        {/* Decorative Bar */}
          {/* Decorative Bar */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-gradient-to-r from-blue-500 via-blue-400 to-teal-500 rounded-full w-3/4 h-2 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Error Message Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 sm:p-10"
        >
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Error: {error?.message || 'An unexpected error occurred.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => reset()}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition duration-300 shadow-md"
            >
              Try Again
            </button>
            <Link href="/">
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 hover:border-blue-700 transition duration-300 shadow-md">
                Back to Home
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 hover:border-blue-700 transition duration-300 shadow-md">
                Contact Support
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}