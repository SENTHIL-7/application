import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<any>(null);
  message = new BehaviorSubject<any>(null);
  constructor(private httpRoutingService: HttpRoutingService,
    private router: Router) { }

  getMessage() {
    this.httpRoutingService.getJson('message.json').subscribe(res => {
      this.message.next(res);
    })
  }
  signIn(data: any) {
    return this.httpRoutingService.postMethod('login', data).pipe(map((res: any) => {
      if (res && res['user'] && res['token']) {
        this.user.next(res['user']);
        sessionStorage.setItem('currentUserToken', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
      }
      return res;
    }), catchError(err => {
      return throwError(err)
    }));
  }
  getToken(): string {
    let token;
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || '');
    if (currentUser) {
      token = currentUser.token;
    }
    return token;
  }

  getRefreshToken() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || '');
    const refreshToken = currentUser ? currentUser.refreshToken : null;
    return this.httpRoutingService.postMethod('refreshToken', { refreshToken });
  }
  isAuthenticated(): boolean {
    let token;
    const data = sessionStorage.getItem('currentUserToken');
    if (data) {
      // Get the currnt user details from the local storage.
      const currentUser = JSON.parse(data);
      if (currentUser && currentUser.token) {
        // To check whether the current user is authenticated or not in online.
        token = currentUser.token;
        return token != null;
      }
    }
    return false
  }
  logout() {
    sessionStorage.removeItem('currentUserToken')
    return true;
  }
}