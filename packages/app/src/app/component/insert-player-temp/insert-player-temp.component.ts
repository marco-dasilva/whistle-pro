import { PlayerEntity } from './../../../../../api/src/player/player.entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-player-temp',
  templateUrl: './insert-player-temp.component.html',
  styleUrls: ['./insert-player-temp.component.scss']
})
export class InsertPlayerTempComponent implements OnInit {
  player: PlayerEntity = {} as PlayerEntity;
  selectedFile: File;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // this.player.phoneNumber = '0';
    this.player.dateOfBirth = '0';
    this.player.nationality = 'Canada';
    this.player.isActive = true;
    this.player.isInjured = false;

    // TODO: Save to DB
    console.log(this.player);
  }

  onFileChanged(event) {
    var files = event.target.files;
    var file = files[0];
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file)
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.player.picture = btoa(binaryString);
  }

}
