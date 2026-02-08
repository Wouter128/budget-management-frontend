import { Routes } from '@angular/router';
import {DashboardComponent} from './components/features/dashboard/dashboard.component';
import {BudgetPeriodsComponent} from './components/features/budget-periods/budget-periods.component';
import {TransactionsComponent} from './components/features/transactions/transactions.component';
import {CategoriesComponent} from './components/features/categories/categories.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'budget-periods',
    component: BudgetPeriodsComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
];
