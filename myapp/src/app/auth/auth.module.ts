import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    SigninComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class AuthModule { }
