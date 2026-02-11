import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TitleComponent} from '../../../common/title/title.component';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-create-category',
  imports: [
    RouterLink,
    TitleComponent,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslatePipe
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
    this.categoryService.createCategory(this.formGroup.value).subscribe({
      next: () => {
        console.log("Category created");
        this.formGroup.reset();
        this.router.navigate(['/categories']).then();
      },
      error: (response) => {
        console.log(response);
        this.formGroup.enable();
      }
    })
  }
}
