import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { MaterialModule } from '../material/material.module';
import { PageTipComponent } from './component/page-tip/page-tip.component';
import { EmployeeRegistrationComponent } from './component/employee-registration/employee-registration.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { TableComponent } from './component/table/table.component';
import { FormoperationComponent } from './component/formoperation/formoperation.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ObservableComponent } from './component/observable/observable.component';
import { MyBgColorDirective } from './directive/myBgColor/my-bg-color.directive';
import { MyFxLayoutDirective } from './directive/mgFlexLayout/my-fx-layout.directive';
import { MyFxLayoutAlignDirective } from './directive/myFlexLayoutAlign/my-fx-layout-align.directive';
import { FxLayoutComponent } from './component/conceptExecutions/directives component/fx-layout/fx-layout.component';
import { MyButtonDirective } from './directive/myButton/my-button.directive';
import { PlacementTableComponent } from './component/placement/component/placement-table/placement-table.component';
import { PlacementsComponent } from './component/placement/component/placements/placements.component';
import { PlacementFormComponent } from './component/placement/component/placement-form/placement-form.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { DynamicTableComponent } from './component/dynamic-table/dynamic-table.component';
import { EmployeesComponent } from './component/employees/employees/employees.component';
import { EmployeeTableComponent } from './component/employees/employee-table/employee-table.component';
import { DynTableComponent } from './component/dyn-table/dyn-table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    PageTipComponent,
    EmployeeRegistrationComponent,
    ChangePasswordComponent,
    TableComponent,
    FormoperationComponent,
    NotFoundComponent,
    ObservableComponent,
    MyBgColorDirective,
    MyFxLayoutDirective,
    FxLayoutComponent,
    MyFxLayoutAlignDirective,
    MyButtonDirective,
    PlacementTableComponent,
    PlacementsComponent,
    PlacementFormComponent,
    EmployeeComponent,
    DynamicTableComponent,
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
