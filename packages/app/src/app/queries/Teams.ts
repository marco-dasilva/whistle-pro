import gql from 'graphql-tag';

export const GET_TEAMS = gql`
  query {
    teams {
      id
      name
    }
  }
`;
