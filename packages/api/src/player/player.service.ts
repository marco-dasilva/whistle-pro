import { PlayerInput } from './dto/input-player.dto';
import { PlayerEntity } from './player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

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

  async create(player: PlayerInput): Promise<PlayerEntity> {
    player.password = bcrypt.hashSync(player.uniqueName, 10);
    const byteCharacters = atob(player.picture);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    player.picture = new Blob([byteArray], {type: 'image/png'}).toString();
    
    return await this.playerRepository.save(player);
  }
}
