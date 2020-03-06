import { ApplicationService } from './../../../service/application.service';
import { Application } from './../../../interface/application.interface';
import { LeaguePlayerEntity } from './../../../../../../api/src/entity/league-player.entity';

import { Component, OnInit, Input } from '@angular/core';
import { PlayerEntity } from '../../../../../../api/src/player/player.entity';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {
  @Input() player: PlayerEntity;
  @Input() leagues: LeaguePlayerEntity[];
  @Input() application: Application;

  constructor(
    private sanitizer: DomSanitizer,
    private applicationService: ApplicationService
  ) { }

  ngOnInit(): void {
  }

  getPlayerPicture(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle('url(data:image/png;base64,' + this.player?.picture + ')');
  }

  getLeaguePicture(league: LeaguePlayerEntity): SafeUrl | void {
    return this.sanitizer.bypassSecurityTrustStyle('url(data:image/png;base64,' + league?.league?.picture + ')');
  }

  selectLeague(id: number): void {
    this.applicationService.setLeagueSelected(id);
  }
}
