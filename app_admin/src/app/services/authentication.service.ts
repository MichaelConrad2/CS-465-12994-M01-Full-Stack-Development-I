import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from './trip-data.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private readonly TOKEN_KEY = 'travlr-token';

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) { }

  public getToken(): string {
    return this.storage.getItem(this.TOKEN_KEY) || '';
  }

  public saveToken(token: string): void {
    this.storage.setItem(this.TOKEN_KEY, token);
  }

  public logout(): void {
    this.storage.removeItem(this.TOKEN_KEY);
  }

  private getPayload(): any | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const payload = this.getPayload();
    if (!payload || !payload.exp) return false;
    return payload.exp > (Date.now() / 1000);
  }

  public getCurrentUser(): User {
    const payload = this.getPayload();
    const user = new User();
    if (payload) {
      user.email = payload.email;
      user.name = payload.name;
    }
    return user;
  }

  public login(user: User, passwd: string): Observable<AuthResponse> {
    return this.tripDataService.login(user, passwd)
      .pipe(tap((resp: AuthResponse) => this.saveToken(resp.token)));
  }

  public register(user: User, passwd: string): Observable<AuthResponse> {
    return this.tripDataService.register(user, passwd)
      .pipe(tap((resp: AuthResponse) => this.saveToken(resp.token)));
  }
}
