import { RosterEntity } from './roster-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RosterInput } from './dto/input-roster.dto';

@Injectable()
export class RosterService {
  constructor(
    @InjectRepository(RosterEntity)
    private readonly rosterRepository: Repository<RosterEntity>
  ) { }

  async findAll(): Promise<RosterEntity[]> {
    return this.rosterRepository.find();
  }

  async create(roster: RosterInput): Promise<RosterEntity> {
    return await this.rosterRepository.save(roster);
  }
}
