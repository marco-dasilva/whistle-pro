import { PlayerEntity } from '../player/player.entity';
import { LeagueEntity } from '../league/league.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class LeaguePlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LeagueEntity, league => league.id)
  league: LeagueEntity;

  @ManyToOne(() => PlayerEntity, player => player.id)
  player: PlayerEntity;

  @Column({ type: 'boolean', default: false })
  isMonthly: boolean;

  @Column({ type: 'enum', enum: ['member', 'manager', 'admin'], default: 'member' })
  role: string;
}
