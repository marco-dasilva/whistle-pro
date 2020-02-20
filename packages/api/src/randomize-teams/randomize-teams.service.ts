import { Injectable } from "@nestjs/common";

interface P {
  id: number;
  skillRank: number;
}

interface T {
  teams: number;
  players: P[];
}

@Injectable()
export class RandomizeTeamsService {
  async randomize(req: T): Promise<any> {
    let teams = this.generateTeamArray(req.teams);
    let players: P[] = (JSON.parse(JSON.stringify(req.players)));

    while (players.length > 0) {
      players = this.shufflePlayers(players);

      const player = players.pop();

      teams = this.addToTeam(teams, player, req.players.length);
    }

    return { teams };
  }

  addToTeam(teams: P[][], player: P, totalPlayerCount: number): Array<P[]> {
    const addToTeamIndex = this.addToEmptyTeam(teams);

    if (addToTeamIndex !== -1) {
      teams[addToTeamIndex].push(player);
    } else {
      let lowestTeamSum = 100;
      let teamAddIndex = -1;

      teams.forEach((team: P[], index: number): void => {
        let teamSum = 0;

        team.forEach((player: P): void => {
          teamSum += player.skillRank;
        });

        if (teamSum < lowestTeamSum) {
          lowestTeamSum = teamSum;
          teamAddIndex = index;
          return;
        }
      });

      if (teamAddIndex !== -1) {
        if (teams[teamAddIndex].length > Math.floor(totalPlayerCount / teams.length)) {
          // TODO
        } else {
          teams[teamAddIndex].push(player);
        }
      }
    }

    return teams;
  }

  addToEmptyTeam(teams: P[][]): number {
    let addToTeamIndex = -1;

    teams.forEach((team: P[], index: number): void => {
      if (team.length < 1) {
        addToTeamIndex = index;
        return;
      }
    });

    return addToTeamIndex;
  }

  generateTeamArray(teamCount: number): Array<P[]> {
    const teams = new Array<P[]>(teamCount);

    for (let index = 0; index < teams.length; index++) {
      teams[index] = new Array<P>();
    }
    return teams;
  }

  shufflePlayers(players: P[]): P[] {
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
