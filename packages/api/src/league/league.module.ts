import { LeagueService } from './league.service';
import { LeagueResolver } from './league.resolver';
import { LeaguePlayerEntity } from '../entity/league-player.entity';
import { LeagueEntity } from './league.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([LeagueEntity, LeaguePlayerEntity])
  ],
  providers: [LeagueResolver, LeagueService],
  exports: []
})
export class LeagueModule { }
