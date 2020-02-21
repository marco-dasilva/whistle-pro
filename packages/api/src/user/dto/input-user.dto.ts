import { MaxLength } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class UserInput {
  @Field({ nullable: false })
  playerId: number;

  @Field(() => Int, { nullable: false })
  @MaxLength(30)
  password: string;
}
