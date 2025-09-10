// import { NextRequest, NextResponse } from 'next/server';

// interface ReportSummaryRequest {
//   text: string;
//   language?: string;
// }

// interface ReportSummaryResponse {
//   summary: string;
//   key_findings: string[];
//   recommendations?: string[];
//   next_steps?: string[];
//   disclaimer: string;
//   error?: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body: ReportSummaryRequest = await request.json();
//     const { text, language } = body;

//     if (!text || text.trim().length === 0) {
//       return NextResponse.json(
//         { error: 'Report text is required' },
//         { status: 400 }
//       );
//     }

//     // Call your FastAPI backend
//     const backendResponse = await fetch('http://localhost:8000/api/health/report-summarize', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         text: text.trim(),
//         language: language || 'en'
//       }),
//     });

//     if (!backendResponse.ok) {
//       throw new Error(`Backend responded with status: ${backendResponse.status}`);
//     }

//     const data: ReportSummaryResponse = await backendResponse.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Error in report summary API:', error);
//     return NextResponse.json(
//       { 
//         error: 'Failed to summarize report',
//         summary: "I'm having trouble processing this report right now. Please try again.",
//         key_findings: ["Consult with your healthcare provider for detailed analysis"],
//         disclaimer: "This information may not be accurate. Always consult healthcare professionals for medical advice."
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json(
//     { message: 'Report Summary API is working' },
//     { status: 200 }
//   );
// }




// src/app/api/report-summarize/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { extractText } from 'pdf-parse'; // Hypothetical server-side PDF parsing (requires implementation)

interface ReportSummaryRequest {
  text?: string;
  file?: Buffer; // For PDF uploads
  language?: string;
}

interface ReportSummaryResponse {
  summary: string;
  detailed_analysis: string;
  key_findings: string[];
  recommendations: string[];
  next_steps: string[];
  disclaimer: string;
  type: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const text = formData.get('text')?.toString();
    const file = formData.get('file') as File | null;
    const language = formData.get('language')?.toString() || 'en';

    if (!text && !file) {
      return NextResponse.json(
        { error: 'Report text or file is required' },
        { status: 400 }
      );
    }

    let reportText = text || '';
    if (file) {
      // Convert File to Buffer for pdf-parse (server-side)
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const pdfData = await extractText(buffer); // Requires pdf-parse implementation
      reportText = pdfData.text || '';
      if (!reportText.trim()) {
        return NextResponse.json(
          { error: 'Failed to extract text from PDF' },
          { status: 400 }
        );
      }
    }

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app';
    const targetUrl = `${FASTAPI_URL}/api/health/report-summarize`;

    console.log('[Report Summary API] Fetching URL:', targetUrl);
    console.log('[Report Summary API] Request body:', { text: reportText, language });

    const backendResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hg-medicura-ai.vercel.app',
      },
      body: JSON.stringify({
        text: reportText.trim(),
        language,
      }),
    });

    console.log('[Report Summary API] Backend response status:', backendResponse.status);
    const backendData = await backendResponse.json();
    console.log('[Report Summary API] Backend response:', JSON.stringify(backendData, null, 2));

    if (!backendResponse.ok) {
      return NextResponse.json(
        {
          error: backendData.detail || 'Failed to summarize report',
          summary: '',
          detailed_analysis: 'Unable to summarize the report. Please try again or consult a healthcare provider.',
          key_findings: [],
          recommendations: [],
          next_steps: [],
          disclaimer: 'This information is educational only and not medical advice.',
          type: 'Unknown',
        },
        { status: backendResponse.status }
      );
    }

    const formattedData: ReportSummaryResponse = {
      summary: backendData.summary || 'No summary available.',
      detailed_analysis: backendData.detailed_analysis || backendData.summary || 'No detailed analysis available.',
      key_findings: Array.isArray(backendData.key_findings) ? backendData.key_findings : [],
      recommendations: Array.isArray(backendData.recommendations) ? backendData.recommendations : [],
      next_steps: Array.isArray(backendData.next_steps) ? backendData.next_steps : [],
      disclaimer: backendData.disclaimer || 'This information is educational only and not medical advice.',
      type: backendData.type || 'Unknown',
      error: backendData.error,
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('[Report Summary API] Error:', error);
    return NextResponse.json(
      {
        error: 'Failed to summarize report',
        summary: '',
        detailed_analysis: 'Unable to summarize the report. Please try again or consult a healthcare provider.',
        key_findings: [],
        recommendations: [],
        next_steps: [],
        disclaimer: 'This information is educational only and not medical advice.',
        type: 'Unknown',
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
