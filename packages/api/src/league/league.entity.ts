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

  @Column({ type: 'enum', enum: ['pickup', 'organized'] })
  @Field()
  type: string;

  @Column({ type: 'blob', nullable: true })
  @Field({ nullable: true })
  picture: string;
}
