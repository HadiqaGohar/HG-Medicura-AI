// // src/app/api/drug-interaction/route.ts
// import { NextRequest, NextResponse } from 'next/server';

// export const runtime = 'nodejs';

// interface DrugInteractionRequest {
//   medications: string[];
//   age?: number;
//   gender?: string;
//   existing_conditions?: string[];
//   other_medications?: string[];
// }

// interface Interaction {
//   medications: string[];
//   severity: 'high' | 'medium' | 'low' | 'none';
//   description: string;
//   recommendation?: string;
// }

// interface DrugInteractionResponse {
//   interactions: Interaction[];
//   recommendations: string[];
//   alternative_options: string[];
//   general_advice: string[];
//   disclaimer: string;
//   summary?: string;
//   error?: string;
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body: DrugInteractionRequest = await request.json();
//     const { medications, age, gender, existing_conditions = [], other_medications = [] } = body;

//     if (!medications || !Array.isArray(medications) || medications.length === 0) {
//       return NextResponse.json(
//         { error: 'At least one medication is required' },
//         { status: 400 }
//       );
//     }

//     const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app';
//     const targetUrl = `${FASTAPI_URL}/api/health/drug-interactions`;

//     console.log('[Drug Interaction API] Fetching URL:', targetUrl);
//     console.log('[Drug Interaction API] Request body:', body);

//     const backendResponse = await fetch(targetUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Origin': 'https://hg-medicura-ai.vercel.app',
//       },
//       body: JSON.stringify({
//         medications,
//         age,
//         gender,
//         existing_conditions,
//         other_medications,
//       }),
//     });

//     console.log('[Drug Interaction API] Backend response status:', backendResponse.status);
//     const backendData = await backendResponse.json();
//     console.log('[Drug Interaction API] Backend response:', JSON.stringify(backendData, null, 2));

//     if (!backendResponse.ok) {
//       return NextResponse.json(
//         {
//           error: backendData.detail || 'Failed to check drug interactions',
//           interactions: [],
//           recommendations: ['Consult a healthcare professional for accurate interaction information.'],
//           alternative_options: [],
//           general_advice: [
//             'Always inform your doctor about all medications you take.',
//             'Read medication guides carefully.',
//           ],
//           disclaimer: 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.',
//           summary: '',
//         },
//         { status: backendResponse.status }
//       );
//     }

//     // Map backend severity to frontend severity
//     const severityMap: { [key: string]: 'high' | 'medium' | 'low' | 'none' } = {
//       Severe: 'high',
//       Moderate: 'medium',
//       Mild: 'low',
//       None: 'none',
//       Unknown: 'none',
//     };

//     // Transform backend response
//     const formattedData: DrugInteractionResponse = {
//       interactions: [
//         {
//           medications: backendData.medications || medications,
//           severity: severityMap[backendData.severity] || 'none',
//           description: backendData.detailed_analysis || 'No significant interactions found.',
//           recommendation: backendData.recommendations?.[0] || 'Consult a healthcare provider.',
//         },
//       ],
//       recommendations: Array.isArray(backendData.recommendations)
//         ? backendData.recommendations
//         : ['Consult a healthcare provider for personalized advice.'],
//       alternative_options: Array.isArray(backendData.alternative_options)
//         ? backendData.alternative_options
//         : [],
//       general_advice: [
//         'Always inform your doctor about all medications you take.',
//         'Keep a current medication list with you.',
//         'Read medication guides carefully.',
//       ],
//       disclaimer: backendData.disclaimer || 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.',
//       summary: backendData.summary || '',
//       error: backendData.error,
//     };

//     return NextResponse.json(formattedData);
//   } catch (error) {
//     console.error('[Drug Interaction API] Error:', error);
//     return NextResponse.json(
//       {
//         interactions: [],
//         recommendations: ['Consult a healthcare professional for accurate interaction information.'],
//         alternative_options: [],
//         general_advice: [
//           'Always inform your doctor about all medications you take.',
//           'Read medication guides carefully.',
//         ],
//         disclaimer: 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.',
//         summary: '',
//         error: 'Failed to check drug interactions. Please try again later.',
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json(
//     { message: 'Drug Interaction API is working' },
//     { status: 200 }
//   );
// }




// src/app/api/drug-interaction/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface DrugInteractionRequest {
  medications: string[];
  age?: number;
  gender?: string;
  existing_conditions?: string[];
  other_medications?: string[];
}

interface Interaction {
  medications: string[];
  severity: 'high' | 'medium' | 'low' | 'none';
  description: string;
  recommendation?: string;
}

interface DrugInteractionResponse {
  interactions: Interaction[];
  recommendations: string[];
  alternative_options: string[];
  general_advice: string[];
  disclaimer: string;
  summary: string;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DrugInteractionRequest = await request.json();
    const { medications, age, gender, existing_conditions = [], other_medications = [] } = body;

    if (!medications || !Array.isArray(medications) || medications.length === 0) {
      return NextResponse.json(
        { error: 'At least one medication is required' },
        { status: 400 }
      );
    }

    // Normalize medication names (e.g., fix typos like "Vitamn b")
    const normalizedMedications = medications.map(med => 
      med.toLowerCase().trim().replace('vitamn', 'vitamin')
    );

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app';
    const targetUrl = `${FASTAPI_URL}/api/health/drug-interactions`;

    console.log('[Drug Interaction API] Fetching URL:', targetUrl);
    console.log('[Drug Interaction API] Request body:', { ...body, medications: normalizedMedications });

    const backendResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://hg-medicura-ai.vercel.app',
      },
      body: JSON.stringify({
        medications: normalizedMedications,
        age,
        gender,
        existing_conditions,
        other_medications,
      }),
    });

    console.log('[Drug Interaction API] Backend response status:', backendResponse.status);
    const backendData = await backendResponse.json();
    console.log('[Drug Interaction API] Backend response:', JSON.stringify(backendData, null, 2));

    if (!backendResponse.ok) {
      return NextResponse.json(
        {
          error: backendData.detail || 'Failed to check drug interactions',
          interactions: [],
          recommendations: ['Consult a healthcare professional for accurate interaction information.'],
          alternative_options: [],
          general_advice: [
            'Always inform your doctor about all medications you take.',
            'Read medication guides carefully.',
          ],
          disclaimer: 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.',
          summary: '',
        },
        { status: backendResponse.status }
      );
    }

    // Map backend severity to frontend severity
    const severityMap: { [key: string]: 'high' | 'medium' | 'low' | 'none' } = {
      Severe: 'high',
      Moderate: 'medium',
      Mild: 'low',
      None: 'none',
      Unknown: 'none',
    };

    // Transform backend response
    const formattedData: DrugInteractionResponse = {
      interactions: [
        {
          medications: backendData.medications || normalizedMedications,
          severity: severityMap[backendData.severity] || 'none',
          description: backendData.detailed_analysis || backendData.summary || 'No significant interactions found.',
          recommendation: Array.isArray(backendData.recommendations) && backendData.recommendations.length > 0
            ? backendData.recommendations[0]
            : 'Consult a healthcare provider.',
        },
      ],
      recommendations: Array.isArray(backendData.recommendations)
        ? backendData.recommendations
        : ['Consult a healthcare provider for personalized advice.'],
      alternative_options: Array.isArray(backendData.alternative_options)
        ? backendData.alternative_options
        : [],
      general_advice: Array.isArray(backendData.recommendations)
        ? backendData.recommendations.slice(1) // Use additional recommendations as general advice
        : [
            'Always inform your doctor about all medications you take.',
            'Keep a current medication list with you.',
            'Read medication guides carefully.',
          ],
      disclaimer: backendData.disclaimer || 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.',
      summary: backendData.summary || 'No summary available.',
      error: backendData.error,
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('[Drug Interaction API] Error:', error);
    return NextResponse.json(
      {
        interactions: [],
        recommendations: ['Consult a healthcare professional for accurate interaction information.'],
        alternative_options: [],
        general_advice: [
          'Always inform your doctor about all medications you take.',
          'Read medication guides carefully.',
        ],
        disclaimer: 'This information is for educational purposes only. Always consult healthcare professionals for medication advice.',
        summary: '',
        error: 'Failed to check drug interactions. Please try again later.',
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
