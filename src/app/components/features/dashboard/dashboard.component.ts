import {Component, inject, OnInit} from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {BudgetPeriod} from '../../../model/budgetPeriod';
import {BudgetPeriodService} from '../../../services/budget-period.service';
import Keycloak from 'keycloak-js';
import {AuthService} from '../../../services/auth.service';
import {MatButton} from '@angular/material/button';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  imports: [
    TitleComponent,
    MatButton,
    TranslatePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  private translate = inject(TranslateService);

  public username: string | undefined;
  public isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.getUsername().then(name => this.username = name);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("app-lang", lang);
  }
}
