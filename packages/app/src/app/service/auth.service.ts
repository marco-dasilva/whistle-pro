import { AUTH_INIT } from './../queries/Auth';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenStorage } from '../storage/token.storage';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private apollo: Apollo,
    private token: TokenStorage
  ) { }

  initialize(): Observable<boolean> {
    const tokenVal = this.token.getToken();

    return new Observable((observer) => {
      if (!tokenVal) {
        observer.next(false);
        observer.complete();
      } else {
        this.apollo.query({
          query: AUTH_INIT
        }).subscribe((resp) => {
          if (resp) {
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
          }
        }, (error) => {
          observer.next(false);
          observer.complete();
        });
      }
    });
  }

  login(resp): void {
    this.token.saveToken(resp.token);
  }
}
