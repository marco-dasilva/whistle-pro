import { GamedayEntity } from './gameday.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LeagueGamedayEntity } from 'src/entity/league-gameday.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GamedayEntity, LeagueGamedayEntity])
  ],
  providers: [],
  exports: []
})
export class GamedayModule { }
