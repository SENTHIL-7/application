import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { MaterialModule } from '../material/material.module';
import { PageTipComponent } from './component/page-tip/page-tip.component';
import { EmployeeRegistrationComponent } from './component/employee-registration/employee-registration.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
// import { MyBgColorDirective } from './directive/myBgColor/my-bg-color.directive';
// import { MyFxLayoutDirective } from './directive/mgFlexLayout/my-fx-layout.directive';
// import { MyFxLayoutAlignDirective } from './directive/myFlexLayoutAlign/my-fx-layout-align.directive';
// import { MyButtonDirective } from './directive/myButton/my-button.directive';
import { EmployeesComponent } from './component/employees/employees/employees.component';
import { EmployeeTableComponent } from './component/employees/employee-table/employee-table.component';
import { DynTableComponent } from './component/dyn-table/dyn-table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    PageTipComponent,
    EmployeeRegistrationComponent,
    ChangePasswordComponent,
    // MyBgColorDirective,
    // MyFxLayoutDirective,
    // MyFxLayoutAlignDirective,
    // MyButtonDirective,
    EmployeeTableComponent,
    EmployeesComponent,
    DynTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    // NavbarComponent,
    // HomeComponent,
  ]
})
export class CoreModule { }
