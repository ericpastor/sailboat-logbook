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
