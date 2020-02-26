import { TeamEntity } from './../team/team.entity';
import { GamedayTeamEntity } from './../entity/gameday-team.entity';
import { Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany, Column } from "typeorm";

@Entity()
export class MatchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => GamedayTeamEntity)
  gamedayTeam: GamedayTeamEntity;

  @OneToMany(() => TeamEntity, team => team.id)
  teamHomeId: TeamEntity;

  @OneToMany(() => TeamEntity, team => team.id)
  teamAwayId: TeamEntity;

  @Column()
  teamHomeScore: number;

  @Column()
  teamAwayScore: number;
}
