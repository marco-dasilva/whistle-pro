import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'blob' })
  picture: string;

  @Column({ unique: true })
  @Unique('Duplicate unique name', ['uniqueName'])
  uniqueName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  phoneNumber: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column()
  nationality: string;

  @Column()
  skillRank: number;

  @Column({ default: false })
  isInjured: boolean;

  @Column({ default: false })
  isActive: boolean;
}
