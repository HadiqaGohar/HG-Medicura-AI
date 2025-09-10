// "use client";

// import { Anton } from "next/font/google";
// import { useState } from "react";
// import { FaBookMedical, FaLightbulb, FaVolumeUp } from "react-icons/fa";

// const anton = Anton({ weight: "400", subsets: ["latin"] });

// interface MedicalTermResponse {
//   response: string;
//   key_points?: string[];
//   related_terms?: string[];
//   pronunciation?: string;
//   disclaimer: string;
//   error?: string;
// }

// export default function MedicalTermExplainer() {
//   const [term, setTerm] = useState("");
//   const [language, setLanguage] = useState("en");
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState<MedicalTermResponse | null>(null);
//   const [error, setError] = useState("");

//   const explainTerm = async () => {
//     if (!term.trim()) {
//       setError("Please enter a medical term");
//       return;
//     }

//     setIsLoading(true);
//     setError("");
//     setResult(null);

//     try {
//       const response = await fetch("/api/medical-term", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           term: term.trim(),
//           language,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to explain term");
//       }

//       setResult(data);
//     } catch (err) {
//       setError(
//         err instanceof Error
//           ? err.message
//           : "Failed to explain term. Please try again."
//       );
//       console.error(err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       explainTerm();
//     }
//   };

//   const speakTerm = (text: string) => {
//     if ("speechSynthesis" in window) {
//       const speech = new SpeechSynthesisUtterance(text);
//       speech.lang =
//         language === "es" ? "es-ES" : language === "fr" ? "fr-FR" : "en-US";
//       window.speechSynthesis.speak(speech);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* <div className="text-center mb-8">
//           <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
//             <FaBookMedical className="w-10 h-10 text-white" />
//           </div>
//           <h1 className={`${anton.className} text-gray-800 text-5xl md:text-6xl mb-4 leading-tight`}>
//             Medical Term Explainer
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Understand complex medical terminology in simple language
//           </p>
//         </div> */}

//         <div className="text-center mb-12">
//           <div className="w-16 h-16 bg-gradient-to-r from-blue-500  to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
//             <FaBookMedical className="w-8 h-8 text-white" />
//           </div>
//           <h3
//             className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}
//           >
//             {/* className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"> */}
//             {/* Frequently Asked Questions */}
//             Medical Term Explainer
//           </h3>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Understand complex medical terminology in simple language
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter a medical term
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={term}
//                 onChange={(e) => setTerm(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="e.g., hypertension, diabetes, osteoporosis..."
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
//                 disabled={isLoading}
//               />
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Explanation Language
//             </label>
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               disabled={isLoading}
//             >
//               <option value="en">English</option>
//               <option value="es">Spanish (Español)</option>
//               <option value="fr">French (Français)</option>
//               <option value="de">German (Deutsch)</option>
//               <option value="it">Italian (Italiano)</option>
//               <option value="pt">Portuguese (Português)</option>
//               <option value="hi">Hindi (हिन्दी)</option>
//               <option value="ur">Urdu (اردو)</option>
//               <option value="ar">Arabic (العربية)</option>
//             </select>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//               <p className="text-red-700">{error}</p>
//             </div>
//           )}

//           {/* Explain Button */}
//           <button
//             onClick={explainTerm}
//             disabled={isLoading || !term.trim()}
//             className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
//           >
//             {isLoading ? (
//               <>
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                 Analyzing...
//               </>
//             ) : (
//               "Explain Term"
//             )}
//           </button>
//         </div>

//         {/* Results */}
//         {result && (
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
//               <FaBookMedical className="text-blue-500 mr-2" />
//               {term.charAt(0).toUpperCase() + term.slice(1)}
//             </h2>

//             {result.pronunciation && (
//               <div className="mb-4 flex items-center">
//                 <span className="text-gray-600 mr-2">Pronunciation:</span>
//                 <span className="text-gray-800 font-mono">
//                   {result.pronunciation}
//                 </span>
//                 <button
//                   onClick={() => speakTerm(term)}
//                   className="ml-2 p-2 text-blue-500 hover:text-blue-700 rounded-full hover:bg-blue-50"
//                   title="Listen to pronunciation"
//                 >
//                   <FaVolumeUp />
//                 </button>
//               </div>
//             )}

//             {/* Main Explanation */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                 Explanation:
//               </h3>
//               <p className="text-gray-700 leading-relaxed">{result.response}</p>
//             </div>

//             {/* Key Points */}
//             {result.key_points && result.key_points.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                   Key Points:
//                 </h3>
//                 <ul className="list-disc list-inside space-y-2 pl-5">
//                   {result.key_points.map((point, index) => (
//                     <li key={index} className="text-gray-700">
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Related Terms */}
//             {result.related_terms && result.related_terms.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-700 mb-3">
//                   Related Terms:
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {result.related_terms.map((relatedTerm, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
//                     >
//                       {relatedTerm}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Disclaimer */}
//             {result.disclaimer && (
//               <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-yellow-800 text-sm">{result.disclaimer}</p>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Pro Tip Section */}
//         <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
//           <div className="flex items-start">
//             <FaLightbulb className="text-yellow-500 text-xl mt-1 mr-3 flex-shrink-0" />
//             <div>
//               <h3 className="text-lg font-semibold text-blue-800 mb-2">
//                 Pro Tip:
//               </h3>
//               <p className="text-blue-700">
//                 You can enter medical terms in multiple languages. The
//                 explanation will be provided in the same language as your input.
//                 This is especially useful for understanding medical terms from
//                 international sources or communicating with healthcare providers
//                 who speak different languages.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Common Medical Terms */}
//         <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Common Medical Terms:
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {[
//               "Hypertension",
//               "Diabetes",
//               "Arthritis",
//               "Asthma",
//               "Osteoporosis",
//               "Migraine",
//               "Anemia",
//               "Bronchitis",
//               "Pneumonia",
//               "Hepatitis",
//               "Arrhythmia",
//               "Neuralgia",
//               "Edema",
//               "Ischemia",
//               "Nephritis",
//               "Dermatitis",
//             ].map((commonTerm) => (
//               <button
//                 key={commonTerm}
//                 onClick={() => {
//                   setTerm(commonTerm);
//                   setResult(null);
//                 }}
//                 className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
//               >
//                 {commonTerm}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/app/services/medical-term/page.tsx
"use client";

import { Anton } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { FaBookMedical, FaLightbulb, FaVolumeUp } from "react-icons/fa";

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface MedicalTermResponse {
  term: string;
  pronunciation: string;
  summary: string;
  detailed_analysis: string;
  key_points: string[];
  related_terms: string[];
  recommendations: string | string[];
  disclaimer: string;
  error?: string;
}

export default function MedicalTermExplainer() {
  const [term, setTerm] = useState("");
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MedicalTermResponse | null>(null);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const explainTerm = async () => {
    if (!term.trim()) {
      setError("Please enter a medical term");
      return;
    }

    setIsLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/medical-term", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          term: term.trim(),
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to explain term");
      }

      // Validate response structure
      const formattedData: MedicalTermResponse = {
        term: data.term || term.trim(),
        pronunciation: data.pronunciation || '',
        summary: data.summary || 'No summary available.',
        detailed_analysis: data.detailed_analysis || data.summary || 'No detailed explanation available.',
        key_points: Array.isArray(data.key_points) ? data.key_points : [],
        related_terms: Array.isArray(data.related_terms) ? data.related_terms : [],
        recommendations: data.recommendations || 'None',
        disclaimer: data.disclaimer || 'This information is educational only. Not medical advice.',
        error: data.error,
      };

      setResult(formattedData);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to explain term. Please try again."
      );
      console.error('[Medical Term] Error:', err);
      setResult({
        term: term.trim(),
        pronunciation: '',
        summary: '',
        detailed_analysis: 'Unable to explain the term. Please try again or consult a medical dictionary.',
        key_points: [],
        related_terms: [],
        recommendations: 'None',
        disclaimer: 'This information is educational only. Not medical advice.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      explainTerm();
    }
  };

  const speakTerm = (text: string) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang =
        language === "es" ? "es-ES" :
        language === "fr" ? "fr-FR" :
        language === "de" ? "de-DE" :
        language === "it" ? "it-IT" :
        language === "pt" ? "pt-PT" :
        language === "hi" ? "hi-IN" :
        language === "ur" ? "ur-PK" :
        language === "ar" ? "ar-SA" : "en-US";
      window.speechSynthesis.speak(speech);
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
            <FaBookMedical className="w-8 h-8 text-white" />
          </div>
          <h3 className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}>
            Medical Term Explainer
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understand complex medical terminology in simple language
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter a medical term
            </label>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., hypertension, diabetes, osteoporosis..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Explanation Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            >
              <option value="en">English</option>
              <option value="es">Spanish (Español)</option>
              <option value="fr">French (Français)</option>
              <option value="de">German (Deutsch)</option>
              <option value="it">Italian (Italiano)</option>
              <option value="pt">Portuguese (Português)</option>
              <option value="hi">Hindi (हिन्दी)</option>
              <option value="ur">Urdu (اردو)</option>
              <option value="ar">Arabic (العربية)</option>
            </select>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <button
            onClick={explainTerm}
            disabled={isLoading || !term.trim()}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg hover:from-blue-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analyzing...
              </>
            ) : (
              "Explain Term"
            )}
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
              <FaBookMedical className="text-blue-500 mr-2" />
              {result.term.charAt(0).toUpperCase() + result.term.slice(1)}
            </h2>

            {result.summary && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Summary:
                </h3>
                <p className="text-gray-700 leading-relaxed">{result.summary}</p>
              </div>
            )}

            {result.pronunciation && (
              <div className="mb-4 flex items-center">
                <span className="text-gray-600 mr-2">Pronunciation:</span>
                <span className="text-gray-800 font-mono">
                  {result.pronunciation}
                </span>
                <button
                  onClick={() => speakTerm(result.term)}
                  className="ml-2 p-2 text-blue-500 hover:text-blue-700 rounded-full hover:bg-blue-50"
                  title="Listen to pronunciation"
                >
                  <FaVolumeUp />
                </button>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Explanation:
              </h3>
              <p className="text-gray-700 leading-relaxed">{result.detailed_analysis}</p>
            </div>

            {result.key_points && result.key_points.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Key Points:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5">
                  {result.key_points.map((point, index) => (
                    <li key={index} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.related_terms && result.related_terms.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Related Terms:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.related_terms.map((relatedTerm, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {relatedTerm}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {result.recommendations && result.recommendations !== 'None' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Recommendations:
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-5">
                  {Array.isArray(result.recommendations)
                    ? result.recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-700">
                          {rec}
                        </li>
                      ))
                    : <li className="text-gray-700">{result.recommendations}</li>
                  }
                </ul>
              </div>
            )}

            {result.disclaimer && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">{result.disclaimer}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-start">
            <FaLightbulb className="text-yellow-500 text-xl mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Pro Tip:
              </h3>
              <p className="text-blue-700">
                You can enter medical terms in multiple languages. The explanation will be provided in the same language as your input. This is especially useful for understanding medical terms from international sources or communicating with healthcare providers who speak different languages.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Common Medical Terms:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Hypertension",
              "Diabetes",
              "Arthritis",
              "Asthma",
              "Osteoporosis",
              "Migraine",
              "Anemia",
              "Bronchitis",
              "Pneumonia",
              "Hepatitis",
              "Arrhythmia",
              "Neuralgia",
              "Edema",
              "Ischemia",
              "Nephritis",
              "Dermatitis",
            ].map((commonTerm) => (
              <button
                key={commonTerm}
                onClick={() => {
                  setTerm(commonTerm);
                  setResult(null);
                }}
                className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                {commonTerm}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
