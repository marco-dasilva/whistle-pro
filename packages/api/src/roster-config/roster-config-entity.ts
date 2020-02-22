import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class RosterConfigEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  numberOfTeams: number;

  @Column()
  @Field()
  numberOfTeamAlternatives: number;

  @Column()
  @Field()
  teamColors: [string];
}
