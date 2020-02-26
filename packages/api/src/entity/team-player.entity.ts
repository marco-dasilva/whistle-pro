import { PlayerEntity } from 'src/player/player.entity';
import { TeamEntity } from './../team/team.entity';
import { GamedayEntity } from './../gameday/gameday.entity';
import { Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany, Column } from "typeorm";

@Entity()
export class TeamPlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => GamedayEntity, gameday => gameday.id)
  gameday: GamedayEntity

  @ManyToMany(() => TeamEntity)
  team: TeamEntity;

  @ManyToMany(() => PlayerEntity)
  player: PlayerEntity;

  @Column()
  version: number;
}
