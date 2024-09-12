import { verifyJwtToken } from '@/lib/jwt'
import { Trip } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { NextResponse } from 'next/server'

export default async function CretaeTrip(req: any) {
  connectToDB()
  const accessToken = req.headers.get('authorization')
  const token = accessToken.split(' ')[1]

  const decodedToken = verifyJwtToken(token)

  if (!accessToken || !decodedToken) {
    return new Response(JSON.stringify({ error: 'Unautorized' }), {
      status: 403,
    })
  }

  try {
    const body = await req.json()
    const newTrip = await Trip.create(body)

    return NextResponse.json(newTrip, { status: 201 })
  } catch (error) {
    return NextResponse.json(error)
  }
}
