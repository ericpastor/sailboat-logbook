import { CrewMemberDocument } from '@/types/crewMember'
import { TripDocument } from '@/types/trip'
import { UserDocument } from '@/types/user'
import mongoose, { model, Schema } from 'mongoose'

const userSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true, min: 2, max: 20 },
    surname: { type: String, required: true, min: 2, max: 20 },
    email: { type: String, required: true, min: 6, max: 50 },
    avatar: { type: String },
    isCaptain: { type: Boolean, default: false },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
)

const crewMemberSchema: Schema = new Schema({
  name: { type: String, required: true },
  rank: { type: String, required: true },
  experienceYears: { type: Number, required: true },
  avatar: { type: String, required: true },
})

const tripSchema: Schema = new Schema(
  {
    tripId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    vesselName: { type: String, required: true },
    departurePort: { type: String, required: true },
    arrivalPort: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    eta: { type: Date, required: true },
    weatherConditions: { type: String, required: true },
    description: { type: String, required: true },
    issues: { type: [String], default: [] },
    crewMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CrewMember',
        required: true,
      },
    ],
    passengersCount: { type: Number, required: true },
    cargoDetails: { type: String },
    status: {
      type: String,
      enum: ['In Progress', 'Completed'],
      required: true,
    },
    distance: { type: Number },
    vesselType: { type: String },
    fuelConsumption: { type: Number },
    pictures: { type: [String], default: [] },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
)

const User = mongoose.models.User || model<UserDocument>('User', userSchema)

const CrewMember =
  mongoose.models.CrewMember ||
  model<CrewMemberDocument>('CrewMember', crewMemberSchema)

const Trip = mongoose.models.Trip || model<TripDocument>('Trip', tripSchema)

export { User, CrewMember, Trip }
