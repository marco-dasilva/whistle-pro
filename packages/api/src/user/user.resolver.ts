import { UserInput } from './dto/input-user.dto';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { GqlAuthGuard } from 'src/auth/guard/gql.guard';
import { TeamType } from 'src/team/dto/team.dto';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => TeamType)
  async createUser(@Args('input') input: UserInput): Promise<UserInput> {
    return input;
  }
}
