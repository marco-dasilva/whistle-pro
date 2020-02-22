import { RosterConfigInput } from './dto/input-roster-config.dto';
import { RosterConfigEntity } from './roster-config-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RosterConfigService {
  constructor(
    @InjectRepository(RosterConfigEntity)
    private readonly rosterConfigRepository: Repository<RosterConfigEntity>
  ) { }

  async findAll(): Promise<RosterConfigEntity[]> {
    return this.rosterConfigRepository.find();
  }

  async create(rosterConfig: RosterConfigInput): Promise<RosterConfigEntity> {
    return await this.rosterConfigRepository.save(rosterConfig);
  }
}
