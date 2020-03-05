import { GET_TEAMS } from './../../queries/Teams';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_TEAMS,
      })
      .valueChanges.subscribe((result: any) => {
        this.teams = result.data.teams;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
