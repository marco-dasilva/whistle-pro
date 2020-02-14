import { gql } from 'apollo-boost';

export const GetTeams = gql`
  query {
    teams {
      id
      name
    }
  }
`;
