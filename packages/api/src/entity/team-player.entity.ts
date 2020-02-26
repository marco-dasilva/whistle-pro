import { PlayerEntity } from 'src/player/player.entity';
import { TeamEntity } from './../team/team.entity';
import { GamedayEntity } from './../gameday/gameday.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class TeamPlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => GamedayEntity, gameday => gameday.id)
  gameday: GamedayEntity

  @ManyToOne(() => TeamEntity)
  team: TeamEntity;

  @ManyToOne(() => PlayerEntity)
  player: PlayerEntity;

  @Column()
  version: number;
}
