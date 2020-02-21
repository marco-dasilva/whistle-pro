import { ConfigService } from './../config/config.service';
import { AuthController } from './auth.controller';

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './stategy/local.strategy';
import { JwtStrategy } from './stategy/jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: new ConfigService().get('JWT_SECRET_KEY'),
      signOptions: { expiresIn: '365d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
