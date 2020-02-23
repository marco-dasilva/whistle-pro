import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class RosterConfigInput {
  @Field()
  @MaxLength(30)
  name: string;
}
