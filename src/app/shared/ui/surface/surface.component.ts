import {Component, input} from '@angular/core';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-surface',
  imports: [
    MatCard
  ],
  templateUrl: './surface.component.html',
  styleUrl: './surface.component.scss',
})
export class SurfaceComponent {
  padding = input(true);
  elevated = input(true);
  hoverable = input(true);
}
