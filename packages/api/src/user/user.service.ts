import { PlayerEntity } from 'src/player/player.entity';
import { UserEntity } from './user.entity';

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export type User = any;

@Injectable()
export class UserService {
  private readonly user: User[];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

  async validateUser(email: string, password: string): Promise<any | null> {
    let player = await this.playerRepository.createQueryBuilder('player').where('player.email=(:email)', { email }).execute();

    if (player.length > 0) {
      const validPassword = await this.userRepository.createQueryBuilder('user').where('user.password=(:password)', { password }).execute();
      if (validPassword.length === 0) {
        player = null;
      }
    }
    return player;
  }
}
