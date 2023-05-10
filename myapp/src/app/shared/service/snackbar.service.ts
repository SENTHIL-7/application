import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBar, SnackType } from 'src/app/core/model/snack-bar.model';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) { }
  config = [
    { type: SnackType.Default, panelClass: 'snack-bar-default', icon: '' },
    { type: SnackType.Success, panelClass: 'snack-bar-success', icon: 'check' },
    { type: SnackType.Warning, panelClass: 'snack-bar-warning', icon: 'warning' },
    { type: SnackType.Error, panelClass: 'snack-bar-error', icon: 'error' },
    { type: SnackType.Info, panelClass: 'snack-bar-info', icon: 'info' },
  ];
  openSnackbar(input: SnackBar) {
    let property = this.config.find((x) => {
      return x.type == input.snackType;
    })
    return this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        icon: property?.icon,
        message: input.message
      },
      panelClass: input.panelClass ? input.panelClass : property?.panelClass ? property.panelClass : '',
      duration: input.duration || 10000
    });
  }
}
