import {Component, input} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  public title = input.required<string>();
  public subtitle = input.required<string>();
}
