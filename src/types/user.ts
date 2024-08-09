export interface UserDocument extends Document {
  userId: string
  title: string
  name: string
  surname: string
  email: string
  avatar: string
  isCaptain: boolean
  slug: string
  createdAt: Date
  updatedAt?: Date
}
