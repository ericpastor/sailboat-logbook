import mongoose from 'mongoose'

export interface TripDocument extends Document {
  tripId: string
  title: string
  vesselName: string
  departurePort: string
  arrivalPort: string
  departureTime: Date
  arrivalTime: Date
  eta: Date
  weatherConditions: string
  description: string
  issues: string[]
  crewMembers: mongoose.Types.ObjectId[]
  passengersCount: number
  cargoDetails?: string
  status: 'In Progress' | 'Completed'
  distance?: number
  vesselType?: string
  fuelConsumption?: number
  pictures: string[]
  slug: string
  createdAt: Date
  updatedAt?: Date
}
