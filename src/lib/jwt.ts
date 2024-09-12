import jwt from 'jsonwebtoken'
import { toast } from 'react-toastify'

export function signJwtToken(payload: any, options = {}) {
  const secret: any = process.env.JWT_SECRET
  const token = jwt.sign(payload, secret, options)
  return token
}

export function verifyJwtToken(token: string) {
  try {
    const secret = process.env.JWT_SCRET
    if (secret) {
      const payload = jwt.verify(token, secret)
      return payload
    }
  } catch (error) {
    toast.error('Sorry but not authorized. Login first')
    return null
  }
}
