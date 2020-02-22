import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Unique('Duplicate unique name', ['uniqueName'])
  uniqueName: string;

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

  @Column({ default: false })
  isActive: boolean;
}
