// src/app/api/symptom-analyzer/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Switch to Node.js runtime for compatibility

interface RequestBody {
  symptoms: string[];
  duration?: string;
  severity?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();
    console.log('[Symptom Analyzer API] Request body:', body);

    const { symptoms, duration = 'not specified', severity = 'not specified' } = body;

    if (!Array.isArray(symptoms) || symptoms.length === 0) {
      console.log('[Symptom Analyzer API] Validation failed: At least one symptom is required');
      return NextResponse.json({ error: 'At least one symptom is required' }, { status: 400 });
    }

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL;
    if (!FASTAPI_URL) {
      console.error('[Symptom Analyzer API] Environment variable NEXT_PUBLIC_FASTAPI_URL is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const targetUrl = `${FASTAPI_URL}/api/health/symptom-analyzer`;
    console.log('[Symptom Analyzer API] Fetching URL:', targetUrl);

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hg-medicura-ai.vercel.app',
      },
      body: JSON.stringify({ symptoms, duration, severity }),
      cache: 'no-store',
    });

    console.log('[Symptom Analyzer API] Backend response status:', response.status);
    const responseData = await response.json();
    console.log('[Symptom Analyzer API] Backend response:', responseData);

    if (!response.ok) {
      console.log('[Symptom Analyzer API] Backend error:', responseData);
      return NextResponse.json(
        { error: responseData.detail || 'Failed to analyze symptoms' },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('[Symptom Analyzer API] Error processing request:', error);
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
