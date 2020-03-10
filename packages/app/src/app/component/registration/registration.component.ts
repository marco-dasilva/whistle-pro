import { CREATE_PLAYER } from './../../queries/Players';
import { Apollo } from 'apollo-angular';
import { PlayerEntity } from './../../../../../api/src/player/player.entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  player: PlayerEntity = {} as PlayerEntity;
  selectedFile: File;
  error: string = '';

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
  }

  submitForm() {
    // this.player.phoneNumber = '0';
    this.player.dateOfBirth = '0';
    this.player.nationality = null;
    this.player.isActive = true;
    this.player.isInjured = false;
    this.player.password = this.player.uniqueName;
    console.log(this.player);
    this.apollo.mutate({
      mutation: CREATE_PLAYER,
      variables: {
        uniqueName: this.player.uniqueName,
        picture: this.player.picture,
        firstName: this.player.firstName,
        lastName: this.player.lastName,
        email: this.player.email,
        phoneNumber: this.player.phoneNumber,
        password: this.player.password
      }
    }).subscribe((resp: any) => {
      if (resp) {
        console.log(resp);
      }
    }, (error) => {
      this.error = error;
    });
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
