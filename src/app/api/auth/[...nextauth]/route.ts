import { signJwtToken } from '@/lib/jwt'
import { User } from '@/lib/models'
import { connectToDB } from '@/lib/utils'
import { Credentials } from '@/types/credentials'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        await connectToDB()

        const { email, password } = credentials as Credentials

        try {
          const user = await User.findOne({ email })
          if (!user) {
            throw new Error('Credentials not valid')
          }

          if (!password) {
            throw new Error('provide a password')
          }

          const passwordMatched = await bcrypt.compare(password, user.password)

          if (!passwordMatched) {
            throw new Error('Wrong credentials!')
          } else {
            const { password, ...currentUser } = user
            const accessToken = signJwtToken(currentUser, { expiresIn: '1d' })

            return {
              ...currentUser,
              accessToken,
            }
          }
        } catch (error) {
          console.log(error)
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.accesToken = user.accesToken
        token._id = user._id
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user._id = token._id.user.accesstoken = token.accessToken
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
