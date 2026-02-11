import {Component} from '@angular/core';
import {MatDivider, MatListItem, MatNavList} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatNavList,
    RouterLink,
    MatListItem,
    MatDivider,
    RouterLinkActive,
    TranslatePipe
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {

}
