import { RosterConfigEntity } from './../roster-config/roster-config-entity';
import { PlayerEntity } from 'src/player/player.entity';
import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class RosterEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  player: [PlayerEntity];

  @Column()
  @Field()
  admin: [PlayerEntity];

  @Column()
  @Field()
  config: RosterConfigEntity;
}
