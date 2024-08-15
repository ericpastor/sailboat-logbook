import jwt from 'jsonwebtoken'

export function signJwtToken(payload: any, options = {}) {
  const secret: any = process.env.JWT_SECRET
  const token = jwt.sign(payload, secret, options)
  return token
}
