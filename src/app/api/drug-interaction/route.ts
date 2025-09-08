import { NextRequest, NextResponse } from 'next/server';

interface DrugInteractionRequest {
  medications: string[];
  age?: number;
  gender?: string;
  existing_conditions?: string[];
  other_medications?: string[];
}

interface Interaction {
  medications: string[];
  severity: 'high' | 'medium' | 'low' | 'unknown';
  description: string;
  recommendation?: string;
}

interface DrugInteractionResponse {
  interactions: Interaction[];
  recommendations: string[];
  alternative_options: string[];
  general_advice: string[];
  disclaimer: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DrugInteractionRequest = await request.json();
    const { medications, age, gender, existing_conditions, other_medications } = body;

    if (!medications || !Array.isArray(medications) || medications.length === 0) {
      return NextResponse.json(
        { error: 'At least one medication is required' },
        { status: 400 }
      );
    }

    // Call your FastAPI backend
    const backendResponse = await fetch('http://localhost:8000/api/health/drug-interactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        medications,
        age: age || undefined,
        gender: gender || undefined,
        existing_conditions: existing_conditions || [],
        other_medications: other_medications || [],
      }),
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend responded with status: ${backendResponse.status}`);
    }

    const data: DrugInteractionResponse = await backendResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in drug interaction API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to check drug interactions',
        interactions: [{
          medications: [],
          severity: 'unknown',
          description: 'Service temporarily unavailable. Please try again later.'
        }],
        recommendations: ['Consult a healthcare professional for accurate interaction information'],
        alternative_options: [],
        general_advice: [
          'Always inform your doctor about all medications you take',
          'Keep a current medication list with you',
          'Read medication guides carefully'
        ],
        disclaimer: 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Drug Interaction API is working' },
    { status: 200 }
  );
}