import { PlayerEntity } from './player.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class PlayerPreferenceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PlayerEntity)
  @JoinColumn()
  player: PlayerEntity;

  @Column()
  playerPref: string[];

  @Column()
  playerAvoidancePref: string[];

  @Column()
  colorPref: string;
}
