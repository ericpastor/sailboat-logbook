export interface UserDocument extends Document {
  name: string
  surname: string
  email: string
  phone: string
  password: string
  avatar?: string
  rank: 'Owner' | 'Captain' | 'Officer' | 'Buson'
  createdAt: Date
  updatedAt?: Date
}
