import { NextRequest, NextResponse } from 'next/server';

// Define the expected params type
interface RouteParams {
  params: {
    specialty: string;
  };
}

export async function POST(req: NextRequest, context: RouteParams) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log(`[${context.params.specialty} API] Request body:`, body);

    // Validate the request body
    if (!body.symptoms || !Array.isArray(body.symptoms) || body.symptoms.length === 0) {
      console.log(`[${context.params.specialty} API] Validation failed: Symptoms are required`);
      return NextResponse.json(
        { error: 'Symptoms are required and must be a non-empty array' },
        { status: 400 }
      );
    }

    // Get backend URL from environment
    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL;
    if (!FASTAPI_URL) {
      console.error(`[${context.params.specialty} API] Environment variable NEXT_PUBLIC_FASTAPI_URL is not set`);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Validate specialty
    const validSpecialties = [
      'cardiology', 'dermatology', 'neurology', 'pulmonology', 'ophthalmology',
      'dental', 'allergy-immunology', 'pediatrics', 'orthopedics', 'mental-health',
      'endocrinology', 'gastroenterology', 'radiology', 'infectious-disease', 'vaccination-advisor'
    ];

    const specialty = context.params.specialty;
    if (!validSpecialties.includes(specialty)) {
      console.log(`[${specialty} API] Invalid specialty`);
      return NextResponse.json(
        { error: `Invalid specialty: ${specialty}` },
        { status: 400 }
      );
    }

    const targetUrl = `${FASTAPI_URL}/api/health/${specialty}`;
    console.log(`[${specialty} API] Fetching URL:`, targetUrl);

    // Forward the request to the FastAPI backend
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hg-medicura-ai.vercel.app',
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    console.log(`[${specialty} API] Backend response status:`, response.status);
    const responseData = await response.json();
    console.log(`[${specialty} API] Backend response:`, responseData);

    // Check if the backend response is successful
    if (!response.ok) {
      console.log(`[${specialty} API] Backend error:`, responseData);
      return NextResponse.json(
        { error: responseData.detail || `Failed to process ${specialty} query` },
        { status: response.status }
      );
    }

    // Return the response
    return NextResponse.json(responseData);
  } catch (error) {
    console.error(`[${context.params.specialty} API] Error processing request:`, error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
