import { TeamInput } from './dto/input-team.dto';
import { TeamEntity } from './team.entity';
import { TeamService } from './team.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamType } from './dto/create-team.dto';
import { GqlAuthGuard } from 'src/auth/gql.guard';
import { UseGuards } from '@nestjs/common';

@Resolver('Team')
export class TeamResolver {
  constructor(private readonly teamService: TeamService) { }

  @UseGuards(GqlAuthGuard)
  @Query(() => [TeamType])
  async teams(): Promise<TeamEntity[]> {
    return this.teamService.findAll();
  }

  @Mutation(() => TeamType)
  async createTeam(@Args('input') input: TeamInput): Promise<TeamEntity> {
    const created = await this.teamService.create({ ...input });
    return created;
  }
}
