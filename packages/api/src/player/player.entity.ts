import { Entity, ObjectID, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: String;

  @Column()
  lastName: String;

  @Column()
  email: String;

  @Column()
  phoneNumber: String;

  @Column()
  nationality: String;

  @Column({ default: false })
  isMonthly: Boolean;

  @Column()
  skillRank: Number;

  @Column()
  position: String;

  @Column()
  dob: Date;

  @Column({ default: false })
  isInjured: Boolean;
}
