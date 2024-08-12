import { Trip } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    connectToDB()

    const trips = await Trip.find()
    return NextResponse.json(trips)
  } catch (error) {
    console.log(error)
    NextResponse.json(error)
  }
}
