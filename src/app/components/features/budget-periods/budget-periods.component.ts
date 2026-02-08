import {Component, inject, OnInit} from '@angular/core';
import {BudgetPeriodService} from '../../../services/budget-period.service';
import {BudgetPeriod} from '../../../model/budgetPeriod';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-budget-periods',
  imports: [],
  templateUrl: './budget-periods.component.html',
  styleUrl: './budget-periods.component.scss',
})
export class BudgetPeriodsComponent implements OnInit {

  public budgetPeriod: BudgetPeriod | undefined;

  private readonly keycloak = inject(Keycloak);

  constructor(private budgetPeriodService: BudgetPeriodService) {
  }

  ngOnInit(): void {
    this.getBudgetPeriod();
  }

  getBudgetPeriod(): void {
    this.budgetPeriodService.getBudgetPeriod()
      .subscribe(result => {
        this.budgetPeriod = result;
      })
  }

  login(): void {
    this.keycloak.login();
  }
}
