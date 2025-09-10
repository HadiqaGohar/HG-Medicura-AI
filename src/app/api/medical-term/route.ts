// import { NextRequest, NextResponse } from 'next/server';

// interface MedicalTermRequest {
//   term: string;
//   language?: string;
// }

// interface MedicalTermResponse {
//   response: string;
//   key_points?: string[];
//   related_terms?: string[];
//   pronunciation?: string;
//   disclaimer: string;
//   error?: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body: MedicalTermRequest = await request.json();
//     const { term, language } = body;

//     if (!term || term.trim().length === 0) {
//       return NextResponse.json(
//         { error: 'Medical term is required' },
//         { status: 400 }
//       );
//     }

//     // Call your FastAPI backend
//     const backendResponse = await fetch('http://localhost:8000/api/health/medical-term', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         term: term.trim(),
//         language: language || 'en'
//       }),
//     });

//     if (!backendResponse.ok) {
//       throw new Error(`Backend responded with status: ${backendResponse.status}`);
//     }

//     const data: MedicalTermResponse = await backendResponse.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error in medical term API:', error);
//     return NextResponse.json(
//       { 
//         error: 'Failed to explain medical term',
//         response: "I'm having trouble explaining this term right now. Please try again or consult a medical dictionary.",
//         disclaimer: "This information may not be accurate. Always consult healthcare professionals for medical advice."
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json(
//     { message: 'Medical Term API is working' },
//     { status: 200 }
//   );
// }



// src/app/api/medical-term/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface MedicalTermRequest {
  term: string;
  language?: string;
}

interface MedicalTermResponse {
  term: string;
  pronunciation: string;
  summary: string;
  detailed_analysis: string;
  key_points: string[];
  related_terms: string[];
  recommendations: string | string[];
  disclaimer: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: MedicalTermRequest = await request.json();
    const { term, language = 'en' } = body;

    if (!term || term.trim().length === 0) {
      return NextResponse.json(
        { error: 'Medical term is required' },
        { status: 400 }
      );
    }

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app';
    const targetUrl = `${FASTAPI_URL}/api/health/medical-term`;

    console.log('[Medical Term API] Fetching URL:', targetUrl);
    console.log('[Medical Term API] Request body:', { term: term.trim(), language });

    const backendResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hg-medicura-ai.vercel.app',
      },
      body: JSON.stringify({
        term: term.trim(),
        language,
      }),
    });

    console.log('[Medical Term API] Backend response status:', backendResponse.status);
    const backendData = await backendResponse.json();
    console.log('[Medical Term API] Backend response:', JSON.stringify(backendData, null, 2));

    if (!backendResponse.ok) {
      return NextResponse.json(
        {
          error: backendData.detail || 'Failed to explain medical term',
          term: term.trim(),
          pronunciation: '',
          summary: '',
          detailed_analysis: 'Unable to explain the term. Please try again or consult a medical dictionary.',
          key_points: [],
          related_terms: [],
          recommendations: 'None',
          disclaimer: 'This information is educational only. Not medical advice.',
        },
        { status: backendResponse.status }
      );
    }

    // Transform backend response
    const formattedData: MedicalTermResponse = {
      term: backendData.term || term.trim(),
      pronunciation: backendData.pronunciation || '',
      summary: backendData.summary || 'No summary available.',
      detailed_analysis: backendData.detailed_analysis || backendData.summary || 'No detailed explanation available.',
      key_points: Array.isArray(backendData.key_points) ? backendData.key_points : [],
      related_terms: Array.isArray(backendData.related_terms) ? backendData.related_terms : [],
      recommendations: backendData.recommendations || 'None',
      disclaimer: backendData.disclaimer || 'This information is educational only. Not medical advice.',
      error: backendData.error,
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('[Medical Term API] Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to explain medical term',
        term: '',
        pronunciation: '',
        summary: '',
        detailed_analysis: 'Unable to explain the term. Please try again or consult a medical dictionary.',
        key_points: [],
        related_terms: [],
        recommendations: 'None',
        disclaimer: 'This information is educational only. Not medical advice.',
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
