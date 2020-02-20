import { Entity, ObjectID, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  nationality: string;

  @Column({ default: false })
  isMonthly: boolean;

  @Column()
  skillRank: number;

  @Column()
  position: string;

  @Column()
  dob: Date;

  @Column({ default: false })
  isInjured: boolean;
}
