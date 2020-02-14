import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class TeamInput {
  @Field()
  @MaxLength(30)
  name: string;
}
