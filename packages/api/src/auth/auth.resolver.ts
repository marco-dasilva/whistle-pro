import { PlayerEntity } from './../player/player.entity';
import { LoginInput } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guard/gql.guard';
import { PlayerDecorator } from 'src/player/player.decorator';


@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

  @Query(() => AuthEntity)
  @UseGuards(GqlAuthGuard)
  async init(@PlayerDecorator() player: any): Promise<AuthEntity> {
    return {
      token: player.headers.authorization.split(' ')[1]
    } as AuthEntity;
  }

  @Mutation(() => AuthEntity)
  async login(
    @Args('login') { email, password }: LoginInput
  ): Promise<AuthEntity> {
    const player = await this.playerRepository.find({
      where: {
        email
      }
    });

    if (player.length > 0) {
      if (await bcrypt.compare(password, player[0].password)) {
        const payload = {
          id: player[0].id,
          admin: player[0].isSiteAdmin
        };

        return {
          token: this.jwtService.sign(payload),
        } as AuthEntity;
      } else {
        throw Error('Invalid Email or Password')
      }
    } else {
      throw Error('Invalid Email or Password');
    }
  }
}
