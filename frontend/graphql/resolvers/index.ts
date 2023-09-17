import { ContextValue } from "pages/api/graphql";

const resolvers = {
  Query: {
    teas: async (
      _: any,
      __: any,
      { dataSources }: { dataSources: ContextValue["dataSources"] }
    ) => {
      await dataSources.teaAPI.getTeas().then((t) => console.log(t));
      return dataSources.teaAPI.getTeas();
    },
    tea: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: ContextValue["dataSources"] }
    ) => {
      return dataSources.teaAPI.getTea(id);
    },
  },
  Mutation: {
    addTea: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: ContextValue["dataSources"] }
    ) => {
      return dataSources.teaAPI.addTea(id);
    },
  },
};

export default resolvers;
