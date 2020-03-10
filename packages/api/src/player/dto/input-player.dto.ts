import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class PlayerInput {
  @Field()
  @MaxLength(30)
  uniqueName: string;

  @Field()
  picture: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  password: string;

}
