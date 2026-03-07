import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './shared/components/core/header/header.component';
import {FooterComponent} from './shared/components/core/footer/footer.component';
import {TranslateService} from '@ngx-translate/core';
import {SurfaceComponent} from './shared/components/core/surface/surface.component';
import {NavigationComponent} from './shared/components/core/navigation/navigation.component';
import {MatDivider} from '@angular/material/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SurfaceComponent, NavigationComponent, MatDivider],
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
