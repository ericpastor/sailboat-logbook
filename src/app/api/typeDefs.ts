import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    hello: String
    crewMembers: [CrewMembers]
  }

  type CrewMembers {
    crewMemberId: String!
    name: String!
    rank: String!
    experienceYears: Int!
    avatar: String!
  }
`
export default typeDefs
