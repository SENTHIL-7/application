import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { HeaderService } from './shared/service/header.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  apiUrl = environment.apiUrl;
  constructor(private authService: AuthService,
    private headerService: HeaderService) { }
  ngOnInit(): void {
    this.authService.getMessage();
    this.headerService.setheader(this.apiUrl + 'v1/login', 'content-type', 'application/json')
  }
}
