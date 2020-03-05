import { PlayerEntity } from './player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>
  ) { }

  async player(id: number): Promise<PlayerEntity[]> {
    const p = new Array<PlayerEntity>();

    (await this.playerRepository.find({ where: { id } })).forEach(player => {
      if (player.picture) {
        player.picture = Buffer.from(player.picture).toString('base64');
      }

      p.push(player);
    });

    return p;
  }

  async players(): Promise<PlayerEntity[]> {
    return this.playerRepository.find();
  }
}
