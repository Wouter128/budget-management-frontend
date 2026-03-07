import { Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {BudgetPeriodsComponent} from './features/budget-periods/budget-periods/budget-periods.component';
import {TransactionsComponent} from './features/transactions/transactions/transactions.component';
import {CategoriesComponent} from './features/categories/categories/categories.component';
import {LoginComponent} from './shared/components/core/login/login.component';
import {CreateCategoryComponent} from './features/categories/categories/create-category/create-category.component';
import {AuthGuard} from './guards/auth.guard';
import {EditCategoryComponent} from './features/categories/categories/edit-category/edit-category.component';
import {
  CreateTransactionComponent
} from './features/transactions/transactions/create-transaction/create-transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'budget-periods',
    component: BudgetPeriodsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-transaction',
    component: CreateTransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-category',
    component: CreateCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-category/:id',
    component: EditCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
