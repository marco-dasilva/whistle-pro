import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LeagueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ['pickup', 'organized'] })
  type: string;
}
