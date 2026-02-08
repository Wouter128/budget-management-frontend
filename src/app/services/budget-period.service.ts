import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BudgetPeriod} from '../model/budgetPeriod';

@Injectable({
  providedIn: 'root',
})
export class BudgetPeriodService {

  private url = `${environment.apiUrl}/budget-period`;

  constructor(private http: HttpClient) {
  }

  getBudgetPeriod(): Observable<BudgetPeriod> {
    return this.http.get<BudgetPeriod>(this.url);
  }
}
