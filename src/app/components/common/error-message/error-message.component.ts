import {Component, input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  messages = input.required<string[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
