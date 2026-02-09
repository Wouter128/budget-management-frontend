import {Component, OnInit} from '@angular/core';
import {BudgetPeriodService} from '../../../services/budget-period.service';
import {BudgetPeriod} from '../../../model/budgetPeriod';
import {MatButton} from '@angular/material/button';
import {TitleComponent} from '../../common/title/title.component';

@Component({
  selector: 'app-budget-periods',
  imports: [
    MatButton,
    TitleComponent
  ],
  templateUrl: './budget-periods.component.html',
  styleUrl: './budget-periods.component.scss',
})
export class BudgetPeriodsComponent implements OnInit {

  public budgetPeriod: BudgetPeriod | undefined;

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
}
