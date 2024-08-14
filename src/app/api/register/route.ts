import { User } from '@/lib/models'
import crypto from 'node:crypto'
import { connectToDB } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'
import { STATUS_CODES } from 'node:http'

export async function POST(req: NextRequest) {
  try {
    await connectToDB()
    const { name, surname, email, phone, password, avatar, rank } =
      await req.json()

    const isExisting = await User.findOne({ email })

    if (isExisting) {
      return NextResponse.json({
        ErrorMessage: 'Email already in the database',
        status: 409,
      })
    }

    const hashedPassword = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex')

    const newUser = await User.create({
      name,
      surname,
      email,
      phone,
      password: hashedPassword,
      avatar,
      rank,
    })

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'POST error in register' })
  }
}
