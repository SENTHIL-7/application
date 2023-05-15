import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SigninComponent } from './component/signin/signin.component';

@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class AuthModule { }
