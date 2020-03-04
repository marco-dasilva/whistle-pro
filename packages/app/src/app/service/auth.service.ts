import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenStorage } from '../storage/token.storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private token: TokenStorage,
  ) { }

  public initialize(): Observable<any> {
    const tokenVal = this.token.getToken();
    return new Observable((observer) => {
      observer.next(false);
      observer.complete();
    });
  }
}
