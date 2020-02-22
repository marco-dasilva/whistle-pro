import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class RosterInput {
  @Field()
  @MaxLength(30)
  name: string;
}
