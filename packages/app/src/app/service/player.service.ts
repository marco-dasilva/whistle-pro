import { PLAYER_LEAGUE } from './../queries/Leagues';
import { LeaguePlayerEntity } from './../../../../api/src/entity/league-player.entity';
import { PLAYER } from './../queries/Players';
import { Apollo } from 'apollo-angular';
import { TokenStorage } from './../storage/token.storage';
import { PlayerEntity } from './../../../../api/src/player/player.entity';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LeagueEntity } from '../../../../api/src/league/league.entity';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _player = new BehaviorSubject<PlayerEntity>(null);
  private _playerLeagues = new BehaviorSubject<LeaguePlayerEntity[]>(null);

  constructor(
    private tokenStorage: TokenStorage,
    private apollo: Apollo
  ) {
    this.updatePlayer();
    this.updatePlayerLeagues();
  }

  updatePlayer(): void {
    this.apollo.watchQuery({
      query: PLAYER,
    }).valueChanges.subscribe((result: any) => {
      this._player.next(result.data.player[0]);
    });
  }

  updatePlayerLeagues(): void {
    this.apollo.watchQuery({
      query: PLAYER_LEAGUE,
    }).valueChanges.subscribe((result: any) => {
      this._playerLeagues.next(result.data.league);
    });
  }

  getPlayer(): Observable<PlayerEntity> {
    return this._player.asObservable();
  }

  getParticipatingLeagues(): Observable<LeaguePlayerEntity[]> {
    return this._playerLeagues.asObservable();
  }
}
