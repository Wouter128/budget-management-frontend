import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TitleComponent} from '../../common/title/title.component';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    MatButton,
    TitleComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(private authService: AuthService) {
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
