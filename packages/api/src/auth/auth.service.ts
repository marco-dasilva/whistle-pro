
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from 'src/player/player.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

  async validateUser(email: string, password: string): Promise<any | null> {
    const player = await this.playerRepository.createQueryBuilder('player').where('player.email=(:email)', { email })
      .andWhere('player.password=(:password)', { password }).execute();

    return player.length > 0 ? player : null;
  }

  async login() {
    const payload = {};
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
