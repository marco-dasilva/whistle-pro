import { TeamEntity } from './../team/team.entity';
import { GamedayEntity } from './../gameday/gameday.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, Column } from "typeorm";

@Entity()
export class GamedayTeamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => GamedayEntity)
  gameday: GamedayEntity;

  @OneToOne(() => TeamEntity)
  team: TeamEntity;

  @Column({ type: 'datetime' })
  dateTime: Date;
}
