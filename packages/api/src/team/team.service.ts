import { TeamInput } from './dto/input-team.dto';
import { TeamEntity } from './team.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>
  ) { }

  async findAll(): Promise<TeamEntity[]> {
    return this.teamRepository.find();
  }

  async create(team: TeamInput): Promise<TeamEntity> {
    return await this.teamRepository.save(team);
  }
}
