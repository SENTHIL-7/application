import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './component/dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    DialogComponent,
    SnackbarComponent
  ]
})
export class SharedModule { }
