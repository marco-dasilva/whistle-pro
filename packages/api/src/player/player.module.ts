import { PlayerEntity } from 'src/player/player.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerEntity])
  ],
  providers: [],
  exports: []
})
export class PlayerModule { }
