import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerEntity } from 'src/player/player.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

  async validateUser(email: string, password: string): Promise<PlayerEntity | null> {
    const player = await this.playerRepository.find({
      where: {
        email
      }
    });

    return (await bcrypt.compare(password, player[0].password)) ? player[0] : null;
  }
}
