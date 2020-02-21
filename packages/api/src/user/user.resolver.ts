import { TeamEntity } from './../team/team.entity';
import { UserInput } from './dto/input-user.dto';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { GqlAuthGuard } from 'src/auth/guard/gql.guard';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => TeamEntity)
  async createUser(@Args('input') input: UserInput): Promise<UserInput> {
    return input;
  }
}
