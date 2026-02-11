import {Money} from './money';

export interface BudgetPeriod {
  id: string;
  year: number;
  month: string;
  plannedAmount: Money;
}
