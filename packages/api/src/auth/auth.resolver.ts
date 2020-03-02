import { PlayerEntity } from './../player/player.entity';
import { LoginInput } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Resolver, Args, Mutation } from "@nestjs/graphql";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';


@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

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
