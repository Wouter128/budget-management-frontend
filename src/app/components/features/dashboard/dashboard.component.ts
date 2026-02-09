import { Component } from '@angular/core';
import {TitleComponent} from '../../common/title/title.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    TitleComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

}
