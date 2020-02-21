import { ObjectType, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export class LeagueEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;
}
