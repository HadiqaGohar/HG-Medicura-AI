import { NextRequest, NextResponse } from 'next/server';

interface ReportSummaryRequest {
  text: string;
  language?: string;
}

interface ReportSummaryResponse {
  summary: string;
  key_findings: string[];
  recommendations?: string[];
  next_steps?: string[];
  disclaimer: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReportSummaryRequest = await request.json();
    const { text, language } = body;

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Report text is required' },
        { status: 400 }
      );
    }

    // Call your FastAPI backend
    const backendResponse = await fetch('http://localhost:8000/api/health/report-summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text.trim(),
        language: language || 'en'
      }),
    });

    if (!backendResponse.ok) {
      throw new Error(`Backend responded with status: ${backendResponse.status}`);
    }

    const data: ReportSummaryResponse = await backendResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in report summary API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to summarize report',
        summary: "I'm having trouble processing this report right now. Please try again.",
        key_findings: ["Consult with your healthcare provider for detailed analysis"],
        disclaimer: "This information may not be accurate. Always consult healthcare professionals for medical advice."
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Report Summary API is working' },
    { status: 200 }
  );
}