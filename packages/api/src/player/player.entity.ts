import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@ObjectType()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ type: 'blob', nullable: true })
  @Field()
  picture: string;

  @Column({ unique: true })
  @Unique('Duplicate unique name', ['uniqueName'])
  @Field()
  uniqueName: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  password: string;

  @Column()
  @Field()
  phoneNumber: string;

  @Column({ type: 'date' })
  @Field()
  dateOfBirth: Date;

  @Column()
  @Field()
  nationality: string;

  @Column({ type: 'float' })
  @Field()
  skillRank: number;

  @Column({ default: false })
  @Field()
  isInjured: boolean;

  @Column({ default: false })
  @Field()
  isActive: boolean;
}
