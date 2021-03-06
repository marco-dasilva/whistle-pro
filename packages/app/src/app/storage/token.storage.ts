import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorage {
  constructor() { }

  public logout(): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.clear();
  }

  public saveToken(token: string): any | void {
    if (!token) {
      return;
    }

    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
}
