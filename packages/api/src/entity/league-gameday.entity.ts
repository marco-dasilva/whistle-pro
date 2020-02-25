import { GamedayEntity } from './../gameday/gameday.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { LeagueEntity } from "src/league/league.entity";

@Entity()
export class LeagueGamedayEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LeagueEntity, league => league.id)
  league: LeagueEntity;

  @OneToMany(() => GamedayEntity, gameday => gameday.id)
  gameday: GamedayEntity;
}
