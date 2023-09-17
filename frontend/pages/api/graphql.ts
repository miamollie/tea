import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { typeDefs } from "../../graphql/schemas";
import resolvers from "../..//graphql/resolvers";
import { TeaAPI } from "../../graphql/datasources/teaApi";
import { NextApiRequest } from "next";

export interface ContextValue {
  dataSources: {
    teaAPI: TeaAPI;
  };
}

const apolloServer = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
  // @ts-ignore
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const handler = startServerAndCreateNextHandler<NextApiRequest, ContextValue>(
  apolloServer,
  {
    context: async () => {
      const { cache } = apolloServer;
      return {
        // We create new instances of our data sources with each request,
        // passing in our server's cache.
        dataSources: { teaAPI: new TeaAPI({ cache }) },
      };
    },
  }
);

export default handler;
