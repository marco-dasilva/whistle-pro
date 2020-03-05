import { ConfigService } from '../../config/config.service';

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: new ConfigService().get('JWT_SECRET_KEY')
    });
  }

  async validate(payload: any) {
    // TODO: Some kind of validation
    return { userId: payload.id, isSiteAdmin: payload.isSiteAdmin };
  }
}
