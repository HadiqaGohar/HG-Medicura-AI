"use client";

import { Anton } from "next/font/google";
import { useState } from "react";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";

interface SymptomAnalysis {
  possible_conditions: string[];
  general_advice: string[];
  disclaimer: string;
}


const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function SymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState("");
  const [duration, setDuration] = useState("");
  const [severity, setSeverity] = useState("moderate");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null);
  const [error, setError] = useState("");

  const addSymptom = () => {
    if (currentSymptom.trim() && !symptoms.includes(currentSymptom.trim())) {
      setSymptoms([...symptoms, currentSymptom.trim()]);
      setCurrentSymptom("");
    }
  };

  const removeSymptom = (symptomToRemove: string) => {
    setSymptoms(symptoms.filter((symptom) => symptom !== symptomToRemove));
  };

  const analyzeSymptoms = async () => {
    if (symptoms.length === 0) {
      setError("Please add at least one symptom");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/symptom-analyzer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms,
          duration,
          severity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze symptoms");
      }

      const data = await response.json();

      // Handle both error and success responses
      if (data.error) {
        setError(data.error);
      } else {
        setAnalysis(data);
      }
    } catch (err) {
      setError("Failed to analyze symptoms. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500  to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaHouseMedicalCircleCheck className="w-8 h-8 text-white" />
          </div>
          <h3
            className={`${anton.className} mt-6 text-gray-800 text-4xl md:text-5xl mb-6 leading-tight`}
          >
            {/* className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"> */}
            {/* Frequently Asked Questions */}
            Symptom Analyzer
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your symptoms in detail
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* <h1 className="text-3xl font-bold text-gray-800 mb-6">Symptom Analyzer</h1>
          <p className="text-gray-600 mb-8">Describe your symptoms in detail...</p> */}
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Symptom Analyzer
          </h3>

          {/* Symptom Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add your symptoms
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentSymptom}
                onChange={(e) => setCurrentSymptom(e.target.value)}
                placeholder="e.g., headache, fever, cough..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && addSymptom()}
              />
              <button
                onClick={addSymptom}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {symptoms.length}/10 symptoms added
            </p>
          </div>

          {/* Selected Symptoms */}
          {symptoms.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your symptoms:
              </label>
              <div className="flex flex-wrap gap-2">
                {symptoms.map((symptom, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {symptom}
                    <button
                      onClick={() => removeSymptom(symptom)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Duration and Severity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 3 days, 1 week..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity
              </label>
              <select
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={analyzeSymptoms}
            disabled={isLoading || symptoms.length === 0}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            {isLoading ? "Analyzing..." : "Analyze Symptoms"}
          </button>

          {/* Results */}
          {analysis && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Analysis Results
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Possible Conditions:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {analysis.possible_conditions.map((condition, index) => (
                    <li key={index} className="text-gray-600">
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  General Advice:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {analysis.general_advice.map((advice, index) => (
                    <li key={index} className="text-gray-600">
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">{analysis.disclaimer}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
