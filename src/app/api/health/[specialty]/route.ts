import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: { specialty: string } }) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log(`[${params.specialty} API] Request body:`, body);

    // Validate the request body
    if (!body.symptoms || !Array.isArray(body.symptoms) || body.symptoms.length === 0) {
      console.log(`[${params.specialty} API] Validation failed: Symptoms are required`);
      return NextResponse.json(
        { error: 'Symptoms are required and must be a non-empty array' },
        { status: 400 }
      );
    }

    // Get backend URL from environment
    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL;
    if (!FASTAPI_URL) {
      console.error(`[${params.specialty} API] Environment variable NEXT_PUBLIC_FASTAPI_URL is not set`);
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Map specialty to endpoint
    const validSpecialties = [
      'cardiology', 'dermatology', 'neurology', 'pulmonology', 'ophthalmology',
      'dental', 'allergy-immunology', 'pediatrics', 'orthopedics', 'mental-health',
      'endocrinology', 'gastroenterology', 'radiology', 'infectious-disease', 'vaccination-advisor'
    ];

    if (!validSpecialties.includes(params.specialty)) {
      console.log(`[${params.specialty} API] Invalid specialty`);
      return NextResponse.json(
        { error: `Invalid specialty: ${params.specialty}` },
        { status: 400 }
      );
    }

    const targetUrl = `${FASTAPI_URL}/api/health/${params.specialty}`;
    console.log(`[${params.specialty} API] Fetching URL:`, targetUrl);

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

    console.log(`[${params.specialty} API] Backend response status:`, response.status);
    const responseData = await response.json();
    console.log(`[${params.specialty} API] Backend response:`, responseData);

    // Check if the backend response is successful
    if (!response.ok) {
      console.log(`[${params.specialty} API] Backend error:`, responseData);
      return NextResponse.json(
        { error: responseData.detail || `Failed to process ${params.specialty} query` },
        { status: response.status }
      );
    }

    // Return the response
    return NextResponse.json(responseData);
  } catch (error) {
    console.error(`[${params.specialty} API] Error processing request:`, error);
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
