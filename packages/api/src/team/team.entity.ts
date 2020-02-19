import { Field, ID } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TeamEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
