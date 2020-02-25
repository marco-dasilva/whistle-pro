import { PlayerEntity } from '../player/player.entity';
import { LeagueEntity } from '../league/league.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";

@Entity()
export class LeaguePlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LeagueEntity, league => league.id)
  league: LeagueEntity;

  @OneToMany(() => PlayerEntity, player => player.id)
  player: PlayerEntity;

  @Column({ type: 'boolean', default: false })
  isMonthly: boolean;

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
