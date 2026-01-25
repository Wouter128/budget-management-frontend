import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  private baseUrl: string = `http://localhost:8081/budget-period`;
  private readonly keycloak = inject(Keycloak);

  public message: string = "Nothing to show";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    this.http.get(this.baseUrl + "/hello", {responseType: "text"})
      .subscribe(response => this.message = response);
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout({redirectUri: window.location.origin});
  }
}
