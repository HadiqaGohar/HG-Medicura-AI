'use client'
import React, { useState } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface AssessmentResponse {
  summary: string;
  detailed_analysis: string;
  recommendations: string[];
  next_steps: string[];
  confidence: number;
  disclaimer: string;
  type: string;
  timestamp: string;
  success: boolean;
}

const CardiologyChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Welcome to Medicura Cardiology AI! Please describe your symptoms (e.g., chest pain, shortness of breath), duration, severity, heart rate, and any relevant medical history.' }
  ]);
  const [symptoms, setSymptoms] = useState('');
  const [duration, setDuration] = useState('');
  const [severity, setSeverity] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!symptoms.trim()) return;

    const userMessage: Message = { sender: 'user', text: `Symptoms: ${symptoms}, Duration: ${duration || 'not specified'}, Severity: ${severity || 'not specified'}, Heart Rate: ${heartRate || 'not specified'}, Medical History: ${medicalHistory || 'not provided'}` };
    setMessages([...messages, userMessage]);
    setSymptoms('');
    setDuration('');
    setSeverity('');
    setHeartRate('');
    setMedicalHistory('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/health/cardiology', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          symptoms: symptoms.split(',').map(s => s.trim()),
          duration: duration || 'not specified',
          severity: severity || 'not specified',
          heart_rate: heartRate ? parseInt(heartRate) : null,
          medical_history: medicalHistory || null,
          patient_id: 'user_123' // Replace with actual user ID
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: AssessmentResponse = await response.json();
      const botMessage: Message = {
        sender: 'bot',
        text: `Summary: ${data.summary}\nDetailed Analysis: ${data.detailed_analysis}\nRecommendations: ${data.recommendations.join(', ')}\nNext Steps: ${data.next_steps.join(', ')}\nConfidence: ${(data.confidence * 100).toFixed(2)}%\nDisclaimer: ${data.disclaimer}`
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Cardiology AI - Heart Health Assessment</h1>
        <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'}`}
            >
              <span className="font-semibold">{msg.sender === 'user' ? 'You' : 'Cardiology AI'}: </span>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          <input
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Enter symptoms (e.g., chest pain, shortness of breath)"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration (e.g., 2 days)"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <input
            type="text"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            placeholder="Severity (e.g., mild, severe)"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <input
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            placeholder="Heart rate (e.g., 80 bpm)"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <textarea
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
            placeholder="Medical history (e.g., hypertension, previous heart attack)"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardiologyChatbot;
