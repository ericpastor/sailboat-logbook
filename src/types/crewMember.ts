import { Document } from 'mongoose'

export interface CrewMemberDocument extends Document {
  crewMemberId: string
  name: string
  rank: string
  experienceYears: number
  avatar: string
}
