import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {TitleComponent} from "../../../../shared/components/common/title/title.component";
import {TranslatePipe} from "@ngx-translate/core";
import {TransactionService} from '../../services/transaction.service';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {DatePipe} from '@angular/common';
import {CategoryService} from '../../../categories/services/category.service';
import {Category} from '../../../../model/category';

@Component({
  selector: 'app-create-transaction',
  imports: [
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    TitleComponent,
    TranslatePipe,
    MatSelectModule,
    MatDatepickerModule
  ],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss',
  providers: [
    provideNativeDateAdapter(),
    DatePipe
  ]
})
export class CreateTransactionComponent implements OnInit {

  formGroup!: FormGroup;
  categories!: Category[];

  constructor(private transactionService: TransactionService,
              private categoryService: CategoryService,
              private formBuilder: FormBuilder,
              private router: Router,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      date: '',
      amount: this.formBuilder.group({
        amount: '',
        currency: ''
      }),
      description: '',
      categoryId: '',
      type: ''
    })

    this.populateCategories();
  }

  private populateCategories(): void {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
  }

  onSubmit(): void {
    this.createTransaction();
  }

  createTransaction(): void {
    const rawValue = this.formGroup.value;
    const payload = {
      ...rawValue,
      date: this.datePipe.transform(rawValue.date, 'yyyy-MM-dd')
    }

    this.transactionService.createTransaction(payload).subscribe({
      next: () => {
        console.log("Transaction created");
        this.formGroup.reset();
        this.router.navigate(['/transactions']).then();
      },
      error: (response) => {
        console.log(response);
        this.formGroup.enable();
      }
    })
  }
}
