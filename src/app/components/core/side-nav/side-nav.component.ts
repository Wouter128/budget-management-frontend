import {Component} from '@angular/core';
import {MatDivider, MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatNavList,
    RouterLink,
    MatListItem,
    MatDivider,
    RouterLinkActive
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

}
