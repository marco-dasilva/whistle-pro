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
    return this.playerRepository.find({ where: { id } });
  }

  async players(): Promise<PlayerEntity[]> {
    return this.playerRepository.find();
  }
}
