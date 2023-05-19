import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer, Subscriber, filter } from 'rxjs';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { AuthService } from './auth.service';
export abstract class FormCanDeactivate {
  abstract canDeactivate(): boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<unknown> {
  constructor(private dialogService: DialogService, private authService: AuthService) {
    this.authService.message.subscribe(res => this.message = res)
  }
  message!: any;
  canDeactivate(
    component: FormCanDeactivate,
    currentRoute?: ActivatedRouteSnapshot,
    currentState?: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component&&!component.canDeactivate()) {
      return new Observable((observer: Observer<boolean>) => {
        let diologRef = this.dialogService.openConfirmationDialog(this.message.DATA_UNSAVED);
        diologRef.afterClosed().pipe(filter((result: boolean) => {
          return result;
        })).subscribe(res => {
          observer.next(true);
          observer.complete()
        })
      })
    }
    return true
  }
}