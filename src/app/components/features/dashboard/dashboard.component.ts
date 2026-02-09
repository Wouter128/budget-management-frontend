import {Component, inject, OnInit} from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {BudgetPeriod} from '../../../model/budgetPeriod';
import {BudgetPeriodService} from '../../../services/budget-period.service';
import Keycloak from 'keycloak-js';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    TitleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  public username: string | undefined;
  public isAuthenticated: boolean = false;
  public budgetPeriod: BudgetPeriod | undefined;

  constructor(private budgetPeriodService: BudgetPeriodService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.getUsername().then(name => this.username = name);
    this.getBudgetPeriod();
  }

  getBudgetPeriod(): void {
    this.budgetPeriodService.getBudgetPeriod().subscribe(result => {
      this.budgetPeriod = result;
    });
  }
}
