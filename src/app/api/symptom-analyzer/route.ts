// // src/app/api/symptom-analyzer/route.ts
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { symptoms, duration, severity } = body;

//     // Validate input
//     if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
//       return NextResponse.json(
//         { error: 'Symptoms array is required and cannot be empty' },
//         { status: 400 }
//       );
//     }

//     // Call your FastAPI backend
//     const backendResponse = await fetch('http://localhost:8000/api/health/symptoms', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         symptoms,
//         duration: duration || '',
//         severity: severity || 'moderate',
//       }),
//     });

//     if (!backendResponse.ok) {
//       throw new Error(`Backend responded with status: ${backendResponse.status}`);
//     }

//     const data = await backendResponse.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error in symptom analyzer API:', error);
//     return NextResponse.json(
//       { 
//         error: 'Failed to analyze symptoms',
//         possible_conditions: ["Consult healthcare professional for proper diagnosis"],
//         general_advice: ["Rest adequately", "Stay hydrated", "Monitor symptoms", "Avoid self-medication"],
//         disclaimer: "This information is for educational purposes only. Consult a healthcare professional for medical advice."
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json(
//     { message: 'Symptom Analyzer API is working' },
//     { status: 200 }
//   );
// }


// src/app/api/symptom-analyzer/route.ts

import { NextResponse } from 'next/server';

export const runtime = 'edge'; // Optional: Use edge runtime for faster response if suitable

interface RequestBody {
  symptoms: string[];
  duration?: string;
  severity?: string;
}

interface SymptomAnalysis {
  possible_conditions: string[];
  general_advice: string[];
  disclaimer: string;
}

function extractJsonFromResponse(text: string): SymptomAnalysis | null {
  try {
    const cleaned = text
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();
    return JSON.parse(cleaned) as SymptomAnalysis;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

    if (!Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const symptomsStr = symptoms.join(', ');
    const prompt = `
You are a professional health assistant. Analyze the following symptoms and provide a structured response.

Symptoms: ${symptomsStr}
Duration: ${duration}
Severity: ${severity}

Respond ONLY with valid JSON in this exact structure:
{
  "possible_conditions": ["condition1", "condition2", "condition3"],
  "general_advice": ["advice1", "advice2", "advice3"],
  "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
}

Limit possible conditions and advice to 3-5 items each. Be accurate, neutral, and emphasize seeking professional help.
`;

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
    const response = await fetch(`${url}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
          topP: 0.8,
          topK: 40,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE',
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error(`Gemini API error: ${response.status} - ${await response.text()}`);
      return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
    }

    const data = await response.json();
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
    }

    const generatedText = data.candidates[0].content.parts[0].text;
    const analysis = extractJsonFromResponse(generatedText);

    if (!analysis) {
      return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
    }

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Symptom analyzer error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
  }
}