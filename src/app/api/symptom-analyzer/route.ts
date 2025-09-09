
// // // // // // src/app/api/symptom-analyzer/route.ts

// // // // // import { NextResponse } from 'next/server';

// // // // // export const runtime = 'edge'; // Optional: Use edge runtime for faster response if suitable

// // // // // interface RequestBody {
// // // // //   symptoms: string[];
// // // // //   duration?: string;
// // // // //   severity?: string;
// // // // // }

// // // // // interface SymptomAnalysis {
// // // // //   possible_conditions: string[];
// // // // //   general_advice: string[];
// // // // //   disclaimer: string;
// // // // // }

// // // // // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// // // // //   try {
// // // // //     const cleaned = text
// // // // //       .replace(/```json/g, '')
// // // // //       .replace(/```/g, '')
// // // // //       .trim();
// // // // //     return JSON.parse(cleaned) as SymptomAnalysis;
// // // // //   } catch {
// // // // //     return null;
// // // // //   }
// // // // // }

// // // // // export async function POST(request: Request) {
// // // // //   try {
// // // // //     const body: RequestBody = await request.json();
// // // // //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// // // // //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// // // // //       return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
// // // // //     }

// // // // //     const apiKey = process.env.GEMINI_API_KEY;
// // // // //     if (!apiKey) {
// // // // //       console.error('GEMINI_API_KEY is not set');
// // // // //       return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
// // // // //     }

// // // // //     const symptomsStr = symptoms.join(', ');
// // // // //     const prompt = `
// // // // // You are a professional health assistant. Analyze the following symptoms and provide a structured response.

// // // // // Symptoms: ${symptomsStr}
// // // // // Duration: ${duration}
// // // // // Severity: ${severity}

// // // // // Respond ONLY with valid JSON in this exact structure:
// // // // // {
// // // // //   "possible_conditions": ["condition1", "condition2", "condition3"],
// // // // //   "general_advice": ["advice1", "advice2", "advice3"],
// // // // //   "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// // // // // }

// // // // // Limit possible conditions and advice to 3-5 items each. Be accurate, neutral, and emphasize seeking professional help.
// // // // // `;

// // // // //     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
// // // // //     const response = await fetch(`${url}?key=${apiKey}`, {
// // // // //       method: 'POST',
// // // // //       headers: {
// // // // //         'Content-Type': 'application/json',
// // // // //       },
// // // // //       body: JSON.stringify({
// // // // //         contents: [
// // // // //           {
// // // // //             parts: [
// // // // //               {
// // // // //                 text: prompt,
// // // // //               },
// // // // //             ],
// // // // //           },
// // // // //         ],
// // // // //         generationConfig: {
// // // // //           temperature: 0.7,
// // // // //           maxOutputTokens: 512,
// // // // //           topP: 0.8,
// // // // //           topK: 40,
// // // // //         },
// // // // //         safetySettings: [
// // // // //           {
// // // // //             category: 'HARM_CATEGORY_HATE_SPEECH',
// // // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // // //           },
// // // // //           {
// // // // //             category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
// // // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // // //           },
// // // // //           {
// // // // //             category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
// // // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // // //           },
// // // // //           {
// // // // //             category: 'HARM_CATEGORY_HARASSMENT',
// // // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // // //           },
// // // // //         ],
// // // // //       }),
// // // // //     });

// // // // //     if (!response.ok) {
// // // // //       console.error(`Gemini API error: ${response.status} - ${await response.text()}`);
// // // // //       return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
// // // // //     }

// // // // //     const data = await response.json();
// // // // //     if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
// // // // //       return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
// // // // //     }

// // // // //     const generatedText = data.candidates[0].content.parts[0].text;
// // // // //     const analysis = extractJsonFromResponse(generatedText);

// // // // //     if (!analysis) {
// // // // //       return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
// // // // //     }

// // // // //     return NextResponse.json(analysis);
// // // // //   } catch (error) {
// // // // //     console.error('Symptom analyzer error:', error);
// // // // //     return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
// // // // //   }
// // // // // }

// // // // // // import { NextRequest, NextResponse } from 'next/server';

// // // // // // export const runtime = 'edge';

// // // // // // interface RequestBody {
// // // // // //   symptoms: string[];
// // // // // //   duration?: string;
// // // // // //   severity?: string;
// // // // // // }

// // // // // // interface SymptomAnalysis {
// // // // // //   possible_conditions: string[];
// // // // // //   general_advice: string[];
// // // // // //   disclaimer: string;
// // // // // // }

// // // // // // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// // // // // //   try {
// // // // // //     const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
// // // // // //     return JSON.parse(cleaned) as SymptomAnalysis;
// // // // // //   } catch {
// // // // // //     return null;
// // // // // //   }
// // // // // // }

// // // // // // export async function POST(request: NextRequest) {
// // // // // //   console.log('[SymptomAnalyzer] Received POST request:', {
// // // // // //     url: request.url,
// // // // // //     headers: Object.fromEntries(request.headers),
// // // // // //     method: request.method,
// // // // // //     ip: request.ip,
// // // // // //   });

// // // // // //   try {
// // // // // //     const body: RequestBody = await request.json();
// // // // // //     console.log('[SymptomAnalyzer] Request body:', body);

// // // // // //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// // // // // //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// // // // // //       console.log('[SymptomAnalyzer] Validation failed: At least one symptom is required');
// // // // // //       return NextResponse.json(
// // // // // //         { error: 'At least one symptom is required' },
// // // // // //         { status: 400 }
// // // // // //       );
// // // // // //     }

// // // // // //     const apiKey = process.env.GEMINI_API_KEY;
// // // // // //     if (!apiKey) {
// // // // // //       console.error('[SymptomAnalyzer] GEMINI_API_KEY is not set');
// // // // // //       return NextResponse.json(
// // // // // //         { error: 'Server configuration error' },
// // // // // //         { status: 500 }
// // // // // //       );
// // // // // //     }

// // // // // //     const symptomsStr = symptoms.join(', ');
// // // // // //     const prompt = `
// // // // // // You are a professional health assistant. Analyze the following symptoms and provide a structured response.

// // // // // // Symptoms: ${symptomsStr}
// // // // // // Duration: ${duration}
// // // // // // Severity: ${severity}

// // // // // // Respond ONLY with valid JSON in this exact structure:
// // // // // // {
// // // // // //   "possible_conditions": ["condition1", "condition2", "condition3"],
// // // // // //   "general_advice": ["advice1", "advice2", "advice3"],
// // // // // //   "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// // // // // // }

// // // // // // Limit possible conditions and advice to 3-5 items each. Be accurate, neutral, and emphasize seeking professional help.
// // // // // // `;

// // // // // //     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
// // // // // //     console.log('[SymptomAnalyzer] Fetching Gemini API:', url);

// // // // // //     const response = await fetch(`${url}?key=${apiKey}`, {
// // // // // //       method: 'POST',
// // // // // //       headers: {
// // // // // //         'Content-Type': 'application/json',
// // // // // //       },
// // // // // //       body: JSON.stringify({
// // // // // //         contents: [{ parts: [{ text: prompt }] }],
// // // // // //         generationConfig: {
// // // // // //           temperature: 0.7,
// // // // // //           maxOutputTokens: 512,
// // // // // //           topP: 0.8,
// // // // // //           topK: 40,
// // // // // //         },
// // // // // //         safetySettings: [
// // // // // //           { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // // // // //           { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // // // // //           { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // // // // //           { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// // // // // //         ],
// // // // // //       }),
// // // // // //       cache: 'no-store',
// // // // // //     });

// // // // // //     console.log('[SymptomAnalyzer] Gemini API response status:', response.status);

// // // // // //     if (!response.ok) {
// // // // // //       const errorText = await response.text();
// // // // // //       console.error('[SymptomAnalyzer] Gemini API error:', response.status, errorText);
// // // // // //       return NextResponse.json(
// // // // // //         { error: 'Failed to analyze symptoms. Please try again later.' },
// // // // // //         { status: 500 }
// // // // // //       );
// // // // // //     }

// // // // // //     const data = await response.json();
// // // // // //     if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
// // // // // //       console.error('[SymptomAnalyzer] Invalid response from Gemini API:', data);
// // // // // //       return NextResponse.json(
// // // // // //         { error: 'Invalid response from analysis service' },
// // // // // //         { status: 500 }
// // // // // //       );
// // // // // //     }

// // // // // //     const generatedText = data.candidates[0].content.parts[0].text;
// // // // // //     console.log('[SymptomAnalyzer] Gemini API raw response:', generatedText);

// // // // // //     const analysis = extractJsonFromResponse(generatedText);
// // // // // //     if (!analysis) {
// // // // // //       console.error('[SymptomAnalyzer] Failed to parse Gemini API response:', generatedText);
// // // // // //       return NextResponse.json(
// // // // // //         { error: 'Failed to parse analysis results' },
// // // // // //         { status: 500 }
// // // // // //       );
// // // // // //     }

// // // // // //     console.log('[SymptomAnalyzer] Parsed analysis:', analysis);
// // // // // //     return NextResponse.json(analysis);
// // // // // //   } catch (error) {
// // // // // //     console.error('[SymptomAnalyzer] Error:', error);
// // // // // //     return NextResponse.json(
// // // // // //       { error: 'An unexpected error occurred. Please try again.' },
// // // // // //       { status: 500 }
// // // // // //     );
// // // // // //   }
// // // // // // }

// // // // // // export async function GET(request: NextRequest) {
// // // // // //   console.log('[SymptomAnalyzer] Received GET request (not allowed):', {
// // // // // //     url: request.url,
// // // // // //     headers: Object.fromEntries(request.headers),
// // // // // //     method: request.method,
// // // // // //     ip: request.ip,
// // // // // //   });
// // // // // //   return NextResponse.json(
// // // // // //     { error: 'Method Not Allowed. Use POST for /api/symptom-analyzer' },
// // // // // //     { status: 405 }
// // // // // //   );
// // // // // // }

// // // // // // export const config = {
// // // // // //   api: {
// // // // // //     bodyParser: {
// // // // // //       sizeLimit: '1mb',
// // // // // //     },
// // // // // //   },
// // // // // // };


// // // // // GEMMMMMMIN


// // // // // src/app/api/symptom-analyzer/route.ts

// // // // import { NextResponse } from 'next/server';

// // // // export const runtime = 'edge';

// // // // interface RequestBody {
// // // //   symptoms: string[];
// // // //   duration?: string;
// // // //   severity?: string;
// // // // }

// // // // interface SymptomAnalysis {
// // // //   possible_conditions: string[];
// // // //   general_advice: string[];
// // // //   disclaimer: string;
// // // // }

// // // // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// // // //   try {
// // // //     // Clean the response by removing markdown and trimming whitespace
// // // //     const cleaned = text
// // // //       .replace(/```json/g, '')
// // // //       .replace(/```/g, '')
// // // //       .trim();
// // // //     return JSON.parse(cleaned) as SymptomAnalysis;
// // // //   } catch (e) {
// // // //     console.error('Error parsing JSON from Gemini response:', e);
// // // //     return null;
// // // //   }
// // // // }

// // // // export async function POST(request: Request) {
// // // //   try {
// // // //     const body: RequestBody = await request.json();
// // // //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// // // //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// // // //       return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
// // // //     }

// // // //     const apiKey = process.env.GEMINI_API_KEY;
// // // //     if (!apiKey) {
// // // //       console.error('GEMINI_API_KEY is not set');
// // // //       return NextResponse.json({ error: 'Server configuration error: Missing API key' }, { status: 500 });
// // // //     }

// // // //     const symptomsStr = symptoms.join(', ');
// // // //     const prompt = `
// // // // You are a professional health assistant. Analyze the following symptoms and provide a structured response.

// // // // Symptoms: ${symptomsStr}
// // // // Duration: ${duration}
// // // // Severity: ${severity}

// // // // Respond ONLY with valid JSON in this exact structure:
// // // // {
// // // //   "possible_conditions": ["condition1", "condition2", "condition3"],
// // // //   "general_advice": ["advice1", "advice2", "advice3"],
// // // //   "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// // // // }

// // // // Limit possible conditions and advice to 3-5 items each. Ensure accuracy, neutrality, and always emphasize seeking professional medical help. The disclaimer MUST be included exactly as provided.
// // // // `;

// // // //     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
// // // //     const response = await fetch(`${url}?key=${apiKey}`, {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify({
// // // //         contents: [
// // // //           {
// // // //             parts: [
// // // //               {
// // // //                 text: prompt,
// // // //               },
// // // //             ],
// // // //           },
// // // //         ],
// // // //         generationConfig: {
// // // //           temperature: 0.7,
// // // //           maxOutputTokens: 512,
// // // //           topP: 0.8,
// // // //           topK: 40,
// // // //         },
// // // //         safetySettings: [
// // // //           {
// // // //             category: 'HARM_CATEGORY_HATE_SPEECH',
// // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // //           },
// // // //           {
// // // //             category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
// // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // //           },
// // // //           {
// // // //             category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
// // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // //           },
// // // //           {
// // // //             category: 'HARM_CATEGORY_HARASSMENT',
// // // //             threshold: 'BLOCK_MEDIUM_AND_ABOVE',
// // // //           },
// // // //         ],
// // // //       }),
// // // //     });

// // // //     if (!response.ok) {
// // // //       const errorText = await response.text();
// // // //       console.error(`Gemini API error: ${response.status} - ${errorText}`);
// // // //       return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
// // // //     }

// // // //     const data = await response.json();
// // // //     const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

// // // //     if (!generatedText) {
// // // //       console.error('Invalid or empty response from analysis service:', data);
// // // //       return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
// // // //     }

// // // //     const analysis = extractJsonFromResponse(generatedText);

// // // //     if (!analysis) {
// // // //       console.error('Failed to parse analysis results from text:', generatedText);
// // // //       return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
// // // //     }

// // // //     return NextResponse.json(analysis);
// // // //   } catch (error) {
// // // //     console.error('Symptom analyzer error:', error);
// // // //     return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
// // // //   }
// // // // }


// // // // src/app/api/symptom-analyzer/route.ts

// // // import { NextResponse, NextRequest } from 'next/server';

// // // // Use the edge runtime for faster execution
// // // export const runtime = 'edge';

// // // // Define the expected structure for the request body
// // // interface RequestBody {
// // //   symptoms: string[];
// // //   duration?: string;
// // //   severity?: string;
// // // }

// // // // Define the expected structure for the AI's response
// // // interface SymptomAnalysis {
// // //   possible_conditions: string[];
// // //   general_advice: string[];
// // //   disclaimer: string;
// // // }

// // // /**
// // //  * Safely extracts and parses a JSON object from a string.
// // //  * This function handles cases where the AI's response might include markdown wrappers.
// // //  * @param text The raw text from the AI's response.
// // //  * @returns A parsed JSON object or null if parsing fails.
// // //  */
// // // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// // //   try {
// // //     // Remove markdown code block fences and trim whitespace
// // //     const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
// // //     return JSON.parse(cleaned) as SymptomAnalysis;
// // //   } catch (e) {
// // //     console.error('Error parsing JSON from Gemini response:', e);
// // //     return null;
// // //   }
// // // }

// // // /**
// // //  * Handle POST requests to analyze symptoms.
// // //  * This is the primary function for the symptom analyzer API.
// // //  */
// // // export async function POST(request: NextRequest) {
// // //   try {
// // //     const body: RequestBody = await request.json();
// // //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// // //     // Validate that symptoms array is present and not empty
// // //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// // //       return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
// // //     }

// // //     // Ensure the API key is configured
// // //     const apiKey = process.env.GEMINI_API_KEY;
// // //     if (!apiKey) {
// // //       console.error('GEMINI_API_KEY is not set');
// // //       return NextResponse.json({ error: 'Server configuration error: Missing API key' }, { status: 500 });
// // //     }

// // //     // Construct a clear and specific prompt for the AI model
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

// // // Limit possible conditions and advice to 3-5 items each. Ensure accuracy, neutrality, and always emphasize seeking professional medical help. The disclaimer MUST be included exactly as provided.
// // // `;

// // //     // Make the request to the Gemini API
// // //     const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
// // //     const response = await fetch(`${url}?key=${apiKey}`, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify({
// // //         contents: [
// // //           {
// // //             parts: [
// // //               {
// // //                 text: prompt,
// // //               },
// // //             ],
// // //           },
// // //         ],
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

// // //     // Handle failed API requests
// // //     if (!response.ok) {
// // //       const errorText = await response.text();
// // //       console.error(`Gemini API error: ${response.status} - ${errorText}`);
// // //       return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
// // //     }

// // //     const data = await response.json();
// // //     const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

// // //     // Handle cases where the API returns an empty or invalid response
// // //     if (!generatedText) {
// // //       console.error('Invalid or empty response from analysis service:', data);
// // //       return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
// // //     }

// // //     // Parse the JSON from the AI's text
// // //     const analysis = extractJsonFromResponse(generatedText);

// // //     if (!analysis) {
// // //       console.error('Failed to parse analysis results from text:', generatedText);
// // //       return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
// // //     }

// // //     // Return the successful analysis
// // //     return NextResponse.json(analysis);
// // //   } catch (error) {
// // //     console.error('Symptom analyzer error:', error);
// // //     return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
// // //   }
// // // }

// // // /**
// // //  * Handle GET requests for a health check.
// // //  * This is useful for monitoring the API's status in production.
// // //  */
// // // export async function GET(request: NextRequest) {
// // //   return NextResponse.json({
// // //     status: 'Symptom Analyzer API is running',
// // //     message: 'Use a POST request to analyze symptoms.',
// // //     version: '1.0.0'
// // //   }, { status: 200 });
// // // }







// // import { NextResponse, NextRequest } from 'next/server';

// // export const runtime = 'edge';

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

// // /**
// //  * Safely extracts and parses a JSON object from a string.
// //  * This function handles cases where the AI's response might include markdown wrappers.
// //  * @param text The raw text from the AI's response.
// //  * @returns A parsed JSON object or null if parsing fails.
// //  */
// // function extractJsonFromResponse(text: string): SymptomAnalysis | null {
// //   try {
// //     const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
// //     return JSON.parse(cleaned) as SymptomAnalysis;
// //   } catch (e) {
// //     console.error('Error parsing JSON from Gemini response:', e);
// //     return null;
// //   }
// // }

// // /**
// //  * Handle POST requests to analyze symptoms.
// //  */
// // export async function POST(request: NextRequest) {
// //   const maxRetries = 5;
// //   const initialDelay = 1000; // 1 second

// //   try {
// //     const body: RequestBody = await request.json();
// //     const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

// //     if (!Array.isArray(symptoms) || symptoms.length === 0) {
// //       return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
// //     }

// //     const apiKey = process.env.GEMINI_API_KEY;
// //     if (!apiKey) {
// //       console.error('GEMINI_API_KEY is not set');
// //       return NextResponse.json({ error: 'Server configuration error: Missing API key' }, { status: 500 });
// //     }

// //     const symptomsStr = symptoms.join(', ');

// //     // Construct a clear and specific prompt for the AI model
// //     const prompt = `Analyze the following symptoms and provide a structured JSON response.`;

// //     const requestPayload = {
// //       contents: [{
// //         role: "user",
// //         parts: [{
// //           text: `
// //             Symptoms: ${symptomsStr}
// //             Duration: ${duration}
// //             Severity: ${severity}
// //           `
// //         }]
// //       }],
// //       systemInstruction: {
// //         parts: [{
// //           text: `
// //             You are a professional health assistant. Your purpose is to analyze symptoms and provide information.
// //             Respond ONLY with valid JSON in this exact structure:
// //             {
// //               "possible_conditions": ["condition1", "condition2", "condition3"],
// //               "general_advice": ["advice1", "advice2", "advice3"],
// //               "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
// //             }
            
// //             Limit possible conditions and advice to 3-5 items each. Be accurate, neutral, and always emphasize seeking professional medical help. The disclaimer MUST be included exactly as provided.
// //           `
// //         }]
// //       },
// //       generationConfig: {
// //         temperature: 0.7,
// //         maxOutputTokens: 512,
// //         topP: 0.8,
// //         topK: 40,
// //         responseMimeType: "application/json",
// //         responseSchema: {
// //           type: "OBJECT",
// //           properties: {
// //             "possible_conditions": {
// //               type: "ARRAY",
// //               items: { type: "STRING" }
// //             },
// //             "general_advice": {
// //               type: "ARRAY",
// //               items: { type: "STRING" }
// //             },
// //             "disclaimer": { type: "STRING" }
// //           },
// //           "propertyOrdering": ["possible_conditions", "general_advice", "disclaimer"]
// //         }
// //       },
// //       safetySettings: [
// //         { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// //         { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// //         { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// //         { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
// //       ],
// //     };

// //     let response;
// //     for (let i = 0; i < maxRetries; i++) {
// //       try {
// //         const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent';
// //         response = await fetch(`${url}?key=${apiKey}`, {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(requestPayload),
// //           cache: 'no-store',
// //         });
// //         if (response.status !== 429) {
// //           break; // Exit the retry loop on success or a non-rate-limit error
// //         }
// //         const delay = initialDelay * Math.pow(2, i);
// //         console.warn(`Rate limit exceeded. Retrying in ${delay}ms...`);
// //         await new Promise(res => setTimeout(res, delay));
// //       } catch (e) {
// //         console.error(`Fetch attempt ${i + 1} failed:`, e);
// //         if (i === maxRetries - 1) throw e;
// //       }
// //     }

// //     if (!response || !response.ok) {
// //       const errorText = await response?.text();
// //       // Log the exact error from the Gemini API for debugging
// //       console.error(`Gemini API error: ${response?.status} - ${errorText}`);
// //       return NextResponse.json({ error: 'Failed to analyze symptoms. Please try again later.' }, { status: 500 });
// //     }

// //     const data = await response.json();
// //     const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

// //     if (!generatedText) {
// //       console.error('Invalid or empty response from analysis service:', data);
// //       return NextResponse.json({ error: 'Invalid response from analysis service' }, { status: 500 });
// //     }

// //     const analysis = extractJsonFromResponse(generatedText);

// //     if (!analysis) {
// //       console.error('Failed to parse analysis results from text:', generatedText);
// //       return NextResponse.json({ error: 'Failed to parse analysis results' }, { status: 500 });
// //     }

// //     return NextResponse.json(analysis);
// //   } catch (error) {
// //     console.error('Symptom analyzer error:', error);
// //     return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
// //   }
// // }

// // /**
// //  * Handle GET requests for a health check.
// //  * This is useful for monitoring the API's status in production.
// //  */
// // export async function GET(request: NextRequest) {
// //   return NextResponse.json({
// //     status: 'Symptom Analyzer API is running',
// //     message: 'Use a POST request to analyze symptoms.'
// //   }, { status: 200 });
// // }


// import { NextRequest, NextResponse } from 'next/server';

// // Yeh ek "catch-all" route hai jo kisi bhi request ko handle karegi jo /api/ se shuru hoti hai.
// // This is a "catch-all" route that will handle any request starting with /api/.
// export async function POST(req: NextRequest) {
//   try {
//     // Check for the Gemini API key. This is a crucial first step
//     // to prevent server-side errors if the key is not configured.
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json(
//         { error: 'Server configuration error: Missing API key' },
//         { status: 500 }
//       );
//     }

//     // Parse the request body to get the symptom details from the frontend.
//     const { symptoms, duration, severity } = await req.json();

//     // Validate that symptoms were provided.
//     if (!symptoms || symptoms.length === 0) {
//       return NextResponse.json(
//         { error: 'Please provide at least one symptom.' },
//         { status: 400 }
//       );
//     }

//     // Construct the user query based on the provided data.
//     const userQuery = `Analyze the following symptoms to provide possible conditions and general advice. The user reports these symptoms: ${symptoms.join(', ')}. The duration of the symptoms is: ${duration}. The severity is: ${severity}. Please provide the output as a JSON object with the following structure:
//     {
//       "possible_conditions": [
//         "Condition 1",
//         "Condition 2"
//       ],
//       "general_advice": [
//         "Advice 1",
//         "Advice 2"
//       ],
//       "disclaimer": "This is not medical advice. Always consult with a healthcare professional."
//     }`;

//     // Define the system instructions to guide the model's behavior.
//     const systemInstruction = "You are a highly knowledgeable medical symptom analyzer. Your purpose is to provide potential conditions and general health advice based on a user's reported symptoms. You must always include a strong disclaimer that your analysis is not a substitute for professional medical advice. Base your analysis on up-to-date, real-time medical information from the web. The final output must be a single JSON object. Do not include any text outside of the JSON object.";

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

//     // Construct the payload for the Gemini API call.
//     const payload = {
//       contents: [{ parts: [{ text: userQuery }] }],
//       tools: [{ "google_search": {} }],
//       systemInstruction: {
//         parts: [{ text: systemInstruction }]
//       },
//     };

//     // Make the API call to Gemini.
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) {
//       // If the Gemini API call fails, get the specific error from its response.
//       const errorData = await response.json();
//       console.error('Gemini API Error:', errorData);
//       return NextResponse.json(
//         { error: 'Internal API error. Please check server logs.' },
//         { status: 500 }
//       );
//     }

//     const result = await response.json();
//     const candidate = result.candidates?.[0];

//     if (!candidate || !candidate.content?.parts?.[0]?.text) {
//       return NextResponse.json(
//         { error: 'Failed to get a valid response from the AI model.' },
//         { status: 500 }
//       );
//     }

//     // Extract the generated text from the response.
//     const generatedText = candidate.content.parts[0].text;

//     // The API is instructed to return a JSON object, so we parse it directly.
//     const analysis = JSON.parse(generatedText);

//     // Return the parsed analysis with a 200 OK status.
//     return NextResponse.json(analysis, { status: 200 });
//   } catch (err) {
//     console.error('An unexpected error occurred:', err);
//     return NextResponse.json(
//       { error: 'An unexpected error occurred on the server.' },
//       { status: 500 }
//     );
//   }
// }






// src/app/api/symptom-analyzer/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

// Rate limiting configuration
const RATE_LIMIT = {
  maxRequests: 10,
  timeWindow: 60000, // 1 minute
};

// Simple in-memory rate limiting (consider Redis for production)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

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

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT.timeWindow });
    return { allowed: true, remaining: RATE_LIMIT.maxRequests - 1 };
  }

  if (record.count >= RATE_LIMIT.maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count += 1;
  return { allowed: true, remaining: RATE_LIMIT.maxRequests - record.count };
}

function validateSymptoms(symptoms: any): string[] | null {
  if (!Array.isArray(symptoms)) return null;
  
  const validSymptoms = symptoms.filter(
    symptom => typeof symptom === 'string' && symptom.trim().length > 0
  );
  
  return validSymptoms.length > 0 ? validSymptoms : null;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil(RATE_LIMIT.timeWindow / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT.maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil((Date.now() + RATE_LIMIT.timeWindow) / 1000).toString()
          }
        }
      );
    }

    // Parse and validate request body
    let body: RequestBody;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate symptoms
    const validSymptoms = validateSymptoms(body.symptoms);
    if (!validSymptoms) {
      return NextResponse.json(
        { error: 'At least one valid symptom is required' },
        { status: 400 }
      );
    }

    const duration = body.duration || 'not specified';
    const severity = body.severity || 'not specified';

    // Check API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Prepare the prompt
    const symptomsStr = validSymptoms.join(', ');
    const prompt = `
You are a professional medical assistant. Analyze these symptoms and provide ONLY a JSON response.

SYMPTOMS: ${symptomsStr}
DURATION: ${duration}
SEVERITY: ${severity}

Respond with EXACTLY this JSON format, nothing else:
{
  "possible_conditions": ["condition1", "condition2", "condition3"],
  "general_advice": ["advice1", "advice2", "advice3"],
  "disclaimer": "This is not medical advice. Consult a healthcare professional for proper diagnosis and treatment."
}

Rules:
1. Provide 3-5 possible conditions maximum
2. Provide 3-5 general advice items maximum  
3. Use the exact disclaimer text provided
4. Be medically accurate and conservative
5. Always emphasize consulting a doctor
`;

    // Call Gemini API
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.1, // Lower temperature for more consistent JSON
          maxOutputTokens: 1024,
          topP: 0.8,
          topK: 40,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          }
        ]
      }),
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Service temporarily overloaded. Please try again shortly.' },
          { status: 503 }
        );
      }
      
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          { error: 'Authentication error. Please contact support.' },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to analyze symptoms. Please try again.' },
        { status: 502 }
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      console.error('Empty response from Gemini API:', data);
      return NextResponse.json(
        { error: 'No analysis generated. Please try again.' },
        { status: 500 }
      );
    }

    // Extract and validate JSON
    let analysis: SymptomAnalysis;
    try {
      // Clean the response (remove markdown code blocks if present)
      const cleanedText = generatedText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();
      
      analysis = JSON.parse(cleanedText);
      
      // Validate the response structure
      if (!analysis.possible_conditions || !analysis.general_advice || !analysis.disclaimer) {
        throw new Error('Invalid response structure');
      }
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', generatedText, parseError);
      return NextResponse.json(
        { error: 'Failed to process analysis results. Please try again.' },
        { status: 500 }
      );
    }

    // Successful response
    return NextResponse.json(analysis, {
      status: 200,
      headers: {
        'X-RateLimit-Limit': RATE_LIMIT.maxRequests.toString(),
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        'X-RateLimit-Reset': Math.ceil((Date.now() + RATE_LIMIT.timeWindow) / 1000).toString(),
        'Cache-Control': 'no-store, max-age=0'
      }
    });

  } catch (error: any) {
    console.error('Symptom analyzer error:', error);
    
    if (error.name === 'AbortError' || error.name === 'TimeoutError') {
      return NextResponse.json(
        { error: 'Request timeout. Please try again.' },
        { status: 504 }
      );
    }
    
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      status: 'OK',
      message: 'Symptom Analyzer API is running',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    },
    { status: 200 }
  );
}

// Handle other HTTP methods
export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PATCH() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
