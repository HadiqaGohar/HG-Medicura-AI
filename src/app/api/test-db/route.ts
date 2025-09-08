import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()
    
    // Test the connection
    await client.db().admin().ping()
    console.log('MongoDB connection successful!')
    
    await client.close()
    
    return NextResponse.json({ 
      success: true, 
      message: 'MongoDB connection successful!',
      uri: process.env.MONGODB_URI?.replace(/\/\/.*:.*@/, '//***:***@') // Hide credentials
    })
  } catch (error) {
    console.error('MongoDB connection failed:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'MongoDB connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}