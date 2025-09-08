'use client';
import React, { useState } from 'react';
import BugReportModal from './BugReportModal';
import { PiBugBeetleFill } from "react-icons/pi";

const BugReportButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Bug Report Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-24 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 group"
        title="Report a Bug"
      >
        <span className="text-xl"><PiBugBeetleFill size={24}/></span>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Report a Bug
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>

      {/* Bug Report Modal */}
      <BugReportModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default BugReportButton;


// 'use client';
// import React, { useState } from 'react';
// import BugReportModal from './BugReportModal';

// const BugReportButton = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       {/* Floating Bug Report Button */}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="fixed bottom-6 left-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 group"
//         title="Report a Bug"
//       >
//         <span className="text-xl">🐛</span>
        
//         {/* Tooltip */}
//         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//           Report a Bug
//           <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
//         </div>
//       </button>

//       {/* Bug Report Modal */}
//       <BugReportModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//       />
//     </>
//   );
// };

// export default BugReportButton;

