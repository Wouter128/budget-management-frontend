import {Component, signal} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterOutlet} from '@angular/router';
import {SideNavComponent} from './components/core/side-nav/side-nav.component';
import {HeaderComponent} from './components/core/header/header.component';
import {FooterComponent} from './components/core/footer/footer.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, RouterOutlet, SideNavComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('budget-management-frontend');

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem("app-lang");
    const langToUse = savedLang || 'en';

    this.translate.use(langToUse);
  }
}
