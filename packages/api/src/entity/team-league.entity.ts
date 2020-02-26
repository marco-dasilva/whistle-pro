import { TeamEntity } from './../team/team.entity';
import { LeagueEntity } from 'src/league/league.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class TeamLeagueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => LeagueEntity)
  league: LeagueEntity;

  @ManyToOne(() => TeamEntity)
  team: TeamEntity;
}
