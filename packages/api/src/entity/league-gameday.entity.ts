import { GamedayEntity } from './../gameday/gameday.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { LeagueEntity } from "src/league/league.entity";

@Entity()
export class LeagueGamedayEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LeagueEntity, league => league.id)
  league: LeagueEntity;

  @ManyToOne(() => GamedayEntity, gameday => gameday.id)
  gameday: GamedayEntity;
}
