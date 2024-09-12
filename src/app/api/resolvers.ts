import { CrewMember, User } from '@/lib/models';
import { IResolvers } from '@graphql-tools/utils';


const resolvers: IResolvers = {
  Query: {
    hello: (): string => 'Hello world!',
    crewMembers: async () => await CrewMember.find(),
  },
};

export default resolvers;
