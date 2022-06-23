import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r7czdg0oj601yy5nx2f83k/master',
  cache: new InMemoryCache()
});