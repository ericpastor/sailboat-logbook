import { CrewMember, Trip } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    connectToDB()

    const crewMembers = await CrewMember.find()
    return NextResponse.json(crewMembers)
  } catch (error) {
    console.log(error)
    NextResponse.json(error)
  }
}
