import { TeamEntity } from './../team/team.entity';
import { LeagueEntity } from 'src/league/league.entity';
import { Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity()
export class TeamLeagueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => LeagueEntity)
  league: LeagueEntity;

  @ManyToMany(() => TeamEntity)
  team: TeamEntity
}
