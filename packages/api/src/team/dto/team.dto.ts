import { ObjectType, Field } from 'type-graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class TeamType {
  @Field()
  @IsNotEmpty()
  readonly id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
