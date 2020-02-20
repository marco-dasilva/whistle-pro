import { PlayerEntity } from './../player/player.entity';
import { Injectable } from "@nestjs/common";


interface T {
  teams: number;
  players: PlayerEntity[];
}

@Injectable()
export class RandomizeTeamsService {
  async randomize(req: T): Promise<any> {
    let teams = this.generateTeamArray(req.teams);
    const players: PlayerEntity[] = (JSON.parse(JSON.stringify(req.players)));

    while (players.length > 0) {
      const player = players.sort((a, b) => (a.skillRank > b.skillRank) ? 1 : -1).pop();
      teams = this.addToTeam(teams, player);
    }

    this.computeSkill(teams);

    teams.forEach((team: PlayerEntity[], index: number): void => {
      teams[index] = this.shufflePlayers(team);
    })

    return { teams };
  }

  computeSkill(teams: Array<PlayerEntity[]>): void {
    const skill = new Array<number>(teams.length);

    teams.forEach((team: PlayerEntity[], index: number): void => {
      skill[index] = 0;
      team.forEach((player: PlayerEntity): void => {
        skill[index] += player.skillRank;
      });
    });

    console.log(skill);
  }

  addToTeam(teams: Array<PlayerEntity[]>, player: PlayerEntity): Array<PlayerEntity[]> {
    let randomIndex: number = Math.floor(Math.random() * 4);

    while (this.lessThanTeams(teams, randomIndex)) {
      randomIndex = Math.floor(Math.random() * 4);
    }

    teams[randomIndex].push(player);

    return teams;
  }

  lessThanTeams(teams: Array<PlayerEntity[]>, randomIndex: number): boolean {
    const teamLength: number = teams[randomIndex].length;
    let isLess = false;

    teams.forEach((team: PlayerEntity[]): void => {
      if (team.length < teamLength) {
        isLess = true;
        return;
      }
    })

    return isLess;
  }

  generateTeamArray(teamCount: number): Array<PlayerEntity[]> {
    const teams = new Array<PlayerEntity[]>(teamCount);

    for (let index = 0; index < teams.length; index++) {
      teams[index] = new Array<PlayerEntity>();
    }
    return teams;
  }

  shufflePlayers(players: PlayerEntity[]): PlayerEntity[] {
    // Knuth Shuffle
    let currentIndex = players.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = players[currentIndex];
      players[currentIndex] = players[randomIndex];
      players[randomIndex] = temporaryValue;
    }

    return players;
  }
}
