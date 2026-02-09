import {Component, OnInit} from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-categories',
  imports: [
    TitleComponent,
    MatButton,
    RouterLink
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] | undefined;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      result => {
        this.categories = result;
        console.log(this.categories);
      }
    );
  }
}
