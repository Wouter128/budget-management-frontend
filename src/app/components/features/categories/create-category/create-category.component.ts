import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TitleComponent} from '../../../common/title/title.component';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {ErrorMessageComponent} from '../../../common/error-message/error-message.component';
import {HttpErrorResponse} from '@angular/common/http';
import {ValidationService} from '../../../../services/validation.service';

@Component({
  selector: 'app-create-category',
  imports: [
    RouterLink,
    TitleComponent,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslatePipe,
    MatCheckbox,
    ErrorMessageComponent
  ],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss',
})
export class CreateCategoryComponent implements OnInit {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private categoryService: CategoryService = inject(CategoryService);
  private router: Router = inject(Router);
  private validationService: ValidationService = inject(ValidationService);

  public errorMessages: string[] = [];

  formGroup = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', Validators.maxLength(255)],
    itemized: [false],
    global: [false]
  })

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(() => {
      this.errorMessages = this.validationService.getValidationError(this.formGroup);
    });
  }

  onSubmit(): void {
    this.createCategory();
  }

  createCategory(): void {
    this.formGroup.disable();
    this.categoryService.createCategory(this.formGroup.getRawValue()).subscribe({
      next: () => {
        console.log("Category created");
        this.formGroup.reset();
        this.router.navigate(['/categories']).then();
      },
      error: (response: HttpErrorResponse) => {
        console.log(response);
        this.errorMessages.push(response.error?.message ?? "Something went wrong");
        this.formGroup.enable();
      }
    })
  }


}
