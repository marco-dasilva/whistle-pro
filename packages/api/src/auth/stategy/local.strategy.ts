import { PlayerEntity } from 'src/player/player.entity';

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<PlayerEntity> {
    const player = await this.authService.validateUser(username, password);

    if (!player) {
      throw new UnauthorizedException();
    }

    return player;
  }
}
