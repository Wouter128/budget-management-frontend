import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '../model/Transaction';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

  private url = `${environment.apiUrl}/transaction`;

  constructor(private http: HttpClient) {
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.url}/create`, transaction);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.url}`);
  }
}
