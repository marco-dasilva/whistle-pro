import { LeagueEntity } from './league.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([LeagueEntity])
  ],
  providers: [],
  exports: []
})
export class LeagueModule { }
