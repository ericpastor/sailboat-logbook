import { z } from 'zod'

export const userRegisterSchema = z.object({
  name: z.string().min(2).max(30),
  surname: z.string().min(2).max(30),
  email: z.string().email().min(6).max(30),
  phone: z.string().min(2).max(30),
  password: z.string().min(2).max(30),
  avatar: z.string(),
  rank: z.enum(['Owner', 'Captain', 'Officer', 'Buson']),
})

export const userLoginSchema = z.object({
  email: z.string().email().min(6).max(30),
  password: z.string().min(2).max(30),
})

export const tripSchema = z.object({
  title: z.string().min(2).max(30),
  vesselName: z.string().min(2).max(30),
  departurePort: z.string().min(2).max(30),
  arrivalPort: z.string().min(2).max(30),
  departureTime: z.string().date(),
  arrivalTime: z.string().date(),
  eta: z.string().date(),
  weatherConditions: z.string().min(2).max(30),
  description: z.string().min(2).max(30),
  issues: z.string().array().max(6),
  crewMembers: z.string().array().min(3).max(6),
  passengersCount: z.number(),
  cargoDetails: z.string(),
  status: z.enum(['In Progress', 'Completed']),
  distance: z.number(),
  vesselType: z.string(),
  fuelConsumption: z.number(),
  pictures: z.string().array().min(3).max(6),
})
