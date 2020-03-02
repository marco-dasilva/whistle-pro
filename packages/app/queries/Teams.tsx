import { gql } from 'apollo-boost';

export const GET_TEAMS = gql`
  query {
    teams {
      id
      name
    }
  }
`;
