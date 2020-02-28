import { PlayerService } from './player.service';
import { PlayerResolver } from './player.resolver';
import { PlayerEntity } from 'src/player/player.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerEntity])
  ],
  providers: [PlayerResolver, PlayerService],
  exports: []
})
export class PlayerModule { }
