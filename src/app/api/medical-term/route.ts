import { NextRequest, NextResponse } from 'next/server';

interface MedicalTermRequest {
  term: string;
  language?: string;
}

interface MedicalTermResponse {
  response: string;
  key_points?: string[];
  related_terms?: string[];
  pronunciation?: string;
  disclaimer: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: MedicalTermRequest = await request.json();
    const { term, language } = body;

    if (!term || term.trim().length === 0) {
      return NextResponse.json(
        { error: 'Medical term is required' },
        { status: 400 }
      );
    }

    // Call your FastAPI backend
    const backendResponse = await fetch('http://localhost:8000/api/health/medical-term', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        term: term.trim(),
        language: language || 'en'
      }),
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend responded with status: ${backendResponse.status}`);
    }

    const data: MedicalTermResponse = await backendResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in medical term API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to explain medical term',
        response: "I'm having trouble explaining this term right now. Please try again or consult a medical dictionary.",
        disclaimer: "This information may not be accurate. Always consult healthcare professionals for medical advice."
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Medical Term API is working' },
    { status: 200 }
  );
}