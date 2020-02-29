import { PlayerEntity } from './../player/player.entity';
import { LoginInput } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Resolver, Query, Args } from "@nestjs/graphql";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';
import { Res } from '@nestjs/common';


@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

  @Query(() => AuthEntity)
  async login(
    @Args('login') { email, password }: LoginInput
  ): Promise<AuthEntity> {
    const player = await this.playerRepository.find({
      where: {
        email
      }
    });

    if (await bcrypt.compare(password, player[0].password)) {
      const payload = {
        id: player[0].id
      };

      return {
        token: this.jwtService.sign(payload),
      } as AuthEntity;
    } else {
      throw Error('Invalid Email or Password')
    }
  }
}
