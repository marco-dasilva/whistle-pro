import { TeamInput } from './../../api/src/team/dto/input-team.dto';
import { gql, DocumentNode } from 'apollo-boost';

export const CreateTeam = gql`
  mutation {
    CreateTeam(input:{name: $name) {
      name
      id
    }
  }
`;
