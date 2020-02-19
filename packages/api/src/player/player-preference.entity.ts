import { PlayerEntity } from './player.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class PlayerPreferenceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => PlayerEntity)
  @JoinColumn()
  player: PlayerEntity;

  @Column("simple-array")
  playerPref: String[];

  @Column("simple-array")
  playerAvoidancePref: String[];

  @Column()
  colorPref: String;
}
