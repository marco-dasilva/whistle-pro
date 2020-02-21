import { TeamInput } from './dto/input-team.dto';
import { TeamEntity } from './team.entity';
import { TeamService } from './team.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('Team')
export class TeamResolver {
  constructor(private readonly teamService: TeamService) { }

  @Query(() => [TeamEntity])
  async teams(): Promise<TeamEntity[]> {
    return this.teamService.findAll();
  }

  @Mutation(() => TeamEntity)
  async createTeam(@Args('input') input: TeamInput): Promise<TeamEntity> {
    const created = await this.teamService.create({ ...input });
    return created;
  }
}
