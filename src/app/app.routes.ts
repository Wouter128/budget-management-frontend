import { Routes } from '@angular/router';
import {DashboardComponent} from './components/features/dashboard/dashboard.component';
import {BudgetPeriodsComponent} from './components/features/budget-periods/budget-periods.component';
import {TransactionsComponent} from './components/features/transactions/transactions.component';
import {CategoriesComponent} from './components/features/categories/categories.component';
import {LoginComponent} from './components/core/login/login.component';
import {CreateCategoryComponent} from './components/features/categories/create-category/create-category.component';
import {AuthGuard} from './guards/auth.guard';
import {EditCategoryComponent} from './components/features/categories/edit-category/edit-category.component';

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
