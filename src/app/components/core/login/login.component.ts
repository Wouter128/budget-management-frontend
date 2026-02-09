import {Component, inject} from '@angular/core';
import Keycloak from 'keycloak-js';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  private readonly keycloak = inject(Keycloak);

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout({redirectUri: window.location.origin});
  }
}
