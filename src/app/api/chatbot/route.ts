// import { NextRequest, NextResponse } from 'next/server';

// // POST handler for /api/chatbot
// export async function POST(req: NextRequest) {
//   try {
//     // Parse the request body
//     const body = await req.json();

//     // Validate the request body
//     if (!body.message) {
//       return NextResponse.json(
//         { error: 'Message is required' },
//         { status: 400 }
//       );
//     }

//     // Get backend URL from environment
//     const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app' || 'http://localhost:8000';

//     // Forward the request to the FastAPI backend
//     const response = await fetch(`${FASTAPI_URL}/api/chatbot`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });

//     // Check if the backend response is successful
//     if (!response.ok) {
//       const errorData = await response.json();
//       return NextResponse.json(
//         { error: errorData.detail || 'Failed to process chatbot query' },
//         { status: response.status }
//       );
//     }

//     // Parse the backend response
//     const data = await response.json();

//     // Return the chatbot response
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error processing chatbot request:', error);
//     return NextResponse.json(
//       { error: 'Internal server error. Please ensure the backend server is running and try again.' },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log('[Chatbot API] Request body:', body);

    // Validate the request body
    if (!body.message) {
      console.log('[Chatbot API] Validation failed: Message is required');
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Get backend URL from environment
    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL;
    if (!FASTAPI_URL) {
      console.error('[Chatbot API] Environment variable NEXT_PUBLIC_FASTAPI_URL is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    const targetUrl = `${FASTAPI_URL}/api/chatbot`;
    console.log('[Chatbot API] Fetching URL:', targetUrl);

    // Forward the request to the FastAPI backend
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hg-medicura-ai.vercel.app',
      },
      body: JSON.stringify(body),
      cache: 'no-store', // Prevent caching for dynamic requests
    });

    console.log('[Chatbot API] Backend response status:', response.status);
    const responseData = await response.json();
    console.log('[Chatbot API] Backend response:', responseData);

    // Check if the backend response is successful
    if (!response.ok) {
      console.log('[Chatbot API] Backend error:', responseData);
      return NextResponse.json(
        { error: responseData.detail || 'Failed to process chatbot query' },
        { status: response.status }
      );
    }

    // Return the chatbot response
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('[Chatbot API] Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Export config for Next.js (if needed for larger payloads)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // Adjust as needed
    },
  },
};
