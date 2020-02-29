import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class AuthEntity {
  @Field()
  token: string;
}
