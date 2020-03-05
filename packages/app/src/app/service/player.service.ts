import { PLAYER } from './../queries/Players';
import { Apollo } from 'apollo-angular';
import { TokenStorage } from './../storage/token.storage';
import { PlayerEntity } from './../../../../api/src/player/player.entity';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _player = new BehaviorSubject<PlayerEntity>(null);

  constructor(
    private tokenStorage: TokenStorage,
    private apollo: Apollo
  ) {
    this.updatePlayer();
  }

  updatePlayer(): void {
    this.apollo.watchQuery({
      query: PLAYER,
    }).valueChanges.subscribe((result: any) => {
      this._player.next(result.data.player[0]);
    });
  }

  getPlayer(): Observable<PlayerEntity> {
    return this._player.asObservable();
  }
}
