import { LeaguePlayerEntity } from './../entity/league-player.entity';
import { Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guard/gql.guard';
import { PlayerDecorator } from 'src/player/player.decorator';
import { LeagueService } from './league.service';

@Resolver('League')
export class LeagueResolver {
  constructor(
    private leagueService: LeagueService
  ) { }

  @Query(() => [LeaguePlayerEntity])
  @UseGuards(GqlAuthGuard)
  async league(@PlayerDecorator() player: any): Promise<LeaguePlayerEntity[]> {
    console.log(player.user.userId)
    return this.leagueService.leaguePlayer(player.user.userId);
  }

  @Query(() => LeaguePlayerEntity)
  @UseGuards(GqlAuthGuard)
  async leagueById(@PlayerDecorator() player: any): Promise<LeaguePlayerEntity> {
    return this.leagueService.league(player.user.userId);
  }
}
