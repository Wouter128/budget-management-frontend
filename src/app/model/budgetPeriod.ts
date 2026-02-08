import {Money} from './money';
import {Month} from './month';

export interface BudgetPeriod {
  year: number;
  month: Month;
  plannedAmount: Money;
}
