import { Component } from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-transactions',
  imports: [
    TitleComponent,
    MatButton,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {

}
