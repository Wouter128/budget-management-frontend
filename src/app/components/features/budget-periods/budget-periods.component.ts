import {Component, OnInit} from '@angular/core';
import {BudgetPeriodService} from '../../../services/budget-period.service';
import {BudgetPeriod} from '../../../model/budgetPeriod';
import {MatButton} from '@angular/material/button';
import {TitleComponent} from '../../common/title/title.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-budget-periods',
  imports: [
    MatButton,
    TitleComponent,
    TranslatePipe
  ],
  templateUrl: './budget-periods.component.html',
  styleUrl: './budget-periods.component.scss',
})
export class BudgetPeriodsComponent implements OnInit {

  public budgetPeriods: BudgetPeriod[] | undefined;

  constructor(private budgetPeriodService: BudgetPeriodService) {
  }

  ngOnInit(): void {
    this.getBudgetPeriods();
  }

  getBudgetPeriods(): void {
    this.budgetPeriodService.getBudgetPeriods()
      .subscribe(result => {
        this.budgetPeriods = result;
      })
  }
}
