import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {



  constructor(public dialog: MatDialog) { }

  openConfirmationDialog(message: string, classname?: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: 'Confirmation',
        content: message,
        actiontype: 'Confirmation',
      },
      autoFocus: false
    });
    return dialogRef;
  }
}
