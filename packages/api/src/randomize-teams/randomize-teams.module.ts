import { RandomizeTeamsService } from './randomize-teams.service';
import { RandomizeTeamsController } from './randomize-teams.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [RandomizeTeamsController],
  providers: [RandomizeTeamsService]
})
export class RandomizeTeamsModule { }
