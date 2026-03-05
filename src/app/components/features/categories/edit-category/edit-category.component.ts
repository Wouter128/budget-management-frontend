import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TitleComponent} from '../../../common/title/title.component';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {ValidationService} from '../../../../services/validation.service';
import {ErrorMessageComponent} from '../../../common/error-message/error-message.component';

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
    MatCheckbox,
    ErrorMessageComponent
  ],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss',
})
export class EditCategoryComponent implements OnInit {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private categoryService: CategoryService = inject(CategoryService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private validationService: ValidationService = inject(ValidationService);

  public errorMessages: string [] = [];

  categoryId!: string;
  category: any;

  formGroup = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', Validators.maxLength(255)],
    itemized: [false],
    global: [false]
  })

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;

    this.categoryService.getCategory(this.categoryId).subscribe(cat => {
      this.category = cat;
      this.formGroup.patchValue(this.category);
    });

    this.formGroup.valueChanges.subscribe(() => {
      this.errorMessages = this.validationService.getValidationError(this.formGroup);
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
