import {Component, inject, OnInit} from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../model/category';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../common/confirm-dialog/confirm-dialog.component';

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

  readonly dialog = inject(MatDialog);

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
      }
    );
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, subject: string, name: string, id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        subject: subject,
        name: name
      }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        console.log("Confirmed, ready to delete! (id: " + id + ")");
        this.deleteCategory(id);
      } else {
        console.log("Canceled, not doing anything...");
      }
    })
  }

  private deleteCategory(id: string): void {
    this.categoryService.deleteCategory(id).subscribe();
  }
}
