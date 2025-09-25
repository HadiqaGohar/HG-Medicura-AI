import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// PATCH handler for updating a reminder
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { id: reminderId } = await params; // Resolve params Promise

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL;
    if (!FASTAPI_URL) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(`${FASTAPI_URL}/api/medicine/reminder/${reminderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: session.user.email,
        ...body
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.detail || 'Failed to update reminder' },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Update reminder API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE handler for deleting a reminder
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id: reminderId } = await params; // Resolve params Promise

    const FASTAPI_URL = process.env.NEXT_PUBLIC_FASTAPI_URL;
    if (!FASTAPI_URL) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(`${FASTAPI_URL}/api/medicine/reminder/${reminderId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: session.user.email
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.detail || 'Failed to delete reminder' },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Delete reminder API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
