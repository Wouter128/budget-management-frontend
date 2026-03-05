import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';
import {CategoryUpsertRequest} from '../model/CategoryUpsertRequest';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private url = `${environment.apiUrl}/category`;

  constructor(private http: HttpClient) {
  }

  createCategory(category: CategoryUpsertRequest): Observable<Category> {
    return this.http.post<Category>(`${this.url}/create`, category);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  updateCategory(id: string, category: CategoryUpsertRequest): Observable<Category> {
    return this.http.put<Category>(`${this.url}/${id}`, category);
  }
}
