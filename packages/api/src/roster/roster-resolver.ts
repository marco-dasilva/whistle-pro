import { RosterInput } from './dto/input-roster.dto';
import { RosterEntity } from './roster-entity';
import { RosterService } from './roster-service';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { GqlAuthGuard } from 'src/auth/guard/gql.guard';

@Resolver('Roster')
export class RosterResolver {
  constructor(private readonly rosterService: RosterService) { }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => RosterEntity)
  async createRoster(@Args('input') input: RosterInput): Promise<RosterInput> {
    return input;
  }
}
