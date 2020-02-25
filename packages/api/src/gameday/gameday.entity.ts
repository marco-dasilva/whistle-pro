import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class GamedayEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  date: Date

  @Column({ type: 'enum', enum: ['round-robin'] })
  type: string;
}
