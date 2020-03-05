import gql from 'graphql-tag';

export const PLAYER = gql`
  query {
    player {
      id
      picture
      uniqueName
      firstName
      lastName
      email
      phoneNumber
      dateOfBirth
      nationality
      skillRank
      isInjured
      isActive
    }
  }
`;
