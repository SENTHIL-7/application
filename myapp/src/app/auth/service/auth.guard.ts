import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HeaderService } from 'src/app/shared/service/header.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
    private headerService: HeaderService) { }
  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      const token = this.authService.getToken();
      if (token) {
        this.headerService.setheader('default', 'Authorization', token);
      }
      return true;
    }
    else {
      this.router.navigate(["/signin"]);
      return false;
    }
  }
}
