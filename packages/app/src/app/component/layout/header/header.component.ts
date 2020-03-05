import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';
import { PlayerEntity } from '../../../../../../api/src/player/player.entity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  player: PlayerEntity = {} as PlayerEntity;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.getPlayer().subscribe((player: any) => {
      if (player) {
        this.player = player;
      }
    });
  }

}
