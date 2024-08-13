import { CrewMember } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { NextResponse } from 'next/server'

export const GET = async (request: Request, { params }: Params) => {
  const { id } = params

  try {
    connectToDB()

    const crewMember = await CrewMember.findById(id)
    return NextResponse.json(crewMember)
  } catch (error) {
    console.log(error)
    NextResponse.json(error)
  }
}
