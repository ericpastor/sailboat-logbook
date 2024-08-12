import { Trip } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }: Params) => {
  const { slug } = params

  try {
    connectToDB()

    const trip = await Trip.findOne({ slug }).populate('crewMembers').exec()
    return NextResponse.json(trip)
  } catch (error) {
    console.log(error)
    NextResponse.json(error)
  }
}
