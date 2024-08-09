import mongoose from 'mongoose'

const connection: { isConnected?: number } = {}

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log('using existing connection')
      return
    }

    const db = await mongoose.connect(process.env.MONGO_URI!)

    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    throw new Error('Error connecting DB')
  }
}
