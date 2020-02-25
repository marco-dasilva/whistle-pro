import { GamedayTeamEntity } from './../entity/gameday-team.entity';
import { Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity()
export class MatchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => GamedayTeamEntity)
  gamedayTeam: GamedayTeamEntity;
}
