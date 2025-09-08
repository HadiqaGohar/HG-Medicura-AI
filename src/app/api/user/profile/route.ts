import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import clientPromise from '../../../../../lib/mongodb'

export async function GET() {
  try {
    const session = await getServerSession(
      authOptions // Uncomment this line if you have authOptions defined
    )
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db('resume-craft')
    const users = db.collection('users')

    const user = await users.findOne({ email: session.user.email })
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      name: user.name,
      email: user.email,
      bio: user.bio || '',
      location: user.location || '',
      website: user.website || '',
      phone: user.phone || '',
      image: user.image || null
    })
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, bio, location, website, phone } = body

    const client = await clientPromise
    const db = client.db('resume-craft')
    const users = db.collection('users')

    const updateData = {
      name,
      bio,
      location,
      website,
      phone,
      updatedAt: new Date()
    }

    const result = await users.updateOne(
      { email: session.user.email },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Profile updated successfully' })
  } catch (error) {
    console.error('Error updating user profile:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}