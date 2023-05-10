import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/component/about/about.component';
import { ChangePasswordComponent } from './core/component/change-password/change-password.component';
import { EmployeeRegistrationComponent } from './core/component/employee-registration/employee-registration.component';
import { FormoperationComponent } from './core/component/formoperation/formoperation.component';
import { GalleryComponent } from './core/component/gallery/gallery.component';
import { HomeComponent } from './core/component/home/home.component';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';
import { ObservableComponent } from './core/component/observable/observable.component';
import { FxLayoutComponent } from './core/component/conceptExecutions/directives component/fx-layout/fx-layout.component';
import { CustomPreloadingStrategyService } from './shared/service/custom-preloading-strategy.service';
import { AuthGuard } from './auth/service/auth.guard';
import { AccessGuard } from './auth/service/access.guard';
import { SigninComponent } from './auth/component/signin/signin.component';
import { LoginGuard } from './auth/service/login.guard';
import { CanDeactivateGuard } from './auth/service/can-deactivate.guard';
import { PlacementsComponent } from './core/component/placement/component/placements/placements.component';
import { PlacementTableComponent } from './core/component/placement/component/placement-table/placement-table.component';
import { PlacementFormComponent } from './core/component/placement/component/placement-form/placement-form.component';
import { EmployeeComponent } from './core/component/employee/employee.component';
import { LoginComponent } from './auth/component/login/login.component';
import { EmployeesComponent } from './core/component/employees/employees/employees.component';
import { EmployeeTableComponent } from './core/component/employees/employee-table/employee-table.component';
const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: "full" },
  { path: 'signin', canActivate: [LoginGuard], component: SigninComponent },
  {
    path: 'app', component: NavbarComponent, canActivate: [AuthGuard], canActivateChild: [AccessGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'snackbar', component: AboutComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'employee', component: EmployeeComponent },
      {
        path: 'employees', component: EmployeesComponent, children: [
          { path: '', component: EmployeeTableComponent },
          { path: 'employee-registration', canDeactivate: [CanDeactivateGuard], component: EmployeeRegistrationComponent },
          { path: 'employee-registration/:data/:id', canDeactivate: [CanDeactivateGuard], component: EmployeeRegistrationComponent },
        ]
      },
      { path: 'employee-registration', canDeactivate: [CanDeactivateGuard], component: EmployeeRegistrationComponent },
      { path: 'employee-registration/:data/:id', canDeactivate: [CanDeactivateGuard], component: EmployeeRegistrationComponent },
      {
        path: 'placement', component: PlacementsComponent, children: [
          { path: '', component: PlacementTableComponent },
          { path: 'placement_add', component: PlacementFormComponent },
          { path: ':id/:mode', component: PlacementFormComponent },
        ]
      },
      { path: 'changepwd', component: ChangePasswordComponent },
      { path: 'form', component: FormoperationComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'fx', component: FxLayoutComponent },
      { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule), data: { applyPreload: true } },
      { path: 'demo', component: EmployeeTableComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
