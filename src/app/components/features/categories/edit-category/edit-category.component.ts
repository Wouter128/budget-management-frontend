import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TitleComponent} from '../../../common/title/title.component';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-edit-category',
  imports: [
    FormsModule,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    TitleComponent,
    TranslatePipe,
    MatCheckbox
  ],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss',
})
export class EditCategoryComponent implements OnInit {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private categoryService: CategoryService = inject(CategoryService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  categoryId!: string;
  category: any;

  formGroup = this.formBuilder.nonNullable.group({
    name: [''],
    description: [''],
    itemized: [false],
    global: [false]
  })

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;

    this.categoryService.getCategory(this.categoryId).subscribe(cat => {
      this.category = cat;
      this.formGroup.patchValue(this.category);
    });
  }

  onSubmit(): void {
    this.updateCategory(this.categoryId);
  }

  private updateCategory(id: string) {
    this.categoryService.updateCategory(id, this.formGroup.getRawValue()).subscribe({
      next: () => {
        this.formGroup.reset();
        this.router.navigate(['/categories']).then();
      },
      error: (response) => {
        console.log(response);
        this.formGroup.enable();
      }
    });
  }
}
