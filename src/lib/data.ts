import { CrewMember, Trip, User } from './models'
import { connectToDB } from './utils'

export const getAllUsers = async () => {
  try {
    connectToDB()
    const users = await User.find()
    return users
  } catch (error) {
    console.log(error)
    throw new Error('Fail to fetch users :(')
  }
}

export const getUser = async (id: string) => {
  try {
    connectToDB()
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.log(error)
    throw new Error('Fail to fetch this user :(')
  }
}

export const getAllCrewMembers = async () => {
  try {
    connectToDB()
    const crewMembers = await CrewMember.find()
    return crewMembers
  } catch (error) {
    console.log(error)
    throw new Error('Fail to fetch crew members :(')
  }
}

export const getAllTrips = async () => {
  try {
    connectToDB()
    const trips = await Trip.find()
    return trips
  } catch (error) {
    console.log(error)
    throw new Error('Fail to fetch Trips :(')
  }
}

export const getTrip = async (slug: string) => {
  try {
    connectToDB()
    const trip = await Trip.findOne({ slug }).populate('crewMembers').exec()
    return trip
  } catch (error) {
    console.log(error)
    throw new Error('Fail to fetch this trip :(')
  }
}
