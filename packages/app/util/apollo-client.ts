import ApolloClient from 'apollo-boost';
import isomorphicFetch from 'isomorphic-fetch';

export default new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  fetch: (input: RequestInfo, init?: RequestInit): Promise<Response> => isomorphicFetch(input, init).then(res => res)
});
