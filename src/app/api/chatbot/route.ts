
import { NextRequest, NextResponse } from 'next/server';
// import { ResumeData } from '../../../../lib/store';

// // Define the expected request body structure
// interface ChatbotQuery {
//   message: string;
//   context?: {
//     resume_data?: ResumeData;
//   };
// }

// POST handler for /api/chatbot
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();

    // Validate the request body
    if (!body.message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // // Get backend URL from environment
    // const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'http://localhost:8000' || 'https://ehmt8mro7sonvp9cs5oblz.streamlit.app/';

    // // Forward the request to the FastAPI backend
    // const response = await fetch(`${FASTAPI_URL}/api/chatbot`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });
    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app';
const backendUrl = FASTAPI_URL.replace(/\/$/, ''); // Remove trailing slash if present

console.log('Sending request to:', `${backendUrl}/api/chatbot`, 'Body:', body);    

const response = await fetch(`${backendUrl}/api/chatbot`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});


    // Check if the backend response is successful
    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.detail || 'Failed to process chatbot query' },
        { status: response.status }
      );
    }

    // Parse the backend response
    const data = await response.json();

    // Return the chatbot response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error processing chatbot request:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please ensure the backend server is running and try again.' },
      { status: 500 }
    );
  }
}
