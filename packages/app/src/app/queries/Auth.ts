import gql from 'graphql-tag';

export const AUTH_INIT = gql`
  query {
    init {
      token
    }
  }
`;
