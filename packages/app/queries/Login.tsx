import { gql } from 'apollo-boost';

export const GET_TOKEN = gql`
  mutation Login($email: String!, $password: String!) {
    login(login:{ email: $email, password: $password}) {
      token
    }
  }
`;
