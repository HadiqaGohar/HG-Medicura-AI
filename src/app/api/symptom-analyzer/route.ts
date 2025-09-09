
// // // src/app/api/symptom-analyzer/route.ts

// // import { NextResponse } from 'next/server';

// // export const runtime = 'edge'; // Optional: Use edge runtime for faster response if suitable

// // interface RequestBody {
// //   symptoms: string[];
// //   duration?: string;
// //   severity?: string;
// // }

// // interface SymptomAnalysis {
// //   possible_conditions: string[];
// //   general_advice: string[];
// //   disclaimer: string;
// // }

// // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// //   try {
// //     const cleaned = text
// //       .replace(/```json/g, '')
// //       .replace(/```/g, '')
// //       .trim();
// //     return JSON.parse(cleaned) as SymptomAnalysis;
// //   } catch {
// //     return null;
// //   }
// // }

// // export async function POST(request: Request) {
// //   try {
// //     const body: RequestBody = await request.json();
// //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// //       return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
// //     }

// //     const apiKey = process.env.GEMINI_API_KEY;
// //     if (!apiKey) {
// //       console.error('GEMINI_API_KEY is not set');
// //       return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
// //     }

// //     const symptomsStr = symptoms.join(', ');
// //     const prompt = `
// // You are a professional health assistant. Analyze the following symptoms and provide a structured response.

// // Symptoms: ${symptomsStr}
// // Duration: ${duration}
// // Severity: ${severity}

// // Respond ONLY with valid JSON in this exact structure:
// // {
// //   "possible_conditions": ["condition1", "condition2", "condition3"],
// //   "general_advice": ["advice1", "advice2", "advice3"],
// //   "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// // }

// // Limit possible conditions and advice to 3-5 items each. Be accurate, neutral, and emphasize seeking professional help.
// // `;

// //     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
// //     const response = await fetch(`${url}?key=${apiKey}`, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         contents: [
// //           {
// //             parts: [
// //               {
// //                 text: prompt,
// //               },
// //             ],
// //           },
// //         ],
// //         generationConfig: {
// //           temperature: 0.7,
// //           maxOutputTokens: 512,
// //           topP: 0.8,
// //           topK: 40,
// //         },
// //         safetySettings: [
// //           {
// //             category: 'HARM_CATEGORY_HATE_SPEECH',
// //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// //           },
// //           {
// //             category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
// //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// //           },
// //           {
// //             category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
// //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// //           },
// //           {
// //             category: 'HARM_CATEGORY_HARASSMENT',
// //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// //           },
// //         ],
// //       }),
// //     });

// //     if (!response.ok) {
// //       console.error(`Gemini API error: ${response.status} - ${await response.text()}`);
// //       return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
// //     }

// //     const data = await response.json();
// //     if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
// //       return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
// //     }

// //     const generatedText = data.candidates[0].content.parts[0].text;
// //     const analysis = extractJsonFromResponse(generatedText);

// //     if (!analysis) {
// //       return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
// //     }

// //     return NextResponse.json(analysis);
// //   } catch (error) {
// //     console.error('Symptom analyzer error:', error);
// //     return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
// //   }
// // }

// // // import { NextRequest, NextResponse } from 'next/server';

// // // export const runtime = 'edge';

// // // interface RequestBody {
// // //   symptoms: string[];
// // //   duration?: string;
// // //   severity?: string;
// // // }

// // // interface SymptomAnalysis {
// // //   possible_conditions: string[];
// // //   general_advice: string[];
// // //   disclaimer: string;
// // // }

// // // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// // //   try {
// // //     const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
// // //     return JSON.parse(cleaned) as SymptomAnalysis;
// // //   } catch {
// // //     return null;
// // //   }
// // // }

// // // export async function POST(request: NextRequest) {
// // //   console.log('[SymptomAnalyzer] Received POST request:', {
// // //     url: request.url,
// // //     headers: Object.fromEntries(request.headers),
// // //     method: request.method,
// // //     ip: request.ip,
// // //   });

// // //   try {
// // //     const body: RequestBody = await request.json();
// // //     console.log('[SymptomAnalyzer] Request body:', body);

// // //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// // //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// // //       console.log('[SymptomAnalyzer] Validation failed: At least one symptom is required');
// // //       return NextResponse.json(
// // //         { error: 'At least one symptom is required' },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     const apiKey = process.env.GEMINI_API_KEY;
// // //     if (!apiKey) {
// // //       console.error('[SymptomAnalyzer] GEMINI_API_KEY is not set');
// // //       return NextResponse.json(
// // //         { error: 'Server configuration error' },
// // //         { status: 500 }
// // //       );
// // //     }

// // //     const symptomsStr = symptoms.join(', ');
// // //     const prompt = `
// // // You are a professional health assistant. Analyze the following symptoms and provide a structured response.

// // // Symptoms: ${symptomsStr}
// // // Duration: ${duration}
// // // Severity: ${severity}

// // // Respond ONLY with valid JSON in this exact structure:
// // // {
// // //   "possible_conditions": ["condition1", "condition2", "condition3"],
// // //   "general_advice": ["advice1", "advice2", "advice3"],
// // //   "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// // // }

// // // Limit possible conditions and advice to 3-5 items each. Be accurate, neutral, and emphasize seeking professional help.
// // // `;

// // //     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
// // //     console.log('[SymptomAnalyzer] Fetching Gemini API:', url);

// // //     const response = await fetch(`${url}?key=${apiKey}`, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify({
// // //         contents: [{ parts: [{ text: prompt }] }],
// // //         generationConfig: {
// // //           temperature: 0.7,
// // //           maxOutputTokens: 512,
// // //           topP: 0.8,
// // //           topK: 40,
// // //         },
// // //         safetySettings: [
// // //           { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // //           { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // //           { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // //           { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // //         ],
// // //       }),
// // //       cache: 'no-store',
// // //     });

// // //     console.log('[SymptomAnalyzer] Gemini API response status:', response.status);

// // //     if (!response.ok) {
// // //       const errorText = await response.text();
// // //       console.error('[SymptomAnalyzer] Gemini API error:', response.status, errorText);
// // //       return NextResponse.json(
// // //         { error: 'Failed to analyze symptoms. Please try again later.' },
// // //         { status: 500 }
// // //       );
// // //     }

// // //     const data = await response.json();
// // //     if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
// // //       console.error('[SymptomAnalyzer] Invalid response from Gemini API:', data);
// // //       return NextResponse.json(
// // //         { error: 'Invalid response from analysis service' },
// // //         { status: 500 }
// // //       );
// // //     }

// // //     const generatedText = data.candidates[0].content.parts[0].text;
// // //     console.log('[SymptomAnalyzer] Gemini API raw response:', generatedText);

// // //     const analysis = extractJsonFromResponse(generatedText);
// // //     if (!analysis) {
// // //       console.error('[SymptomAnalyzer] Failed to parse Gemini API response:', generatedText);
// // //       return NextResponse.json(
// // //         { error: 'Failed to parse analysis results' },
// // //         { status: 500 }
// // //       );
// // //     }

// // //     console.log('[SymptomAnalyzer] Parsed analysis:', analysis);
// // //     return NextResponse.json(analysis);
// // //   } catch (error) {
// // //     console.error('[SymptomAnalyzer] Error:', error);
// // //     return NextResponse.json(
// // //       { error: 'An unexpected error occurred. Please try again.' },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // // export async function GET(request: NextRequest) {
// // //   console.log('[SymptomAnalyzer] Received GET request (not allowed):', {
// // //     url: request.url,
// // //     headers: Object.fromEntries(request.headers),
// // //     method: request.method,
// // //     ip: request.ip,
// // //   });
// // //   return NextResponse.json(
// // //     { error: 'Method Not Allowed. Use POST for /api/symptom-analyzer' },
// // //     { status: 405 }
// // //   );
// // // }

// // // export const config = {
// // //   api: {
// // //     bodyParser: {
// // //       sizeLimit: '1mb',
// // //     },
// // //   },
// // // };


// // GEMMMMMMIN


// // src/app/api/symptom-analyzer/route.ts

// import { NextResponse } from 'next/server';

// export const runtime = 'edge';

// interface RequestBody {
//   symptoms: string[];
//   duration?: string;
//   severity?: string;
// }

// interface SymptomAnalysis {
//   possible_conditions: string[];
//   general_advice: string[];
//   disclaimer: string;
// }

// function extractJsonFromResponse(text: string): SymptomAnalysis | null {
//   try {
//     // Clean the response by removing markdown and trimming whitespace
//     const cleaned = text
//       .replace(/```json/g, '')
//       .replace(/```/g, '')
//       .trim();
//     return JSON.parse(cleaned) as SymptomAnalysis;
//   } catch (e) {
//     console.error('Error parsing JSON from Gemini response:', e);
//     return null;
//   }
// }

// export async function POST(request: Request) {
//   try {
//     const body: RequestBody = await request.json();
//     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

//     if (!Array.isArray(symptoms) || symptoms.length === 0) {
//       return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
//     }

//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       console.error('GEMINI_API_KEY is not set');
//       return NextResponse.json({ error: 'Server configuration error: Missing API key' }, { status: 500 });
//     }

//     const symptomsStr = symptoms.join(', ');
//     const prompt = `
// You are a professional health assistant. Analyze the following symptoms and provide a structured response.

// Symptoms: ${symptomsStr}
// Duration: ${duration}
// Severity: ${severity}

// Respond ONLY with valid JSON in this exact structure:
// {
//   "possible_conditions": ["condition1", "condition2", "condition3"],
//   "general_advice": ["advice1", "advice2", "advice3"],
//   "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// }

// Limit possible conditions and advice to 3-5 items each. Ensure accuracy, neutrality, and always emphasize seeking professional medical help. The disclaimer MUST be included exactly as provided.
// `;

//     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
//     const response = await fetch(`${url}?key=${apiKey}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: prompt,
//               },
//             ],
//           },
//         ],
//         generationConfig: {
//           temperature: 0.7,
//           maxOutputTokens: 512,
//           topP: 0.8,
//           topK: 40,
//         },
//         safetySettings: [
//           {
//             category: 'HARM_CATEGORY_HATE_SPEECH',
//             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//           },
//           {
//             category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
//             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//           },
//           {
//             category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
//             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//           },
//           {
//             category: 'HARM_CATEGORY_HARASSMENT',
//             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(`Gemini API error: ${response.status} - ${errorText}`);
//       return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
//     }

//     const data = await response.json();
//     const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (!generatedText) {
//       console.error('Invalid or empty response from analysis service:', data);
//       return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
//     }

//     const analysis = extractJsonFromResponse(generatedText);

//     if (!analysis) {
//       console.error('Failed to parse analysis results from text:', generatedText);
//       return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
//     }

//     return NextResponse.json(analysis);
//   } catch (error) {
//     console.error('Symptom analyzer error:', error);
//     return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
//   }
// }


// src/app/api/symptom-analyzer/route.ts

import { NextResponse, NextRequest } from 'next/server';

// Use the edge runtime for faster execution
export const runtime = 'edge';

// Define the expected structure for the request body
interface RequestBody {
  symptoms: string[];
  duration?: string;
  severity?: string;
}

// Define the expected structure for the AI's response
interface SymptomAnalysis {
  possible_conditions: string[];
  general_advice: string[];
  disclaimer: string;
}

/**
 * Safely extracts and parses a JSON object from a string.
 * This function handles cases where the AI's response might include markdown wrappers.
 * @param text The raw text from the AI's response.
 * @returns A parsed JSON object or null if parsing fails.
 */
function extractJsonFromResponse(text: string): SymptomAnalysis | null {
  try {
    // Remove markdown code block fences and trim whitespace
    const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleaned) as SymptomAnalysis;
  } catch (e) {
    console.error('Error parsing JSON from Gemini response:', e);
    return null;
  }
}

/**
 * Handle POST requests to analyze symptoms.
 * This is the primary function for the symptom analyzer API.
 */
export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

    // Validate that symptoms array is present and not empty
    if (!Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
    }

    // Ensure the API key is configured
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json({ error: 'Server configuration error: Missing API key' }, { status: 500 });
    }

    // Construct a clear and specific prompt for the AI model
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

Limit possible conditions and advice to 3-5 items each. Ensure accuracy, neutrality, and always emphasize seeking professional medical help. The disclaimer MUST be included exactly as provided.
`;

    // Make the request to the Gemini API
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
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
      cache: 'no-store',
    });

    // Handle failed API requests
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error: ${response.status} - ${errorText}`);
      return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    // Handle cases where the API returns an empty or invalid response
    if (!generatedText) {
      console.error('Invalid or empty response from analysis service:', data);
      return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
    }

    // Parse the JSON from the AI's text
    const analysis = extractJsonFromResponse(generatedText);

    if (!analysis) {
      console.error('Failed to parse analysis results from text:', generatedText);
      return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
    }

    // Return the successful analysis
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Symptom analyzer error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
  }
}

/**
 * Handle GET requests for a health check.
 * This is useful for monitoring the API's status in production.
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'Symptom Analyzer API is running',
    message: 'Use a POST request to analyze symptoms.',
    version: '1.0.0'
  }, { status: 200 });
}
