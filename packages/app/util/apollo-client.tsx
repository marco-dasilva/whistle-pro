import ApolloClient, { InMemoryCache } from 'apollo-boost';
import isomorphicFetch from 'isomorphic-fetch';

export default new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache({
    addTypename: false
  }),
  fetch: (input: RequestInfo, init?: RequestInit): Promise<Response> => isomorphicFetch(input, init).then(res => res)
});
