import { Component } from '@angular/core';
import {MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatNavList,
    RouterLink,
    MatListItem
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

}
