import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.session_id) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL || 'https://hg-medicura-ai-backend-production.up.railway.app';
    const backendUrl = FASTAPI_URL.replace(/\/$/, '');
    console.log('Clearing session at:', `${backendUrl}/api/chatbot/session/clear`, 'Body:', body);

    const response = await fetch(`${backendUrl}/api/chatbot/session/clear`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.detail || 'Failed to clear session' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Session clear error:', error);
    return NextResponse.json(
      { error: `Failed to clear session: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}
