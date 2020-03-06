import { Application } from './../interface/application.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private _app = new BehaviorSubject<Application>(null);
  private app = {} as Application;

  contructor() {
    this._app.next(this.app);
  }

  getApplicationSettings(): Observable<Application> {
    return this._app.asObservable();
  }

  setLeagueSelected(id: number): void {
    this.app.leagueSelected = id;
    this._app.next(this.app);
  }
}
