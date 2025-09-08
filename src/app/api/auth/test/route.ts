import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
// import { authOptions } from '../[...nextauth]/route'

export async function GET() {
  try {
    const session = await getServerSession(
      // authOptions // Uncomment this line if you have authOptions defined
    )
    
    return NextResponse.json({
      session: session,
      hasSession: !!session,
      user: session?.user || null,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Auth test error:', error)
    return NextResponse.json({ 
      error: 'Auth test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}