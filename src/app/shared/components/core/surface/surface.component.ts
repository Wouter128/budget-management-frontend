import {Component, input} from '@angular/core';

@Component({
  selector: 'app-surface',
  imports: [],
  templateUrl: './surface.component.html',
  styleUrl: './surface.component.scss',
})
export class SurfaceComponent {
  padding = input(true);
  elevated = input(true);
  hoverable = input(true);
}
