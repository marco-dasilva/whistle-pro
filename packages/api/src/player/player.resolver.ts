import { PlayerInput } from './dto/input-player.dto';
import { GqlAuthGuard } from './../auth/guard/gql.guard';
import { UseGuards } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerEntity } from './player.entity';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PlayerDecorator } from './player.decorator';

@Resolver('Player')
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) { }

  @Query(() => [PlayerEntity])
  @UseGuards(GqlAuthGuard)
  async playerById(@PlayerDecorator() player: any, @Args('id') id?: number): Promise<PlayerEntity[]> {
    return this.playerService.player(id);
  }

  @Query(() => [PlayerEntity])
  @UseGuards(GqlAuthGuard)
  async player(@PlayerDecorator() player: any): Promise<PlayerEntity[]> {
    return this.playerService.player(player.user.userId);
  }

  @Query(() => [PlayerEntity])
  @UseGuards(GqlAuthGuard)
  async players(): Promise<PlayerEntity[]> {
    return this.playerService.players();
  }

  @Mutation(() => PlayerEntity)
  async createPlayer(@Args('input') input: PlayerInput): Promise<PlayerEntity> {
    const created = await this.playerService.create({ ...input });
    return created;
  }
}
