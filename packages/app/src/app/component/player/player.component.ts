import { PlayerService } from './../../service/player.service';
import { PlayerEntity } from './../../../../../api/src/player/player.entity';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    player: PlayerEntity;
    loading: true;
    error: any;

    constructor(
        private playerService: PlayerService,
        private sanitizer: DomSanitizer
        ) { }

    ngOnInit(): void {
        this.playerService.getPlayer().subscribe(player => {
            this.player = player
        })
    }

    getPlayerPicture(): SafeUrl {
        return this.sanitizer.bypassSecurityTrustStyle('url(data:image/png;base64,' + this.player?.picture + ')');
      }

}
