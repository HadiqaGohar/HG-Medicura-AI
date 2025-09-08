import Link from 'next/link';
import { FaUserDoctor, FaPhone } from 'react-icons/fa6';


const HomePage = () => {
  return (
    <div className=" bg-white text-gray-800">
      {/* Add the Header component */}
     
      
      <main className=" mx-auto flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl  tracking-tight leading-tight text-gray-900 font-e">
          Meet <b className='text-blue-500'>Medicura-AI</b> Health, <br /> your personal <b>assistant.</b>
        </h1>
          
        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-lg sm:max-w-2xl md:max-w-3xl text-base sm:text-lg md:text-xl text-gray-600">
          Your personal AI assistant to help you with health-related questions
          from the comfort of your home, offering quick, reliable, and
          personalized support anytime you need it.
        </p>
        
        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Chat With AI */}
          <Link
            href="/chatbot"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3 text-base sm:text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <FaUserDoctor className="mr-2 text-lg sm:text-xl" />
            Chat with AI
          </Link>
          
          {/* Contact Now */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3 text-base sm:text-lg font-semibold text-black border border-gray-700 rounded-full  hover:bg-blue-700 hover:text-white transition-colors duration-200"
          >
            <FaPhone className="mr-2 text-lg sm:text-xl" />
            Contact Now
          </Link>
        </div>
        


      </main>
      
    </div>
  );
};

export default HomePage;