import { LeaguePlayerEntity } from './../entity/league-player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(LeaguePlayerEntity)
    private readonly leagueRepository: Repository<LeaguePlayerEntity>
  ) { }

  async leaguePlayer(id: number): Promise<LeaguePlayerEntity[]> {
    const l = [];

    (await this.leagueRepository.find({ where: { playerId: id }, relations: ["league", "player"] })).forEach(leaguePlayer => {
      if (leaguePlayer.league.picture) {
        leaguePlayer.league.picture = Buffer.from(leaguePlayer.league.picture).toString('base64');
      }

      l.push(leaguePlayer);
    });

    return l;
  }

  async league(id: number): Promise<LeaguePlayerEntity> {
    return this.leagueRepository.findOne({ where: { leagueId: id }, relations: ["league", "player"] });
  }
}
