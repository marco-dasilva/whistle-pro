import { GamedayTeamEntity } from './../entity/gameday-team.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class MatchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => GamedayTeamEntity)
  gamedayTeam: GamedayTeamEntity;

  @Column()
  teamHomeScore: number;

  @Column()
  teamAwayScore: number;
}
