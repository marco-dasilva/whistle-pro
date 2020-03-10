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

export const CREATE_PLAYER = gql`
  mutation (
    $uniqueName:  String!
    $picture: String!
    $firstName: String!
    $lastName:  String!
    $email: String!
    $phoneNumber: String!
    $password:  String!) {
    createPlayer (
      input: {
        uniqueName: $uniqueName
        picture: $picture
        firstName: $firstName
        lastName: $lastName
        email: $email
        phoneNumber: $phoneNumber
        password: $password
        }) {
          uniqueName
        } 
    }
  `;
