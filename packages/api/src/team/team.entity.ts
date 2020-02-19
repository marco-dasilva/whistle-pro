import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TeamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;
}
