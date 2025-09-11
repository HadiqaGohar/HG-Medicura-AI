
// 'use client';

// import { useState } from 'react';
// import { FaHeartbeat, FaBars, FaTimes, FaPills, FaBookMedical } from 'react-icons/fa';
// import { RiArrowDropDownLine, RiPagesFill } from 'react-icons/ri';
// import { TbActivityHeartbeat, TbHome, TbWorldQuestion } from "react-icons/tb";
// import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
// import Link from 'next/link';
// import { useSession, signIn } from 'next-auth/react';
// import UserProfile from './UserProfile';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
//   const { data: session } = useSession();

//   return (
//     <header className="max-w-screen-xl mx-auto py-4 px-6 sm:px-8 lg:px-12 flex justify-between items-center border-b border-gray-200 relative">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <FaHeartbeat className="text-blue-500 text-lg md:text-3xl" />
//         <span className="text-lg md:text-2xl font-bold text-gray-800">

//           <Link href='/'>Medicura-AI</Link>
//         </span>
//       </div>
//       <nav className='hidden md:flex space-x-4 items-center'>
//         <ul className='flex space-x-4 text-gray-600 md:flex'>
//           <li><Link href="/" className='flex items-center'><TbHome className='mr-2'/> Home</Link></li>
//           <li className="relative">
//             <button
//               onClick={() => session && setServicesDropdownOpen(!servicesDropdownOpen)}
//               className="flex items-center"
//             >
//               <TbActivityHeartbeat className='mr-2'/>
//               Services
//               {session && (
//                 <RiArrowDropDownLine className="ml-1 text-xl" />
//               )}
//             </button>
//             {session && servicesDropdownOpen && (
//               <div className="absolute mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
//                 <Link href="/services/symptom-analyzer" onClick={() => setServicesDropdownOpen(false)}>
//                   <div className="mb-4">
//                     <h3 className="text-sm font-semibold flex items-center"><FaHouseMedicalCircleCheck className="mr-2" />Symptom Analyzer</h3>
//                     <p className="text-xs text-gray-500">Analyze your symptoms</p>
//                   </div>
//                 </Link>
//                 <Link href="/services/drug-interaction" onClick={() => setServicesDropdownOpen(false)}>
//                   <div className="mb-4">
//                     <h3 className="text-sm font-semibold flex items-center">
//                       <FaPills className="mr-2" /> Drug Interaction
//                     </h3>
//                     <p className="text-xs text-gray-500">Check drug interactions</p>
//                   </div>
//                 </Link>
//                 <Link href="/services/medical-term" onClick={() => setServicesDropdownOpen(false)}>
//                   <div className="mb-4">
//                     <h3 className="text-sm font-semibold flex items-center">
//                       <FaBookMedical className="mr-2" /> Medical Term
//                     </h3>
//                     <p className="text-xs text-gray-500">Look up medical terms</p>
//                   </div>
//                 </Link>
//                 <Link href="/services/report-summarize" onClick={() => setServicesDropdownOpen(false)}>
//                   <div className="mb-4">
//                     <h3 className="text-sm font-semibold flex items-center"><RiPagesFill className="mr-2" /> Report Summarize</h3>
//                     <p className="text-xs text-gray-500">Summarize medical reports</p>
//                   </div>
//                 </Link>
//                 {/* <Link href="/services/emergency-contact" onClick={() => setServicesDropdownOpen(false)}>
//                   <div>
//                     <h3 className="text-sm font-semibold flex items-center"><TbUrgent className="mr-2 font-bold text-lg" /> Emergency Contact</h3>
//                     <p className="text-xs text-gray-500">Contact emergency services</p>
//                   </div>
//                 </Link> */}
//               </div>
//             )}
//           </li>
//           <li><Link href="/about" className='flex items-center'><TbWorldQuestion className='mr-2'/> About</Link></li>
//         </ul>
//       </nav>

//       {/* Desktop Menu */}
//       <nav className="hidden md:flex space-x-4 items-center">
//         {session ? (
//           <UserProfile />
//         ) : (
//           <button
//             onClick={() => signIn('google')}
//             className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200"
//           >
//             Sign In
//           </button>
//         )}
//         <Link
//           href="/contact"
//           className="px-4 py-2 border hover:bg-blue-300 rounded-full text-black transition-colors duration-200"
//         >
//           Contact
//         </Link>
//       </nav>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <FaTimes className="text-2xl text-gray-800" />
//           ) : (
//             <FaBars className="text-2xl text-gray-800" />
//           )}
//         </button>
//       </div>

//       {/* Sidebar Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform ${
//           menuOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out z-50`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-200">
//           <h2 className="text-xl font-bold text-gray-800">Medicura-AI</h2>
//           <button onClick={() => setMenuOpen(false)}>
//             <FaTimes className="text-2xl text-gray-800" />
//           </button>
//         </div>
//         <div className="flex flex-col p-6 space-y-4">
//           <Link href="/" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}> <TbHome className='mr-2'/> Home</Link>
//           {session && (
//             <>
//               <Link href="/services/symptom-analyzer" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}>
//                 <FaHouseMedicalCircleCheck className="mr-2" /> Symptom Analyzer
//               </Link>
//               <Link href="/services/drug-interaction" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}>
//                 <FaPills className="mr-2" /> Drug Interaction
//               </Link>
//               <Link href="/services/medical-term" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}>
//                 <FaBookMedical className="mr-2" /> Medical Term
//               </Link>
//               <Link href="/services/report-summarize" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}>
//                 <RiPagesFill className="mr-2" /> Report Summarize
//               </Link>
//               {/* <Link href="/services/emergency-contact" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}>
//                 <TbUrgent className="mr-2 font-bold text-lg" /> Emergency Contact
//               </Link> */}
//             </>
//           )}
//           <Link href="/about" className="text-gray-700 flex items-center" onClick={() => setMenuOpen(false)}><TbWorldQuestion className='mr-2'/> About</Link>
//           {session ? (
//             <>
//               <div className="flex items-center gap-3">
//                 <UserProfile />
//                 <span className="text-gray-700">{session.user?.name}</span>
//               </div>
//             </>
//           ) : (
//             <button
//               onClick={() => {
//                 signIn('google');
//                 setMenuOpen(false);
//               }}
//               className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 text-center"
//             >
//               Sign In
//             </button>
//           )}
//           <Link
//             href="/contact"
//             className="px-4 py-2 border hover:bg-blue-300 rounded-full text-black transition-colors duration-200 text-center"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       {/* Dark Overlay when sidebar open */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}
//     </header>
//   );
// };

// export default Header;


// 'use client';

// import { useState } from 'react';
// import { 
//   FaHeartbeat, 
//   FaBars, 
//   FaTimes, 
//   FaPills, 
//   FaBookMedical,
//   FaHeart,
//   FaBrain,
//   FaLungs,
//   FaEye,
//   FaTeeth,
//   FaAllergies,
//   FaBaby,
//   FaBone,
//   FaFlask
// } from 'react-icons/fa';
// import { 
//   RiArrowDropDownLine, 
//   RiPagesFill,
//   RiMentalHealthLine,
//   RiStethoscopeLine 
// } from 'react-icons/ri';
// import { 
//   TbActivityHeartbeat, 
//   TbHome, 
//   TbWorldQuestion,
//   TbUrgent,
//   TbMicroscope,
//   TbVaccine
// } from "react-icons/tb";
// import { 
//   FaHouseMedicalCircleCheck,
//   FaXRay,
//   FaViruses
// } from "react-icons/fa6";
// import Link from 'next/link';
// import { useSession, signIn } from 'next-auth/react';
// import UserProfile from './UserProfile';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const [specialistsDropdownOpen, setSpecialistsDropdownOpen] = useState(false);

//   const { data: session } = useSession();

//   const specialistServices = [
//     {
//       name: "Cardiology AI",
//       icon: <FaHeart className="mr-2 text-red-500" />,
//       description: "Heart health assessment",
//       href: "/services/cardiology-ai"
//     },
//     {
//       name: "Dermatology AI",
//       icon: <FaHouseMedicalCircleCheck className="mr-2 text-orange-500" />,
//       description: "Skin condition analysis",
//       href: "/services/dermatology-ai"
//     },
//     {
//       name: "Neurology AI",
//       icon: <FaBrain className="mr-2 text-purple-500" />,
//       description: "Neurological symptom analysis",
//       href: "/services/neurology-ai"
//     },
//     {
//       name: "Pulmonology AI",
//       icon: <FaLungs className="mr-2 text-blue-400" />,
//       description: "Respiratory health assessment",
//       href: "/services/pulmonology-ai"
//     },
//     {
//       name: "Ophthalmology AI",
//       icon: <FaEye className="mr-2 text-indigo-500" />,
//       description: "Eye health analysis",
//       href: "/services/ophthalmology-ai"
//     },
//     {
//       name: "Dental AI",
//       icon: <FaTeeth className="mr-2 text-teal-500" />,
//       description: "Oral health assessment",
//       href: "/services/dental-ai"
//     },
//     {
//       name: "Allergy & Immunology",
//       icon: <FaAllergies className="mr-2 text-green-500" />,
//       description: "Allergy and immune system analysis",
//       href: "/services/allergy-immunology"
//     },
//     {
//       name: "Pediatrics AI",
//       icon: <FaBaby className="mr-2 text-pink-400" />,
//       description: "Child health assessment",
//       href: "/services/pediatrics-ai"
//     },
//     {
//       name: "Orthopedics AI",
//       icon: <FaBone className="mr-2 text-gray-600" />,
//       description: "Bone and joint health",
//       href: "/services/orthopedics-ai"
//     },
//     {
//       name: "Mental Health AI",
//       icon: <RiMentalHealthLine className="mr-2 text-yellow-500" />,
//       description: "Mental wellness assessment",
//       href: "/services/mental-health-ai"
//     },
//     {
//       name: "Endocrinology AI",
//       icon: <TbMicroscope className="mr-2 text-amber-600" />,
//       description: "Hormone and metabolic health",
//       href: "/services/endocrinology-ai"
//     },
//     {
//       name: "Gastroenterology AI",
//       icon: <FaFlask className="mr-2 text-emerald-500" />,
//       description: "Digestive system health",
//       href: "/services/gastroenterology-ai"
//     },
//     {
//       name: "Radiology AI",
//       icon: <FaXRay className="mr-2 text-cyan-500" />,
//       description: "Medical imaging analysis",
//       href: "/services/radiology-ai"
//     },
//     {
//       name: "Infectious Disease AI",
//       icon: <FaViruses className="mr-2 text-red-400" />,
//       description: "Infection and disease analysis",
//       href: "/services/infectious-disease-ai"
//     },
//     {
//       name: "Vaccination Advisor",
//       icon: <TbVaccine className="mr-2 text-green-400" />,
//       description: "Vaccination guidance",
//       href: "/services/vaccination-advisor"
//     }
//   ];

//   const generalServices = [
//     {
//       name: "Symptom Analyzer",
//       icon: <RiStethoscopeLine className="mr-2 text-blue-500" />,
//       description: "Analyze your symptoms",
//       href: "/services/symptom-analyzer"
//     },
//     {
//       name: "Drug Interaction",
//       icon: <FaPills className="mr-2 text-purple-500" />,
//       description: "Check drug interactions",
//       href: "/services/drug-interaction"
//     },
//     {
//       name: "Medical Term",
//       icon: <FaBookMedical className="mr-2 text-green-500" />,
//       description: "Look up medical terms",
//       href: "/services/medical-term"
//     },
//     {
//       name: "Report Summarize",
//       icon: <RiPagesFill className="mr-2 text-orange-500" />,
//       description: "Summarize medical reports",
//       href: "/services/report-summarize"
//     },
//     {
//       name: "Emergency Contact",
//       icon: <TbUrgent className="mr-2 text-red-500" />,
//       description: "Contact emergency services",
//       href: "/services/emergency-contact"
//     }
//   ];

//   return (
//     <header className="max-w-screen-xl mx-auto py-4 px-6 sm:px-8 lg:px-12 flex justify-between items-center border-b border-gray-200 relative">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <FaHeartbeat className="text-blue-500 text-lg md:text-3xl" />
//         <span className="text-lg md:text-2xl font-bold text-gray-800">
//           <Link href='/'>Medicura-AI</Link>
//         </span>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className='hidden md:flex space-x-6 items-center'>
//         <ul className='flex space-x-6 text-gray-600'>
//           <li>
//             <Link href="/" className='flex items-center hover:text-blue-600 transition-colors'>
//               <TbHome className='mr-2'/> Home
//             </Link>
//           </li>
          
//           {/* Services Dropdown */}
//           <li className="relative">
//             <button
//               onClick={() => session && setServicesDropdownOpen(!servicesDropdownOpen)}
//               className="flex items-center hover:text-blue-600 transition-colors"
//             >
//               <TbActivityHeartbeat className='mr-2'/>
//               Services
//               {session && (
//                 <RiArrowDropDownLine className="ml-1 text-xl" />
//               )}
//             </button>
//             {session && servicesDropdownOpen && (
//               <div className="absolute mt-2 left-0 w-72 bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-200">
//                 <h3 className="text-sm font-semibold text-gray-800 mb-3 px-2 py-1 bg-gray-50 rounded">
//                   General Services
//                 </h3>
//                 {generalServices.map((service, index) => (
//                   <Link 
//                     key={index} 
//                     href={service.href}
//                     onClick={() => setServicesDropdownOpen(false)}
//                   >
//                     <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer mb-2 last:mb-0">
//                       <div className="flex-shrink-0 text-lg">
//                         {service.icon}
//                       </div>
//                       <div className="ml-3">
//                         <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
//                         <p className="text-xs text-gray-500">{service.description}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </li>

//           {/* Specialists Dropdown */}
//           <li className="relative">
//             <button
//               onClick={() => session && setSpecialistsDropdownOpen(!specialistsDropdownOpen)}
//               className="flex items-center hover:text-blue-600 transition-colors"
//             >
//               <TbActivityHeartbeat className='mr-2'/>
//               Specialists
//               {session && (
//                 <RiArrowDropDownLine className="ml-1 text-xl" />
//               )}
//             </button>
//             {session && specialistsDropdownOpen && (
//               <div className="absolute mt-2 left-0 w-80 bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-200 max-h-96 overflow-y-auto">
//                 <h3 className="text-sm font-semibold text-gray-800 mb-3 px-2 py-1 bg-gray-50 rounded">
//                   AI Specialist Services
//                 </h3>
//                 <div className="grid gap-2">
//                   {specialistServices.map((service, index) => (
//                     <Link 
//                       key={index} 
//                       href={service.href}
//                       onClick={() => setSpecialistsDropdownOpen(false)}
//                     >
//                       <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer border border-transparent hover:border-blue-100">
//                         <div className="flex-shrink-0 text-lg">
//                           {service.icon}
//                         </div>
//                         <div className="ml-3 flex-1 min-w-0">
//                           <h4 className="text-sm font-medium text-gray-900 truncate">{service.name}</h4>
//                           <p className="text-xs text-gray-500 truncate">{service.description}</p>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </li>

//           <li>
//             <Link href="/about" className='flex items-center hover:text-blue-600 transition-colors'>
//               <TbWorldQuestion className='mr-2'/> About
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* User Actions */}
//       <nav className="hidden md:flex space-x-4 items-center">
//         {session ? (
//           <UserProfile />
//         ) : (
//           <button
//             onClick={() => signIn('google')}
//             className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 font-medium"
//           >
//             Sign In
//           </button>
//         )}
//         <Link
//           href="/contact"
//           className="px-6 py-2 border border-gray-300 hover:bg-gray-50 rounded-full text-gray-700 transition-colors duration-200 font-medium"
//         >
//           Contact
//         </Link>
//       </nav>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden">
//         <button 
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//         >
//           {menuOpen ? (
//             <FaTimes className="text-2xl text-gray-800" />
//           ) : (
//             <FaBars className="text-2xl text-gray-800" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Sidebar Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform ${
//           menuOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
//       >
//         <div className="flex justify-between items-center p-6 border-b border-gray-200">
//           <div className="flex items-center space-x-2">
//             <FaHeartbeat className="text-blue-500 text-2xl" />
//             <span className="text-xl font-bold text-gray-800">Medicura-AI</span>
//           </div>
//           <button 
//             onClick={() => setMenuOpen(false)}
//             className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             <FaTimes className="text-xl text-gray-800" />
//           </button>
//         </div>
        
//         <div className="p-6 space-y-6">
//           {/* Navigation Links */}
//           <div className="space-y-4">
//             <Link 
//               href="/" 
//               className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
//               onClick={() => setMenuOpen(false)}
//             >
//               <TbHome className='mr-3 text-lg'/> Home
//             </Link>
            
//             <Link 
//               href="/about" 
//               className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
//               onClick={() => setMenuOpen(false)}
//             >
//               <TbWorldQuestion className='mr-3 text-lg'/> About
//             </Link>
//           </div>

//           {/* Services Section */}
//           {session && (
//             <>
//               <div className="border-t border-gray-200 pt-6">
//                 <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">General Services</h3>
//                 <div className="space-y-2">
//                   {generalServices.map((service, index) => (
//                     <Link 
//                       key={index} 
//                       href={service.href}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
//                         <div className="flex-shrink-0 text-lg">
//                           {service.icon}
//                         </div>
//                         <div className="ml-3">
//                           <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
//                           <p className="text-xs text-gray-500">{service.description}</p>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <div className="border-t border-gray-200 pt-6">
//                 <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">Specialist Services</h3>
//                 <div className="space-y-2">
//                   {specialistServices.map((service, index) => (
//                     <Link 
//                       key={index} 
//                       href={service.href}
//                       onClick={() => setMenuOpen(false)}
//                     >
//                       <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
//                         <div className="flex-shrink-0 text-lg">
//                           {service.icon}
//                         </div>
//                         <div className="ml-3">
//                           <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
//                           <p className="text-xs text-gray-500">{service.description}</p>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </>
//           )}

//           {/* User Section */}
//           <div className="border-t border-gray-200 pt-6">
//             {session ? (
//               <div className="flex items-center justify-between p-3">
//                 <div className="flex items-center space-x-3">
//                   <UserProfile />
//                   <div>
//                     <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
//                     <p className="text-xs text-gray-500">{session.user?.email}</p>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <button
//                 onClick={() => {
//                   signIn('google');
//                   setMenuOpen(false);
//                 }}
//                 className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-center"
//               >
//                 Sign In
//               </button>
//             )}
            
//             <Link
//               href="/contact"
//               className="block w-full px-6 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors duration-200 font-medium text-center mt-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Dark Overlay when sidebar open */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}
//     </header>
//   );
// };

// export default Header;

'use client';

import { useState } from 'react';
import { 
  FaHeartbeat, 
  FaBars, 
  FaTimes, 
  FaPills, 
  FaBookMedical,
  FaHeart,
  FaBrain,
  FaLungs,
  FaEye,
  FaTeeth,
  FaAllergies,
  FaBaby,
  FaBone,
  FaFlask
} from 'react-icons/fa';
import { 
  RiArrowDropDownLine, 
  RiPagesFill,
  RiMentalHealthLine,
  RiStethoscopeLine 
} from 'react-icons/ri';
import { 
  TbActivityHeartbeat, 
  TbHome, 
  TbWorldQuestion,
  TbUrgent,
  TbMicroscope,
  TbVaccine
} from "react-icons/tb";
import { 
  FaHouseMedicalCircleCheck,
  FaXRay,
  FaViruses
} from "react-icons/fa6";
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import UserProfile from './UserProfile';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [specialistsDropdownOpen, setSpecialistsDropdownOpen] = useState(false);

  const { data: session } = useSession();

  const showUnderDevelopmentToast = () => {
    toast.info(
      'This feature is under development. Please contact our triage agent for assistance.',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      }
    );
  };

  const specialistServices = [
    {
      name: "Cardiology AI",
      icon: <FaHeart className="mr-2 text-red-500" />,
      description: "Heart health assessment",
      href: "/specialist/cardiology-ai"
    },
    {
      name: "Dermatology AI",
      icon: <FaHouseMedicalCircleCheck className="mr-2 text-orange-500" />,
      description: "Skin condition analysis",
      href: "/specialist/dermatology-ai"
    },
    {
      name: "Neurology AI",
      icon: <FaBrain className="mr-2 text-purple-500" />,
      description: "Neurological symptom analysis",
      href: "/specialist/neurology-ai"
    },
    {
      name: "Pulmonology AI",
      icon: <FaLungs className="mr-2 text-blue-400" />,
      description: "Respiratory health assessment",
      href: "/specialist/pulmonology-ai"
    },
    {
      name: "Ophthalmology AI",
      icon: <FaEye className="mr-2 text-indigo-500" />,
      description: "Eye health analysis",
      href: "/specialist/ophthalmology-ai"
    },
    {
      name: "Dental AI",
      icon: <FaTeeth className="mr-2 text-teal-500" />,
      description: "Oral health assessment",
      href: "/specialist/dental-ai"
    },
    {
      name: "Allergy & Immunology",
      icon: <FaAllergies className="mr-2 text-green-500" />,
      description: "Allergy and immune system analysis",
      href: "/specialist/allergy-immunology"
    },
    {
      name: "Pediatrics AI",
      icon: <FaBaby className="mr-2 text-pink-400" />,
      description: "Child health assessment",
      href: "/specialist/pediatrics-ai"
    },
    {
      name: "Orthopedics AI",
      icon: <FaBone className="mr-2 text-gray-600" />,
      description: "Bone and joint health",
      href: "/specialist/orthopedics-ai"
    },
    {
      name: "Mental Health AI",
      icon: <RiMentalHealthLine className="mr-2 text-yellow-500" />,
      description: "Mental wellness assessment",
      href: "/specialist/mental-health-ai"
    },
    {
      name: "Endocrinology AI",
      icon: <TbMicroscope className="mr-2 text-amber-600" />,
      description: "Hormone and metabolic health",
      href: "/specialist/endocrinology-ai"
    },
    {
      name: "Gastroenterology AI",
      icon: <FaFlask className="mr-2 text-emerald-500" />,
      description: "Digestive system health",
      href: "/specialist/gastroenterology-ai"
    },
    {
      name: "Radiology AI",
      icon: <FaXRay className="mr-2 text-cyan-500" />,
      description: "Medical imaging analysis",
      href: "/specialist/radiology-ai"
    },
    {
      name: "Infectious Disease AI",
      icon: <FaViruses className="mr-2 text-red-400" />,
      description: "Infection and disease analysis",
      href: "/specialist/infectious-disease-ai"
    },
    {
      name: "Vaccination Advisor",
      icon: <TbVaccine className="mr-2 text-green-400" />,
      description: "Vaccination guidance",
      href: "/specialist/vaccination-advisor"
    }
  ];

  const generalServices = [
    {
      name: "Symptom Analyzer",
      icon: <RiStethoscopeLine className="mr-2 text-blue-500" />,
      description: "Analyze your symptoms",
      href: "/services/symptom-analyzer"
    },
    {
      name: "Drug Interaction",
      icon: <FaPills className="mr-2 text-purple-500" />,
      description: "Check drug interactions",
      href: "/services/drug-interaction"
    },
    {
      name: "Medical Term",
      icon: <FaBookMedical className="mr-2 text-green-500" />,
      description: "Look up medical terms",
      href: "/services/medical-term"
    },
    {
      name: "Report Summarize",
      icon: <RiPagesFill className="mr-2 text-orange-500" />,
      description: "Summarize medical reports",
      href: "/services/report-summarize"
    },
    {
      name: "Emergency Contact",
      icon: <TbUrgent className="mr-2 text-red-500" />,
      description: "Contact emergency services",
      href: "/services/emergency-contact"
    }
  ];

  return (
    <header className="max-w-screen-xl mx-auto py-4 px-6 sm:px-8 lg:px-12 flex justify-between items-center border-b border-gray-200 relative">
      {/* Toast Container */}
      <ToastContainer />

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaHeartbeat className="text-blue-500 text-lg md:text-3xl" />
        <span className="text-lg md:text-2xl font-bold text-gray-800">
          <Link href='/'>Medicura-AI</Link>
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex space-x-6 items-center'>
        <ul className='flex space-x-6 text-gray-600'>
          <li>
            <Link href="/" className='flex items-center hover:text-blue-600 transition-colors'>
              <TbHome className='mr-2'/> Home
            </Link>
          </li>
          
          {/* Services Dropdown */}
          <li className="relative">
            <button
              onClick={() => session && setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <TbActivityHeartbeat className='mr-2'/>
              Services
              {session && (
                <RiArrowDropDownLine className="ml-1 text-xl" />
              )}
            </button>
            {session && servicesDropdownOpen && (
              <div className="absolute mt-2 left-0 w-72 bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 px-2 py-1 bg-gray-50 rounded">
                  General Services
                </h3>
                {generalServices.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.href}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer mb-2 last:mb-0">
                      <div className="flex-shrink-0 text-lg">
                        {service.icon}
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                        <p className="text-xs text-gray-500">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {/* Specialists Dropdown */}
          <li className="relative">
            <button
              onClick={() => session && setSpecialistsDropdownOpen(!specialistsDropdownOpen)}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <TbActivityHeartbeat className='mr-2'/>
              Specialists
              {session && (
                <RiArrowDropDownLine className="ml-1 text-xl" />
              )}
            </button>
            {session && specialistsDropdownOpen && (
              <div className="absolute mt-2 left-0 w-80 bg-white shadow-xl rounded-lg p-4 z-50 border border-gray-200 max-h-96 overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-800 mb-3 px-2 py-1 bg-gray-50 rounded">
                  AI Specialist Services
                </h3>
                <div className="grid gap-2">
                  {specialistServices.map((service, index) => (
                    <div
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        showUnderDevelopmentToast();
                        setSpecialistsDropdownOpen(false);
                      }}
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer border border-transparent hover:border-blue-100"
                    >
                      <div className="flex-shrink-0 text-lg">
                        {service.icon}
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{service.name}</h4>
                        <p className="text-xs text-gray-500 truncate">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/about-us" className='flex items-center hover:text-blue-600 transition-colors'>
              <TbWorldQuestion className='mr-2'/> About
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Actions */}
      <nav className="hidden md:flex space-x-4 items-center">
        {session ? (
          <UserProfile />
        ) : (
          <button
            onClick={() => signIn('google')}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Sign In
          </button>
        )}
        <Link
          href="/contact"
          className="px-6 py-2 border border-gray-300 hover:bg-gray-50 rounded-full text-gray-700 transition-colors duration-200 font-medium"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl text-gray-800" />
          ) : (
            <FaBars className="text-2xl text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FaHeartbeat className="text-blue-500 text-2xl" />
            <span className="text-xl font-bold text-gray-800">Medicura-AI</span>
          </div>
          <button 
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaTimes className="text-xl text-gray-800" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <TbHome className='mr-3 text-lg'/> Home
            </Link>
            
            <Link 
              href="/about" 
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <TbWorldQuestion className='mr-3 text-lg'/> About
            </Link>
          </div>

          {/* Services Section */}
          {session && (
            <>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">General Services</h3>
                <div className="space-y-2">
                  {generalServices.map((service, index) => (
                    <Link 
                      key={index} 
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                        <div className="flex-shrink-0 text-lg">
                          {service.icon}
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">Specialist Services</h3>
                <div className="space-y-2">
                  {specialistServices.map((service, index) => (
                    <div
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        showUnderDevelopmentToast();
                        setMenuOpen(false);
                      }}
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex-shrink-0 text-lg">
                        {service.icon}
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                        <p className="text-xs text-gray-500">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* User Section */}
          <div className="border-t border-gray-200 pt-6">
            {session ? (
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <UserProfile />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                    <p className="text-xs text-gray-500">{session.user?.email}</p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  signIn('google');
                  setMenuOpen(false);
                }}
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-center"
              >
                Sign In
              </button>
            )}
            
            <Link
              href="/contact"
              className="block w-full px-6 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors duration-200 font-medium text-center mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Dark Overlay when sidebar open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;



