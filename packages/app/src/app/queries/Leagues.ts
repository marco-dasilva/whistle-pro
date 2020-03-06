import gql from 'graphql-tag';

export const PLAYER_LEAGUE = gql`
  query{
    league {
      league {
        id
        name
        picture
      }
      isMonthly
      role
    }
  }
`;
