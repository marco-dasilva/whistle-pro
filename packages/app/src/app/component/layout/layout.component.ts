import { Application } from './../../interface/application.interface';
import { ApplicationService } from './../../service/application.service';
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
  application: Application = {} as Application;

  constructor(
    private playerService: PlayerService,
    private applicationService: ApplicationService
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

        if (!this.application || (!this.application.leagueSelected && this.leagues.length > 0)) {
          this.applicationService.setLeagueSelected(this.leagues[0].league.id);
        }
      }
    });

    this.applicationService.getApplicationSettings().subscribe((application: any) => {
      this.application = application;
    })
  }
}
