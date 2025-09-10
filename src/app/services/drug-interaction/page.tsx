
// // // // src/app/services/drug-interaction/page.tsx
// // // "use client";

// // // import { Anton } from "next/font/google";
// // // import { useState, useEffect, useRef } from "react";
// // // import {
// // //   FaPills,
// // //   FaPlus,
// // //   FaTimes,
// // //   FaExclamationTriangle,
// // //   FaInfoCircle,
// // // } from "react-icons/fa";

// // // const anton = Anton({ weight: "400", subsets: ["latin"] });

// // // interface Interaction {
// // //   medications: string[];
// // //   severity: "high" | "medium" | "low" | "none";
// // //   description: string;
// // //   recommendation?: string;
// // // }

// // // interface DrugInteractionResponse {
// // //   interactions: Interaction[];
// // //   recommendations: string[];
// // //   alternative_options: string[];
// // //   general_advice: string[];
// // //   disclaimer: string;
// // //   error?: string;
// // // }

// // // export default function DrugInteraction() {
// // //   const [medications, setMedications] = useState<string[]>([]);
// // //   const [currentMedication, setCurrentMedication] = useState("");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [results, setResults] = useState<DrugInteractionResponse | null>(null);
// // //   const [error, setError] = useState("");
// // //   const inputRef = useRef<HTMLInputElement>(null);

// // //   const addMedication = () => {
// // //     const trimmedMed = currentMedication.trim();
// // //     if (trimmedMed && !medications.includes(trimmedMed.toLowerCase())) {
// // //       setMedications([...medications, trimmedMed.toLowerCase()]);
// // //       setCurrentMedication("");
// // //     }
// // //   };

// // //   const removeMedication = (medToRemove: string) => {
// // //     setMedications(medications.filter((med) => med !== medToRemove));
// // //   };

// // //   const checkInteractions = async () => {
// // //     if (medications.length === 0) {
// // //       setError("Please add at least one medication");
// // //       return;
// // //     }

// // //     setIsLoading(true);
// // //     setError("");
// // //     setResults(null);

// // //     try {
// // //       const response = await fetch('/api/drug-interaction', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ medications }),
// // //       });
      
// // //       if (!response.ok) {
// // //         throw new Error(`Server responded with status: ${response.status}`);
// // //       }
      
// // //       const data = await response.json();
      
// // //       // Ensure the response has the expected structure
// // //       const formattedData: DrugInteractionResponse = {
// // //         interactions: Array.isArray(data.interactions) ? data.interactions : [],
// // //         recommendations: Array.isArray(data.recommendations) ? data.recommendations : [],
// // //         alternative_options: Array.isArray(data.alternative_options) ? data.alternative_options : [],
// // //         general_advice: Array.isArray(data.general_advice) ? data.general_advice : [],
// // //         disclaimer: data.disclaimer || "This information is for educational purposes only. Always consult healthcare professionals for medical advice."
// // //       };
      
// // //       setResults(formattedData);
// // //     } catch (err) {
// // //       setError("Failed to check interactions. Please try again.");
// // //       console.error(err);
      
// // //       // Fallback minimal response
// // //       // setResults({
// // //       //   interactions: [{
// // //       //     medications: medications.map(m => m.charAt(0).toUpperCase() + m.slice(1)),
// // //       //     severity: "none",
// // //       //     description: "Service temporarily unavailable. Please consult a healthcare provider for accurate interaction information.",
// // //       //     recommendation: "Always consult with a pharmacist or doctor before combining medications."
// // //       //   }],
// // //       //   recommendations: [
// // //       //     "Consult a healthcare professional for accurate interaction information",
// // //       //     "Keep a list of all your medications"
// // //       //   ],
// // //       //   alternative_options: [],
// // //       //   general_advice: [
// // //       //     "Always inform your doctor about all medications you take",
// // //       //     "Read medication guides carefully"
// // //       //   ],
// // //       //   disclaimer: "This information is for educational purposes only. Always consult healthcare professionals for medication advice."
// // //       // });
// // //       setResults({
// // //   interactions: [{
// // //     medications: medications.map(m => m.charAt(0).toUpperCase() + m.slice(1)),
// // //     severity: "none",
// // //     description: "Unable to retrieve interaction data due to service unavailability. Based on general pharmacological knowledge, penicillin and sulfa drugs (sulfonamides) typically have no significant interactions, as they target different bacterial processes (cell wall synthesis vs. folate synthesis). However, patients with sulfa allergies may have a higher risk of penicillin sensitivity.",
// // //     recommendation: "Consult a healthcare provider to confirm the safety of combining these medications and assess allergy history."
// // //   }],
// // //   recommendations: [
// // //     "Consult a healthcare professional to verify no interactions and review patient-specific factors (e.g., allergy history).",
// // //     "Monitor for allergic reactions (e.g., rash, hives, anaphylaxis) when initiating penicillin or sulfa drugs.",
// // //     "Keep a detailed list of all medications and share it with your healthcare provider."
// // //   ],
// // //   alternative_options: [
// // //     "Consider alternative antibiotics like macrolides (e.g., azithromycin) or tetracyclines (e.g., doxycycline) if allergies are a concern, based on the infection type."
// // //   ],
// // //   general_advice: [
// // //     "Always inform your doctor about all medications, including over-the-counter drugs and supplements.",
// // //     "Read medication guides and report any side effects to your healthcare provider.",
// // //     "Consider allergy testing if there’s a history of sensitivity to penicillin or sulfa drugs."
// // //   ],
// // //   disclaimer: "This information is for educational purposes only. Always consult healthcare professionals for accurate medication advice."
// // // });
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleKeyPress = (e: React.KeyboardEvent) => {
// // //     if (e.key === "Enter") {
// // //       addMedication();
// // //     }
// // //   };

// // //   const getSeverityColor = (severity: string) => {
// // //     switch (severity) {
// // //       case "high":
// // //         return "bg-red-100 text-red-800 border-red-300";
// // //       case "medium":
// // //         return "bg-yellow-100 text-yellow-800 border-yellow-300";
// // //       case "low":
// // //         return "bg-blue-100 text-blue-800 border-blue-300";
// // //       default:
// // //         return "bg-green-100 text-green-800 border-green-300";
// // //     }
// // //   };

// // //   const getSeverityText = (severity: string) => {
// // //     switch (severity) {
// // //       case "high":
// // //         return "High Risk Interaction";
// // //       case "medium":
// // //         return "Moderate Interaction";
// // //       case "low":
// // //         return "Mild Interaction";
// // //       default:
// // //         return "No Significant Interaction";
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (inputRef.current) {
// // //       inputRef.current.focus();
// // //     }
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="text-center mb-12">
// // //           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
// // //             <FaPills className="w-8 h-8 text-white" />
// // //           </div>
// // //           <h3 className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}>
// // //             Drug Interaction Checker
// // //           </h3>
// // //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// // //             Enter medication names to check for potential interactions
// // //           </p>
// // //         </div>

// // //         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
// // //           <div className="mb-6">
// // //             <label className="block text-sm font-medium text-gray-700 mb-2">
// // //               Enter medication or supplement names
// // //             </label>
// // //             <div className="flex gap-2">
// // //               <input
// // //                 ref={inputRef}
// // //                 type="text"
// // //                 value={currentMedication}
// // //                 onChange={(e) => setCurrentMedication(e.target.value)}
// // //                 onKeyPress={handleKeyPress}
// // //                 placeholder="e.g., aspirin, ibuprofen, vitamin C..."
// // //                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
// // //                 disabled={isLoading}
// // //               />
// // //               <button
// // //                 onClick={addMedication}
// // //                 disabled={isLoading || !currentMedication.trim()}
// // //                 className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center"
// // //               >
// // //                 <FaPlus className="w-5 h-5" />
// // //               </button>
// // //             </div>
// // //             <p className="text-xs text-gray-500 mt-2">
// // //               Press Enter or click + to add medications. Include both
// // //               prescription and over-the-counter drugs.
// // //             </p>
// // //           </div>

// // //           {/* Selected Medications */}
// // //           {medications.length > 0 && (
// // //             <div className="mb-6">
// // //               <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                 Medications to check:
// // //               </label>
// // //               <div className="flex flex-wrap gap-2">
// // //                 {medications.map((medication, index) => (
// // //                   <span
// // //                     key={index}
// // //                     className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
// // //                   >
// // //                     {medication}
// // //                     <button
// // //                       onClick={() => removeMedication(medication)}
// // //                       className="ml-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-200 p-1"
// // //                       disabled={isLoading}
// // //                     >
// // //                       <FaTimes className="w-3 h-3" />
// // //                     </button>
// // //                   </span>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Error Message */}
// // //           {error && (
// // //             <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
// // //               <p className="text-red-700 flex items-center">
// // //                 <FaExclamationTriangle className="mr-2" /> {error}
// // //               </p>
// // //             </div>
// // //           )}

// // //           {/* Check Button */}
// // //           <button
// // //             onClick={checkInteractions}
// // //             disabled={isLoading || medications.length === 0}
// // //             className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
// // //           >
// // //             {isLoading ? (
// // //               <>
// // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// // //                 Analyzing Interactions...
// // //               </>
// // //             ) : (
// // //               "Check Interactions"
// // //             )}
// // //           </button>
// // //         </div>

// // //         {/* Results */}
// // //         {results && (
// // //           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
// // //             <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
// // //               <FaInfoCircle className="text-blue-500 mr-2" /> Interaction
// // //               Results
// // //             </h2>
// // //             <p className="text-gray-600 mb-6">
// // //               Based on{" "}
// // //               {medications
// // //                 .map((m) => m.charAt(0).toUpperCase() + m.slice(1))
// // //                 .join(", ")}
// // //             </p>

// // //             {/* Interactions */}
// // //             {results.interactions && results.interactions.length > 0 ? (
// // //               <div className="mb-8">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">
// // //                   Potential Interactions:
// // //                 </h3>
// // //                 <div className="space-y-4">
// // //                   {results.interactions.map((interaction, index) => (
// // //                     <div
// // //                       key={index}
// // //                       className={`p-4 border rounded-lg ${getSeverityColor(
// // //                         interaction.severity
// // //                       )}`}
// // //                     >
// // //                       <div className="flex items-center mb-2">
// // //                         <span className="font-bold text-lg">
// // //                           {interaction.medications.join(" + ")}
// // //                         </span>
// // //                       </div>
// // //                       <div className="mb-3">
// // //                         <span
// // //                           className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
// // //                             interaction.severity
// // //                           )}`}
// // //                         >
// // //                           {getSeverityText(interaction.severity)}
// // //                         </span>
// // //                       </div>
// // //                       <p className="mb-2">{interaction.description}</p>
// // //                       {interaction.recommendation && (
// // //                         <p className="mt-3 font-medium">
// // //                           Recommendation: {interaction.recommendation}
// // //                         </p>
// // //                       )}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             ) : (
// // //               <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
// // //                 <h3 className="text-lg font-semibold text-green-800 mb-2">
// // //                   No significant interactions found
// // //                 </h3>
// // //                 <p className="text-green-700">
// // //                   The medications you entered don&apos;t appear to have significant
// // //                   interactions based on available information.
// // //                 </p>
// // //               </div>
// // //             )}

// // //             {/* Recommendations */}
// // //             {results.recommendations && results.recommendations.length > 0 && (
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
// // //                   Recommendations:
// // //                 </h3>
// // //                 <ul className="list-disc list-inside space-y-2 pl-5">
// // //                   {results.recommendations.map((recommendation, index) => (
// // //                     <li key={index} className="text-gray-700">
// // //                       {recommendation}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             {/* Alternative Options */}
// // //             {results.alternative_options && results.alternative_options.length > 0 && (
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
// // //                   Alternative Options:
// // //                 </h3>
// // //                 <ul className="list-disc list-inside space-y-2 pl-5">
// // //                   {results.alternative_options.map((option, index) => (
// // //                     <li key={index} className="text-gray-700">
// // //                       {option}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             {/* General Advice */}
// // //             {results.general_advice && results.general_advice.length > 0 && (
// // //               <div className="mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
// // //                   Medication Safety Tips:
// // //                 </h3>
// // //                 <ul className="list-disc list-inside space-y-2 pl-5">
// // //                   {results.general_advice.map((advice, index) => (
// // //                     <li key={index} className="text-gray-700">
// // //                       {advice}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             )}

// // //             {/* Disclaimer */}
// // //             {results.disclaimer && (
// // //               <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
// // //                 <p className="text-yellow-800 text-sm flex items-start">
// // //                   <FaExclamationTriangle className="mt-0.5 mr-2 flex-shrink-0" />
// // //                   <span>{results.disclaimer}</span>
// // //                 </p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         )}

// // //         {/* Information Section */}
// // //         <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
// // //           <h3 className="text-xl font-semibold text-blue-800 mb-4">
// // //             About Drug Interactions
// // //           </h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             <div>
// // //               <h4 className="font-medium text-blue-700 mb-2">
// // //                 Why check drug interactions?
// // //               </h4>
// // //               <p className="text-blue-900 text-sm">
// // //                 Medications, supplements, and even foods can interact in ways
// // //                 that affect how your treatments work. Some interactions can
// // //                 increase side effects or decrease effectiveness.
// // //               </p>
// // //             </div>
// // //             <div>
// // //               <h4 className="font-medium text-blue-700 mb-2">
// // //                 What to discuss with your doctor
// // //               </h4>
// // //               <ul className="text-blue-900 text-sm list-disc list-inside pl-2">
// // //                 <li>All medications you&apos;re taking</li>
// // //                 <li>Any supplements or vitamins</li>
// // //                 <li>Changes in your health status</li>
// // //                 <li>Side effects you&apos;re experiencing</li>
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // // src/app/services/drug-interaction/page.tsx
// // "use client";

// // import { Anton } from "next/font/google";
// // import { useState, useEffect, useRef } from "react";
// // import { FaPills, FaPlus, FaTimes, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

// // const anton = Anton({ weight: "400", subsets: ["latin"] });

// // interface Interaction {
// //   medications: string[];
// //   severity: "high" | "medium" | "low" | "none";
// //   description: string;
// //   recommendation?: string;
// // }

// // interface DrugInteractionResponse {
// //   interactions: Interaction[];
// //   recommendations: string[];
// //   alternative_options: string[];
// //   general_advice: string[];
// //   disclaimer: string;
// //   error?: string;
// // }

// // export default function DrugInteraction() {
// //   const [medications, setMedications] = useState<string[]>([]);
// //   const [currentMedication, setCurrentMedication] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [results, setResults] = useState<DrugInteractionResponse | null>(null);
// //   const [error, setError] = useState("");
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   const addMedication = () => {
// //     const trimmedMed = currentMedication.trim();
// //     if (trimmedMed && !medications.includes(trimmedMed.toLowerCase())) {
// //       setMedications([...medications, trimmedMed.toLowerCase()]);
// //       setCurrentMedication("");
// //     }
// //   };

// //   const removeMedication = (medToRemove: string) => {
// //     setMedications(medications.filter((med) => med !== medToRemove));
// //   };

// //   const checkInteractions = async () => {
// //     if (medications.length === 0) {
// //       setError("Please add at least one medication");
// //       return;
// //     }

// //     setIsLoading(true);
// //     setError("");
// //     setResults(null);

// //     try {
// //       const response = await fetch('/api/drug-interaction', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ medications }),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.error || `Server responded with status: ${response.status}`);
// //       }

// //       const data: DrugInteractionResponse = await response.json();

// //       // Validate response structure
// //       const formattedData: DrugInteractionResponse = {
// //         interactions: Array.isArray(data.interactions) ? data.interactions : [],
// //         recommendations: Array.isArray(data.recommendations) ? data.recommendations : [],
// //         alternative_options: Array.isArray(data.alternative_options) ? data.alternative_options : [],
// //         general_advice: Array.isArray(data.general_advice) ? data.general_advice : [],
// //         disclaimer: data.disclaimer || "This information is for educational purposes only. Always consult healthcare professionals for medical advice.",
// //         error: data.error,
// //       };

// //       setResults(formattedData);
// //     } catch (err) {
// //       setError("Failed to check interactions. Please try again.");
// //       console.error('[Drug Interaction] Error:', err);
// //       setResults({
// //         interactions: [
// //           {
// //             medications: medications.map((m) => m.charAt(0).toUpperCase() + m.slice(1)),
// //             severity: "none",
// //             description: "Unable to retrieve interaction data. Please consult a healthcare provider.",
// //             recommendation: "Always consult with a pharmacist or doctor before combining medications.",
// //           },
// //         ],
// //         recommendations: [
// //           "Consult a healthcare professional for accurate interaction information.",
// //           "Keep a list of all your medications.",
// //         ],
// //         alternative_options: [],
// //         general_advice: [
// //           "Always inform your doctor about all medications you take.",
// //           "Read medication guides carefully.",
// //         ],
// //         disclaimer: "This information is for educational purposes only. Always consult healthcare professionals for medication advice.",
// //       });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleKeyPress = (e: React.KeyboardEvent) => {
// //     if (e.key === "Enter") {
// //       addMedication();
// //     }
// //   };

// //   const getSeverityColor = (severity: string) => {
// //     switch (severity) {
// //       case "high":
// //         return "bg-red-100 text-red-800 border-red-300";
// //       case "medium":
// //         return "bg-yellow-100 text-yellow-800 border-yellow-300";
// //       case "low":
// //         return "bg-blue-100 text-blue-800 border-blue-300";
// //       default:
// //         return "bg-green-100 text-green-800 border-green-300";
// //     }
// //   };

// //   const getSeverityText = (severity: string) => {
// //     switch (severity) {
// //       case "high":
// //         return "High Risk Interaction";
// //       case "medium":
// //         return "Moderate Interaction";
// //       case "low":
// //         return "Mild Interaction";
// //       default:
// //         return "No Significant Interaction";
// //     }
// //   };

// //   useEffect(() => {
// //     if (inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="text-center mb-12">
// //           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
// //             <FaPills className="w-8 h-8 text-white" />
// //           </div>
// //           <h3 className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}>
// //             Drug Interaction Checker
// //           </h3>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             Enter medication names to check for potential interactions
// //           </p>
// //         </div>

// //         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
// //           <div className="mb-6">
// //             <label className="block text-sm font-medium text-gray-700 mb-2">
// //               Enter medication or supplement names
// //             </label>
// //             <div className="flex gap-2">
// //               <input
// //                 ref={inputRef}
// //                 type="text"
// //                 value={currentMedication}
// //                 onChange={(e) => setCurrentMedication(e.target.value)}
// //                 onKeyPress={handleKeyPress}
// //                 placeholder="e.g., aspirin, ibuprofen, vitamin C..."
// //                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
// //                 disabled={isLoading}
// //               />
// //               <button
// //                 onClick={addMedication}
// //                 disabled={isLoading || !currentMedication.trim()}
// //                 className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center"
// //               >
// //                 <FaPlus className="w-5 h-5" />
// //               </button>
// //             </div>
// //             <p className="text-xs text-gray-500 mt-2">
// //               Press Enter or click + to add medications. Include both prescription and over-the-counter drugs.
// //             </p>
// //           </div>

// //           {/* Selected Medications */}
// //           {medications.length > 0 && (
// //             <div className="mb-6">
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Medications to check:
// //               </label>
// //               <div className="flex flex-wrap gap-2">
// //                 {medications.map((medication, index) => (
// //                   <span
// //                     key={index}
// //                     className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
// //                   >
// //                     {medication}
// //                     <button
// //                       onClick={() => removeMedication(medication)}
// //                       className="ml-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-200 p-1"
// //                       disabled={isLoading}
// //                     >
// //                       <FaTimes className="w-3 h-3" />
// //                     </button>
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* Error Message */}
// //           {error && (
// //             <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
// //               <p className="text-red-700 flex items-center">
// //                 <FaExclamationTriangle className="mr-2" /> {error}
// //               </p>
// //             </div>
// //           )}

// //           {/* Check Button */}
// //           <button
// //             onClick={checkInteractions}
// //             disabled={isLoading || medications.length === 0}
// //             className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
// //           >
// //             {isLoading ? (
// //               <>
// //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
// //                 Analyzing Interactions...
// //               </>
// //             ) : (
// //               "Check Interactions"
// //             )}
// //           </button>
// //         </div>

// //         {/* Results */}
// //         {results && (
// //           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
// //             <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
// //               <FaInfoCircle className="text-blue-500 mr-2" /> Interaction Results
// //             </h2>
// //             <p className="text-gray-600 mb-6">
// //               Based on {medications.map((m) => m.charAt(0).toUpperCase() + m.slice(1)).join(", ")}
// //             </p>

// //             {/* Interactions */}
// //             {results.interactions && results.interactions.length > 0 ? (
// //               <div className="mb-8">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-4">
// //                   Potential Interactions:
// //                 </h3>
// //                 <div className="space-y-4">
// //                   {results.interactions.map((interaction, index) => (
// //                     <div
// //                       key={index}
// //                       className={`p-4 border rounded-lg ${getSeverityColor(interaction.severity)}`}
// //                     >
// //                       <div className="flex items-center mb-2">
// //                         <span className="font-bold text-lg">{interaction.medications.join(" + ")}</span>
// //                       </div>
// //                       <div className="mb-3">
// //                         <span
// //                           className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
// //                             interaction.severity
// //                           )}`}
// //                         >
// //                           {getSeverityText(interaction.severity)}
// //                         </span>
// //                       </div>
// //                       <p className="mb-2">{interaction.description}</p>
// //                       {interaction.recommendation && (
// //                         <p className="mt-3 font-medium">Recommendation: {interaction.recommendation}</p>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             ) : (
// //               <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
// //                 <h3 className="text-lg font-semibold text-green-800 mb-2">
// //                   No significant interactions found
// //                 </h3>
// //                 <p className="text-green-700">
// //                   The medications you entered don&apos;t appear to have significant interactions based on available information.
// //                 </p>
// //               </div>
// //             )}

// //             {/* Recommendations */}
// //             {results.recommendations && results.recommendations.length > 0 && (
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
// //                   Recommendations:
// //                 </h3>
// //                 <ul className="list-disc list-inside space-y-2 pl-5">
// //                   {results.recommendations.map((recommendation, index) => (
// //                     <li key={index} className="text-gray-700">
// //                       {recommendation}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Alternative Options */}
// //             {results.alternative_options && results.alternative_options.length > 0 && (
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
// //                   Alternative Options:
// //                 </h3>
// //                 <ul className="list-disc list-inside space-y-2 pl-5">
// //                   {results.alternative_options.map((option, index) => (
// //                     <li key={index} className="text-gray-700">
// //                       {option}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* General Advice */}
// //             {results.general_advice && results.general_advice.length > 0 && (
// //               <div className="mb-6">
// //                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
// //                   Medication Safety Tips:
// //                 </h3>
// //                 <ul className="list-disc list-inside space-y-2 pl-5">
// //                   {results.general_advice.map((advice, index) => (
// //                     <li key={index} className="text-gray-700">
// //                       {advice}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             )}

// //             {/* Disclaimer */}
// //             {results.disclaimer && (
// //               <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
// //                 <p className="text-yellow-800 text-sm flex items-start">
// //                   <FaExclamationTriangle className="mt-0.5 mr-2 flex-shrink-0" />
// //                   <span>{results.disclaimer}</span>
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* Information Section */}
// //         <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
// //           <h3 className="text-xl font-semibold text-blue-800 mb-4">
// //             About Drug Interactions
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div>
// //               <h4 className="font-medium text-blue-700 mb-2">
// //                 Why check drug interactions?
// //               </h4>
// //               <p className="text-blue-900 text-sm">
// //                 Medications, supplements, and even foods can interact in ways that affect how your treatments work. Some interactions can increase side effects or decrease effectiveness.
// //               </p>
// //             </div>
// //             <div>
// //               <h4 className="font-medium text-blue-700 mb-2">
// //                 What to discuss with your doctor
// //               </h4>
// //               <ul className="text-blue-900 text-sm list-disc list-inside pl-2">
// //                 <li>All medications you&apos;re taking</li>
// //                 <li>Any supplements or vitamins</li>
// //                 <li>Changes in your health status</li>
// //                 <li>Side effects you&apos;re experiencing</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// // src/app/services/drug-interaction/page.tsx
// "use client";

// import { Anton } from "next/font/google";
// import { useState, useEffect, useRef } from "react";
// import { FaPills, FaPlus, FaTimes, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

// const anton = Anton({ weight: "400", subsets: ["latin"] });

// interface Interaction {
//   medications: string[];
//   severity: "high" | "medium" | "low" | "none";
//   description: string;
//   recommendation?: string;
// }

// interface DrugInteractionResponse {
//   interactions: Interaction[];
//   recommendations: string[];
//   alternative_options: string[];
//   general_advice: string[];
//   disclaimer: string;
//   summary?: string;
//   error?: string;
// }

// export default function DrugInteraction() {
//   const [medications, setMedications] = useState<string[]>([]);
//   const [currentMedication, setCurrentMedication] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [results, setResults] = useState<DrugInteractionResponse | null>(null);
//   const [error, setError] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);

//   const addMedication = () => {
//     const trimmedMed = currentMedication.trim();
//     if (trimmedMed && !medications.includes(trimmedMed.toLowerCase())) {
//       setMedications([...medications, trimmedMed.toLowerCase()]);
//       setCurrentMedication("");
//     }
//   };

//   const removeMedication = (medToRemove: string) => {
//     setMedications(medications.filter((med) => med !== medToRemove));
//   };

//   const checkInteractions = async () => {
//     if (medications.length === 0) {
//       setError("Please add at least one medication");
//       return;
//     }

//     setIsLoading(true);
//     setError("");
//     setResults(null);

//     try {
//       const response = await fetch('/api/drug-interaction', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ medications }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || `Server responded with status: ${response.status}`);
//       }

//       const data: DrugInteractionResponse = await response.json();

//       // Validate response structure
//       const formattedData: DrugInteractionResponse = {
//         interactions: Array.isArray(data.interactions) ? data.interactions : [],
//         recommendations: Array.isArray(data.recommendations) ? data.recommendations : [],
//         alternative_options: Array.isArray(data.alternative_options) ? data.alternative_options : [],
//         general_advice: Array.isArray(data.general_advice) ? data.general_advice : [],
//         disclaimer: data.disclaimer || "This information is for educational purposes only. Always consult healthcare professionals for medical advice.",
//         summary: data.summary || '',
//         error: data.error,
//       };

//       setResults(formattedData);
//     } catch (err) {
//       setError("Failed to check interactions. Please try again.");
//       console.error('[Drug Interaction] Error:', err);
//       setResults({
//         interactions: [
//           {
//             medications: medications.map((m) => m.charAt(0).toUpperCase() + m.slice(1)),
//             severity: "none",
//             description: "Unable to retrieve interaction data. Please consult a healthcare provider.",
//             recommendation: "Always consult with a pharmacist or doctor before combining medications.",
//           },
//         ],
//         recommendations: [
//           "Consult a healthcare professional for accurate interaction information.",
//           "Keep a list of all your medications.",
//         ],
//         alternative_options: [],
//         general_advice: [
//           "Always inform your doctor about all medications you take.",
//           "Read medication guides carefully.",
//         ],
//         disclaimer: "This information is for educational purposes only. Always consult healthcare professionals for medication advice.",
//         summary: '',
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       addMedication();
//     }
//   };

//   const getSeverityColor = (severity: string) => {
//     switch (severity) {
//       case "high":
//         return "bg-red-100 text-red-800 border-red-300";
//       case "medium":
//         return "bg-yellow-100 text-yellow-800 border-yellow-300";
//       case "low":
//         return "bg-blue-100 text-blue-800 border-blue-300";
//       default:
//         return "bg-green-100 text-green-800 border-green-300";
//     }
//   };

//   const getSeverityText = (severity: string) => {
//     switch (severity) {
//       case "high":
//         return "High Risk Interaction";
//       case "medium":
//         return "Moderate Interaction";
//       case "low":
//         return "Mild Interaction";
//       default:
//         return "No Significant Interaction";
//     }
//   };

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
//             <FaPills className="w-8 h-8 text-white" />
//           </div>
//           <h3 className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}>
//             Drug Interaction Checker
//           </h3>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Enter medication names to check for potential interactions
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter medication or supplement names
//             </label>
//             <div className="flex gap-2">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={currentMedication}
//                 onChange={(e) => setCurrentMedication(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="e.g., aspirin, ibuprofen, vitamin C..."
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//                 disabled={isLoading}
//               />
//               <button
//                 onClick={addMedication}
//                 disabled={isLoading || !currentMedication.trim()}
//                 className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center"
//               >
//                 <FaPlus className="w-5 h-5" />
//               </button>
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               Press Enter or click + to add medications. Include both prescription and over-the-counter drugs.
//             </p>
//           </div>

//           {/* Selected Medications */}
//           {medications.length > 0 && (
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Medications to check:
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 {medications.map((medication, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
//                   >
//                     {medication}
//                     <button
//                       onClick={() => removeMedication(medication)}
//                       className="ml-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-200 p-1"
//                       disabled={isLoading}
//                     >
//                       <FaTimes className="w-3 h-3" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-red-700 flex items-center">
//                 <FaExclamationTriangle className="mr-2" /> {error}
//               </p>
//             </div>
//           )}

//           {/* Check Button */}
//           <button
//             onClick={checkInteractions}
//             disabled={isLoading || medications.length === 0}
//             className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
//           >
//             {isLoading ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                 Analyzing Interactions...
//               </>
//             ) : (
//               "Check Interactions"
//             )}
//           </button>
//         </div>

//         {/* Results */}
//         {results && (
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
//               <FaInfoCircle className="text-blue-500 mr-2" /> Interaction Results
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Based on {medications.map((m) => m.charAt(0).toUpperCase() + m.slice(1)).join(", ")}
//             </p>

//             {/* Summary */}
//             {results.summary && (
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">Summary:</h3>
//                 <p className="text-gray-700">{results.summary}</p>
//               </div>
//             )}

//             {/* Interactions */}
//             {results.interactions && results.interactions.length > 0 ? (
//               <div className="mb-8">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-4">
//                   Potential Interactions:
//                 </h3>
//                 <div className="space-y-4">
//                   {results.interactions.map((interaction, index) => (
//                     <div
//                       key={index}
//                       className={`p-4 border rounded-lg ${getSeverityColor(interaction.severity)}`}
//                     >
//                       <div className="flex items-center mb-2">
//                         <span className="font-bold text-lg">{interaction.medications.join(" + ")}</span>
//                       </div>
//                       <div className="mb-3">
//                         <span
//                           className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
//                             interaction.severity
//                           )}`}
//                         >
//                           {getSeverityText(interaction.severity)}
//                         </span>
//                       </div>
//                       <p className="mb-2">{interaction.description}</p>
//                       {interaction.recommendation && (
//                         <p className="mt-3 font-medium">Recommendation: {interaction.recommendation}</p>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
//                 <h3 className="text-lg font-semibold text-green-800 mb-2">
//                   No significant interactions found
//                 </h3>
//                 <p className="text-green-700">
//                   The medications you entered don&apos;t appear to have significant interactions based on available information.
//                 </p>
//               </div>
//             )}

//             {/* Recommendations */}
//             {results.recommendations && results.recommendations.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                   Recommendations:
//                 </h3>
//                 <ul className="list-disc list-inside space-y-2 pl-5">
//                   {results.recommendations.map((recommendation, index) => (
//                     <li key={index} className="text-gray-700">
//                       {recommendation}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Alternative Options */}
//             {results.alternative_options && results.alternative_options.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                   Alternative Options:
//                 </h3>
//                 <ul className="list-disc list-inside space-y-2 pl-5">
//                   {results.alternative_options.map((option, index) => (
//                     <li key={index} className="text-gray-700">
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* General Advice */}
//             {results.general_advice && results.general_advice.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                   Medication Safety Tips:
//                 </h3>
//                 <ul className="list-disc list-inside space-y-2 pl-5">
//                   {results.general_advice.map((advice, index) => (
//                     <li key={index} className="text-gray-700">
//                       {advice}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Disclaimer */}
//             {results.disclaimer && (
//               <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-yellow-800 text-sm flex items-start">
//                   <FaExclamationTriangle className="mt-0.5 mr-2 flex-shrink-0" />
//                   <span>{results.disclaimer}</span>
//                 </p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Information Section */}
//         <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
//           <h3 className="text-xl font-semibold text-blue-800 mb-4">
//             About Drug Interactions
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h4 className="font-medium text-blue-700 mb-2">
//                 Why check drug interactions?
//               </h4>
//               <p className="text-blue-900 text-sm">
//                 Medications, supplements, and even foods can interact in ways that affect how your treatments work. Some interactions can increase side effects or decrease effectiveness.
//               </p>
//             </div>
//             <div>
//               <h4 className="font-medium text-blue-700 mb-2">
//                 What to discuss with your doctor
//               </h4>
//               <ul className="text-blue-900 text-sm list-disc list-inside pl-2">
//                 <li>All medications you&apos;re taking</li>
//                 <li>Any supplements or vitamins</li>
//                 <li>Changes in your health status</li>
//                 <li>Side effects you&apos;re experiencing</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// src/app/services/drug-interaction/page.tsx
"use client";

import { Anton } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { FaPills, FaPlus, FaTimes, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface Interaction {
  medications: string[];
  severity: "high" | "medium" | "low" | "none";
  description: string;
  recommendation?: string;
}

interface DrugInteractionResponse {
  interactions: Interaction[];
  recommendations: string[];
  alternative_options: string[];
  general_advice: string[];
  disclaimer: string;
  summary: string;
  error?: string;
}

export default function DrugInteraction() {
  const [medications, setMedications] = useState<string[]>([]);
  const [currentMedication, setCurrentMedication] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<DrugInteractionResponse | null>(null);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addMedication = () => {
    const trimmedMed = currentMedication.trim().toLowerCase().replace('vitamn', 'vitamin');
    if (trimmedMed && !medications.includes(trimmedMed)) {
      setMedications([...medications, trimmedMed]);
      setCurrentMedication("");
    }
  };

  const removeMedication = (medToRemove: string) => {
    setMedications(medications.filter((med) => med !== medToRemove));
  };

  const checkInteractions = async () => {
    if (medications.length === 0) {
      setError("Please add at least one medication");
      return;
    }

    setIsLoading(true);
    setError("");
    setResults(null);

    try {
      const response = await fetch('/api/drug-interaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ medications }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server responded with status: ${response.status}`);
      }

      const data: DrugInteractionResponse = await response.json();

      // Validate response structure
      const formattedData: DrugInteractionResponse = {
        interactions: Array.isArray(data.interactions) ? data.interactions : [],
        recommendations: Array.isArray(data.recommendations) ? data.recommendations : [],
        alternative_options: Array.isArray(data.alternative_options) ? data.alternative_options : [],
        general_advice: Array.isArray(data.general_advice) ? data.general_advice : [],
        disclaimer: data.disclaimer || "This information is for educational purposes only. Always consult healthcare professionals for medical advice.",
        summary: data.summary || '',
        error: data.error,
      };

      setResults(formattedData);
    } catch (err) {
      setError("Failed to check interactions. Please try again.");
      console.error('[Drug Interaction] Error:', err);
      setResults({
        interactions: [
          {
            medications: medications.map((m) => m.charAt(0).toUpperCase() + m.slice(1)),
            severity: "none",
            description: "Unable to retrieve interaction data. Please consult a healthcare provider.",
            recommendation: "Always consult with a pharmacist or doctor before combining medications.",
          },
        ],
        recommendations: [
          "Consult a healthcare professional for accurate interaction information.",
          "Keep a list of all your medications.",
        ],
        alternative_options: [],
        general_advice: [
          "Always inform your doctor about all medications you take.",
          "Read medication guides carefully.",
        ],
        disclaimer: "This information is for educational purposes only. Always consult healthcare professionals for medical advice.",
        summary: '',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addMedication();
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-green-100 text-green-800 border-green-300";
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "high":
        return "High Risk Interaction";
      case "medium":
        return "Moderate Interaction";
      case "low":
        return "Mild Interaction";
      default:
        return "No Significant Interaction";
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaPills className="w-8 h-8 text-white" />
          </div>
          <h3 className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}>
            Drug Interaction Checker
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter medication names to check for potential interactions
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter medication or supplement names
            </label>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={currentMedication}
                onChange={(e) => setCurrentMedication(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., aspirin, ibuprofen, vitamin C..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                disabled={isLoading}
              />
              <button
                onClick={addMedication}
                disabled={isLoading || !currentMedication.trim()}
                className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                <FaPlus className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter or click + to add medications. Include both prescription and over-the-counter drugs.
            </p>
          </div>

          {/* Selected Medications */}
          {medications.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medications to check:
              </label>
              <div className="flex flex-wrap gap-2">
                {medications.map((medication, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {medication}
                    <button
                      onClick={() => removeMedication(medication)}
                      className="ml-2 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-200 p-1"
                      disabled={isLoading}
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 flex items-center">
                <FaExclamationTriangle className="mr-2" /> {error}
              </p>
            </div>
          )}

          {/* Check Button */}
          <button
            onClick={checkInteractions}
            disabled={isLoading || medications.length === 0}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing Interactions...
              </>
            ) : (
              "Check Interactions"
            )}
          </button>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
              <FaInfoCircle className="text-blue-500 mr-2" /> Interaction Results
            </h2>
            <p className="text-gray-600 mb-6">
              Based on {medications.map((m) => m.charAt(0).toUpperCase() + m.slice(1)).join(", ")}
            </p>

            {/* Summary */}
            {results.summary && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Summary:</h3>
                <p className="text-gray-700">{results.summary}</p>
              </div>
            )}

            {/* Interactions */}
            {results.interactions && results.interactions.length > 0 ? (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  Potential Interactions:
                </h3>
                <div className="space-y-4">
                  {results.interactions.map((interaction, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg ${getSeverityColor(interaction.severity)}`}
                    >
                      <div className="flex items-center mb-2">
                        <span className="font-bold text-lg">{interaction.medications.join(" + ")}</span>
                      </div>
                      <div className="mb-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(
                            interaction.severity
                          )}`}
                        >
                          {getSeverityText(interaction.severity)}
                        </span>
                      </div>
                      <p className="mb-2">{interaction.description}</p>
                      {interaction.recommendation && (
                        <p className="mt-3 font-medium">Recommendation: {interaction.recommendation}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  No significant interactions found
                </h3>
                <p className="text-green-700">
                  The medications you entered don&apos;t appear to have significant interactions based on available information.
                </p>
              </div>
            )}

            {/* Recommendations */}
            {results.recommendations && results.recommendations.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Recommendations:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5">
                  {results.recommendations.map((recommendation, index) => (
                    <li key={index} className="text-gray-700">
                      {recommendation}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Alternative Options */}
            {results.alternative_options && results.alternative_options.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Alternative Options:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5">
                  {results.alternative_options.map((option, index) => (
                    <li key={index} className="text-gray-700">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* General Advice */}
            {results.general_advice && results.general_advice.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Medication Safety Tips:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5">
                  {results.general_advice.map((advice, index) => (
                    <li key={index} className="text-gray-700">
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Disclaimer */}
            {results.disclaimer && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm flex items-start">
                  <FaExclamationTriangle className="mt-0.5 mr-2 flex-shrink-0" />
                  <span>{results.disclaimer}</span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* Information Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            About Drug Interactions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">
                Why check drug interactions?
              </h4>
              <p className="text-blue-900 text-sm">
                Medications, supplements, and even foods can interact in ways that affect how your treatments work. Some interactions can increase side effects or decrease effectiveness.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">
                What to discuss with your doctor
              </h4>
              <ul className="text-blue-900 text-sm list-disc list-inside pl-2">
                <li>All medications you&apos;re taking</li>
                <li>Any supplements or vitamins</li>
                <li>Changes in your health status</li>
                <li>Side effects you&apos;re experiencing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
