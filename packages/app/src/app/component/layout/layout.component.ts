import { LeaguePlayerEntity } from './../../../../../api/src/entity/league-player.entity';
import { Component, OnInit } from '@angular/core';
import { PlayerEntity } from '../../../../../api/src/player/player.entity';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  player: PlayerEntity = {} as PlayerEntity;
  leagues: LeaguePlayerEntity[] = [];

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.getPlayer().subscribe((player: any) => {
      if (player) {
        this.player = player;
      }
    });

    this.playerService.getParticipatingLeagues().subscribe((leagues: any) => {
      if (leagues) {
        this.leagues = leagues;
      }
    });
  }
}
