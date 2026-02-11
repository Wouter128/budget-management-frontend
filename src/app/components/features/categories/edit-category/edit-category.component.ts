import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TitleComponent} from '../../../common/title/title.component';
import {TranslatePipe} from '@ngx-translate/core';

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
    TranslatePipe
  ],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss',
})
export class EditCategoryComponent implements OnInit {

  categoryId!: string;
  category: any;
  formGroup!: FormGroup;

  constructor(private categoryService: CategoryService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;

    this.formGroup = this.formBuilder.group({
      name: '',
      description: ''
    });

    this.categoryService.getCategory(this.categoryId).subscribe(cat => {
      this.category = cat;
      this.formGroup.patchValue(this.category);
    });
  }

  onSubmit(): void {
    this.updateCategory(this.categoryId);
  }

  private updateCategory(id: string) {
    this.categoryService.updateCategory(id, this.formGroup.value).subscribe({
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
