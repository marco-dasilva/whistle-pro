import { LeaguePlayerEntity } from '../entity/league-player.entity';
import { LeagueEntity } from './league.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([LeagueEntity, LeaguePlayerEntity])
  ],
  providers: [],
  exports: []
})
export class LeagueModule { }
