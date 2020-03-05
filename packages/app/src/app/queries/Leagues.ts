import gql from 'graphql-tag';

export const PLAYER_LEAGUE = gql`
  query{
    league {
      league {
        name
        picture
      }
      isMonthly
      role
    }
  }
`;
