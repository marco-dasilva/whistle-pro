import { TeamLeagueEntity } from './../entity/team-league.entity';
import { TeamPlayerEntity } from './../entity/team-player.entity';
import { TeamEntity } from './team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity, TeamPlayerEntity, TeamLeagueEntity])
  ],
  providers: [
    TeamService,
    TeamResolver
  ]
})
export class TeamModule { }
