import {Component, inject, OnInit} from '@angular/core';
import {TitleComponent} from '../../shared/components/common/title/title.component';
import {AuthService} from '../../shared/services/auth.service';
import {MatButton} from '@angular/material/button';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {SurfaceComponent} from '../../shared/components/core/surface/surface.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    TitleComponent,
    MatButton,
    TranslatePipe,
    SurfaceComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  private translate = inject(TranslateService);

  public username: string | undefined;
  public isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.getUsername().then(name => this.username = name);
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("app-lang", lang);
  }
}
