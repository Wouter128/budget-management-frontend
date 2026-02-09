import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TitleComponent} from '../../../common/title/title.component';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-create-category',
  imports: [
    RouterLink,
    TitleComponent,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss',
})
export class CreateCategoryComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: '',
      description: ''
    });
  }

  onSubmit(): void {
    this.createCategory();
  }

  createCategory(): void {
    this.categoryService.createCategory(this.formGroup?.value).subscribe({
      next: () => {
        console.log("Category created");
        this.formGroup?.reset();
        this.router.navigate(['/categories']).then();
      },
      error: (response) => {
        console.log(response);
        this.formGroup?.enable();
      }
    })
  }
}
