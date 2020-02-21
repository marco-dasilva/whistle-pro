import { PlayerEntity } from './../player/player.entity';
import { PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class WaitList {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => PlayerEntity, (player: PlayerEntity) => player.id)
  player: PlayerEntity;
}
