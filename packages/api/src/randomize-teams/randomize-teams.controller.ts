import { RandomizeTeamsService } from './randomize-teams.service';
import { Controller, Post, Request, HttpCode } from "@nestjs/common";

@Controller()
export class RandomizeTeamsController {
  constructor(private readonly randomizeTeamsService: RandomizeTeamsService) { }

  @Post('/randomize-teams')
  @HttpCode(200)
  randomizeTeams(@Request() req) {
    return this.randomizeTeamsService.randomize(req.body);
  }
}
