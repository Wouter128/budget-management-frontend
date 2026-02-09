import {Component, inject, OnInit} from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {BudgetPeriod} from '../../../model/budgetPeriod';
import {BudgetPeriodService} from '../../../services/budget-period.service';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-dashboard',
  imports: [
    TitleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  private readonly keycloak = inject(Keycloak);
  public isAuthenticated: boolean = false;
  public username: string | undefined;
  public budgetPeriod: BudgetPeriod | undefined;

  constructor(private budgetPeriodService: BudgetPeriodService) {
  }

  ngOnInit(): void {
    this.loadKeycloakUsername()
    this.getBudgetPeriod();
    this.checkAuthenticated();
  }

  getBudgetPeriod(): void {
    this.budgetPeriodService.getBudgetPeriod().subscribe(result => {
      this.budgetPeriod = result;
    });
  }

  loadKeycloakUsername(): void {
    this.keycloak.loadUserProfile().then(result => this.username = result.firstName + " " + result.lastName);
  }

  checkAuthenticated(): void {
    this.isAuthenticated = this.keycloak.authenticated
  }
}
