import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private url = `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) {
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url + "/create", category);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }
}
