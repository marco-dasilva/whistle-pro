import { TeamEntity } from './../team/team.entity';
import { GamedayEntity } from './../gameday/gameday.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity()
export class GamedayTeamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => GamedayEntity)
  gameday: GamedayEntity;

  @ManyToOne(() => TeamEntity)
  teamHome: TeamEntity;

  @ManyToOne(() => TeamEntity)
  teamAway: TeamEntity;

  @Column({ type: 'datetime' })
  dateTime: Date;
}
