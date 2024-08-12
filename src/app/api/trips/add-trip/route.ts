import { Trip } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { TripDocument } from '@/types/trip'
import { NextResponse } from 'next/server'

export default async function POST(req: Request) {
  try {
    await connectToDB()

    const extractTripData = await req.json()

    const tripData: TripDocument = extractTripData

    const newTrip = await Trip.create(tripData)
    if (newTrip) {
      return NextResponse.json({
        success: true,
        message: 'Added new trip!',
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Something went wrong! Try again later!',
      })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong! Try again later!',
    })
  }
}
