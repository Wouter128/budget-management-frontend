import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [
    MatButton,
    TranslatePipe,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

  private translate = inject(TranslateService);

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("app-lang", lang);
  }
}
