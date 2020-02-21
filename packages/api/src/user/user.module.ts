import { PlayerEntity } from 'src/player/player.entity';
import { UserEntity } from './user.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PlayerEntity])
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
