import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// @ts-ignore
import { UserProvider } from "@auth0/nextjs-auth0/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
}
