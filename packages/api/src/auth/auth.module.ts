import { AuthResolver } from './auth.resolver';
import { ConfigService } from './../config/config.service';

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './stategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerEntity } from 'src/player/player.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerEntity]),
    PassportModule,
    JwtModule.register({
      secret: new ConfigService().get('JWT_SECRET_KEY'),
      signOptions: { expiresIn: '365d' },
    }),
  ],
  controllers: [],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
