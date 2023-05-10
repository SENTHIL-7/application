import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivateChild {
  routeArray = [
    { id: 1, routeName: '/app/employee' },
    { id: 2, routeName: '/app/employee-registration' },
    { id: 3, routeName: '/app/placement/table' },
    { id: 4, routeName: '/app/lazy/pipe' },
  ]
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const index = this.routeArray.findIndex(x => x.routeName == state.url);
    if (index != -1) {
      return true
    }
    else {
      return true
    }
  }
}
