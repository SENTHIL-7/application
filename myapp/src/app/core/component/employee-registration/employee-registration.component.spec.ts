import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationComponent } from './employee-registration.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesComponent } from '../employees/employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
let isView=false;
let global = false;
let isUpdate=false;
class MockAuth{
  message =new BehaviorSubject<any>({})
}
class MockEmployeeService{
  getRole(){
    return of({})
  }
  getDesignation(){
    return of({})
  }
  getEmployee(){
       return of({})
  }
  createEmployee(){
    if(global){
      if(!isUpdate){
        return of({})
      }
      else{
        return throwError({error:{error:'error'}})
      }
     
    }
    else{
      return throwError({error:{error:'error'}})
    }
  }
  updateEmployee (){
    if(global){
      if(isUpdate){
        return of({})
      }
      else{
        return throwError({error:{error:'error'}})
      }
     
    }
    else{
      return throwError({error:{error:'error'}})
    }
  }
}
class MockSnackbar{
  openSnackbar(){

  }
}
class MockRouter{
  navigate(url:string){
    return url ;
  }
}
fdescribe('EmployeeRegistrationComponent', () => {
  let component: EmployeeRegistrationComponent;
  let fixture: ComponentFixture<EmployeeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRegistrationComponent ],
      providers:[
        {provide:AuthService,useClass:MockAuth},
        {provide:EmployeeService,useClass:MockEmployeeService},
        {provide:SnackbarService,useClass:MockSnackbar},
        {provide:Router,useClass:MockRouter},
        { provide: ActivatedRoute, useValue: { params: of({ data: isView ? 'view' : 'edit', id: '23' }) } }
      ],
      imports: [
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(
          [
            {path: 'app/employees',component: EmployeesComponent}
          ]
        )
      ],
    
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should data is edit', () => {
    component.paramData.data='edit';
    isView=false;
    
  });
 
  it('should data is view', () => {
    component.paramData.data='view';
    isView=true;
     
  });

  it('should  call removeContact()', () => {
    component.removeContact(1);
  });
    
  it('should call onSubmit in create employyee', () => {
     global=true;
     component.update=false;
     isUpdate=false;
     component.employeeRegistrationForm = new FormGroup({
      firstName: new FormControl('senthil'),
      lastName: new FormControl('p'),
      email: new FormControl('senthil@gmail.com'),
      alternateEmail: new FormControl('senthil@gmail.com'),
      dateOfJoin: new FormControl('2023-01-01 04:00:00'),
      dateOfBirth: new FormControl('2002-09-09 04:00:00'),
      designationId: new FormControl(1),
      roleId: new FormControl(1),
      password:new FormControl(null),
      contacts:new FormArray([
        (new FormGroup({
          address: new FormControl('ddd'),
          city:new FormControl('eee'),
          state:new FormControl('fff'),
          pincode:new FormControl('ggg')
        }))
     
      ])
    })
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();

  });
  it('should call onSubmit in update employee', () => {
     global=true;
     component.update=true;
     isUpdate=true;
     component.employeeRegistrationForm = new FormGroup({
      firstName: new FormControl('senthil'),
      lastName: new FormControl('p'),
      email: new FormControl('senthil@gmail.com'),
      alternateEmail: new FormControl('senthil@gmail.com'),
      dateOfJoin: new FormControl('2023-01-01 04:00:00'),
      dateOfBirth: new FormControl('2002-09-09 04:00:00'),
      designationId: new FormControl(1),
      roleId: new FormControl(1),
      password:new FormControl(null),
      contacts:new FormArray([
        (new FormGroup({
          address: new FormControl('ddd'),
          city:new FormControl('eee'),
          state:new FormControl('fff'),
          pincode:new FormControl('ggg')
        }))
     
      ])
    })
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();
  });
  it('should call onReset()', () => {
    component.onReset();
    expect(component.onReset).toBeDefined();
 });
  it('should call  canDeactivate()', () => {
    component.canDeactivate();
    expect(component.canDeactivate).toBeDefined();
 });
  it('should call  canDeactivate()', () => {
    component.canDeactivate();
    expect(component.canDeactivate).toBeDefined();
 });
  // it('should route is false', () => {
  //   isRoute=false;
  //   component.employeeRegistrationForm = new FormGroup({
  //     firstName: new FormControl('senthil'),
  //     lastName: new FormControl('p'),
  //     email: new FormControl('senthil@gmail.com'),
  //     alternateEmail: new FormControl('senthil@gmail.com'),
  //     dateOfJoin: new FormControl('2023-01-01 04:00:00'),
  //     dateOfBirth: new FormControl('2002-09-09 04:00:00'),
  //     designationId: new FormControl(1),
  //     roleId: new FormControl(1),
  //     password:new FormControl(null),
  //     contacts:new FormArray([])
  //   })
  // });
  // it('should route is true', () => {
  //   isRoute=true;
  //   component.employeeRegistrationForm = new FormGroup({
  //     firstName: new FormControl('senthil'),
  //     lastName: new FormControl('p'),
  //     email: new FormControl('senthil@gmail.com'),
  //     alternateEmail: new FormControl('senthil@gmail.com'),
  //     dateOfJoin: new FormControl('2023-01-01 04:00:00'),
  //     dateOfBirth: new FormControl('2002-09-09 04:00:00'),
  //     designationId: new FormControl(1),
  //     roleId: new FormControl(1),
  //     password:new FormControl(null),
  //     contacts:new FormArray([])
  //   })
   
  // });
});
