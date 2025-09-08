'use client';

import { Anton } from 'next/font/google';
import { useState, useRef, useCallback } from 'react';
import { RiPagesFill, RiUploadCloud2Line, RiFileTextLine, RiCloseLine } from 'react-icons/ri';
import { FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface ReportSummaryResponse {
  summary: string;
  key_findings: string[];
  recommendations?: string[];
  next_steps?: string[];
  disclaimer: string;
  error?: string;
}

export default function ReportSummarizer() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ReportSummaryResponse | null>(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleFileUpload = (file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('File size must be less than 5MB');
      return;
    }

    setUploadedFile(file);
    setError('');
    // Here you would typically extract text from PDF
    // For now, we'll just show the file name
    setText(`[PDF File: ${file.name}] - Please implement PDF text extraction`);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setText('');
  };

  const summarizeReport = async () => {
    if (!text.trim() && !uploadedFile) {
      setError('Please enter text or upload a file');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);
    
    try {
      const response = await fetch('/api/report-summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text.trim(),
          language
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to summarize report');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to summarize report. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      summarizeReport();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <RiPagesFill className="w-10 h-10 text-white" />
          </div>
          <h1 className={`${anton.className} text-gray-800 text-5xl md:text-6xl mb-4 leading-tight`}>
            Report Summarizer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload medical reports or paste text to get AI-powered summaries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Medical Report</h2>
            
            {/* File Upload Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragging 
                  ? 'border-blue-400 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              } mb-6`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <RiUploadCloud2Line className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">
                Drag & drop your medical report PDF here
              </p>
              <p className="text-sm text-gray-500 mb-4">or</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Browse Files
              </button>
              <p className="text-xs text-gray-500 mt-2">PDF files only (max 5MB)</p>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileInputChange}
                className="hidden"
              />
            </div>

            {/* Uploaded File */}
            {uploadedFile && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <RiFileTextLine className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">{uploadedFile.name}</span>
                    <span className="text-green-600 text-sm ml-2">
                      ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <button
                    onClick={removeFile}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RiCloseLine className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or paste report text directly:
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Paste your medical report text here... (Lab results, doctor's notes, etc.)"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm resize-none"
                disabled={isLoading || !!uploadedFile}
              />
              <p className="text-xs text-gray-500 mt-1">
                Press Ctrl+Enter to summarize
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Summary Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="ur">Urdu</option>
              </select>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Summarize Button */}
            <button
              onClick={summarizeReport}
              disabled={isLoading || (!text.trim() && !uploadedFile)}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-lg flex items-center justify-center shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                'Summarize Report'
              )}
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Report Summary</h2>
            
            {result ? (
              <>
                {/* Summary */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                    <RiPagesFill className="text-blue-500 mr-2" />
                    Summary
                  </h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">{result.summary}</p>
                  </div>
                </div>

                {/* Key Findings */}
                {result.key_findings && result.key_findings.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Findings:</h3>
                    <ul className="space-y-2">
                      {result.key_findings.map((finding, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendations */}
                {result.recommendations && result.recommendations.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Recommendations:</h3>
                    <ul className="list-disc list-inside space-y-2 pl-5">
                      {result.recommendations.map((recommendation, index) => (
                        <li key={index} className="text-gray-700">{recommendation}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Next Steps */}
                {result.next_steps && result.next_steps.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Next Steps:</h3>
                    <ol className="list-decimal list-inside space-y-2 pl-5">
                      {result.next_steps.map((step, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Disclaimer */}
                {result.disclaimer && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">{result.disclaimer}</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <RiPagesFill className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p>Upload a medical report or paste text to see the summary</p>
              </div>
            )}
          </div>
        </div>

        {/* Pro Tip Section */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-start">
            <FaLightbulb className="text-yellow-500 text-xl mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">How to Use:</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-700 pl-5">
                <li>Upload PDF medical reports or paste text directly</li>
                <li>Supported reports: Lab results, doctor&apos;s notes, discharge summaries</li>
                <li>Get summaries in multiple languages</li>
                <li>Identify key findings and recommendations</li>
                <li>Always consult healthcare professionals for final decisions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supported Report Types */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported Report Types:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: "Lab Results", icon: "🧪", desc: "Blood tests, urine analysis" },
              { type: "Imaging Reports", icon: "📷", desc: "X-rays, MRI, CT scans" },
              { type: "Doctor's Notes", icon: "📝", desc: "Clinical observations" },
              { type: "Discharge Summaries", icon: "🏥", desc: "Hospital treatment summaries" }
            ].map((reportType, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <div className="text-2xl mb-2">{reportType.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">{reportType.type}</h4>
                <p className="text-sm text-gray-600">{reportType.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}