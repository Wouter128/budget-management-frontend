import {Component, signal} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterOutlet} from '@angular/router';
import {SideNavComponent} from './components/core/side-nav/side-nav.component';
import {HeaderComponent} from './components/core/header/header.component';

@Component({
  selector: 'app-root',
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, RouterOutlet, SideNavComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('budget-management-frontend');
}
