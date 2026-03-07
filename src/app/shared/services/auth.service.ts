import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private username?: string;

  constructor(private keycloak: Keycloak) {
  }

  isAuthenticated(): boolean {
    return this.keycloak.authenticated;
  }

  async getUsername(): Promise<string> {
    if (this.username) {
      return this.username;
    }

    const result = await this.keycloak.loadUserProfile();
    this.username = result.firstName + " " + result.lastName;
    return this.username;
  }

  login(): void {
    this.keycloak.login({redirectUri: window.location.origin + "/dashboard"}).then();
  }

  logout(): void {
    this.keycloak.logout({redirectUri: window.location.origin + "/dashboard"}).then();
  }
}
