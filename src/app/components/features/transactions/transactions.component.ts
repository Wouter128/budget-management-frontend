import {Component, OnInit} from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {MatButtonModule} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {TransactionService} from '../../../services/transaction.service';
import {Transaction} from '../../../model/Transaction';
import {MatIconModule} from '@angular/material/icon';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [
    TitleComponent,
    MatButtonModule,
    TranslatePipe,
    RouterLink,
    MatTableModule,
    MatIconModule,
    DecimalPipe
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {

  columnsToDisplay = ['date', 'amount', 'type', 'category']

  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Transaction | undefined;

  transactions!: Transaction[];

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.populateTransactions();
  }

  private populateTransactions(): void {
    this.transactionService.getTransactions().subscribe(result => {
      this.transactions = result;
    });
  }

  /** Checks whether an element is expanded. */
  isExpanded(element: Transaction) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: Transaction) {
    this.expandedElement = this.isExpanded(element) ? undefined : element;
  }
}
