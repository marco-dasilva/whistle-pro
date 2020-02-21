import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, Column } from "typeorm";
import { PlayerEntity } from "src/player/player.entity";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PlayerEntity)
  @JoinColumn()
  player: PlayerEntity;

  @Column({ select: false })
  password: string;
}
