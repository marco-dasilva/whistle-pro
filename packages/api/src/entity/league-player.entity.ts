import { ObjectType, Field } from 'type-graphql';
import { PlayerEntity } from '../player/player.entity';
import { LeagueEntity } from '../league/league.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
@ObjectType()
export class LeaguePlayerEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @ManyToOne(() => LeagueEntity, league => league.id)
  @Field()
  league: LeagueEntity;

  @ManyToOne(() => PlayerEntity, player => player.id)
  @Field()
  player: PlayerEntity;

  @Column({ type: 'boolean', default: false })
  @Field()
  isMonthly: boolean;

  @Column({ type: 'enum', enum: ['member', 'manager', 'admin'], default: 'member' })
  @Field()
  role: string;
}
