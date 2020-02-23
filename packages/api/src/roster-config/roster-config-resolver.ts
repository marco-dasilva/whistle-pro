import { RosterConfigService } from './roster-config-service';
import { RosterConfigInput } from './dto/input-roster-config.dto';
import { RosterConfigEntity } from './roster-config-entity';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { GqlAuthGuard } from 'src/auth/guard/gql.guard';

@Resolver('RosterConfig')
export class RosterConfigResolver {
  constructor(private readonly rosterConfigService: RosterConfigService) { }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RosterConfigEntity)
  async createUser(@Args('input') input: RosterConfigInput): Promise<RosterConfigInput> {
    return input;
  }
}
