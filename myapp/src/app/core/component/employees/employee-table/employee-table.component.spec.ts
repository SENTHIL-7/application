import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableComponent } from './employee-table.component';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { DynTableComponent } from '../../dyn-table/dyn-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BehaviorSubject, of } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class MockEmployeeService{
  getEmployees(){
    return of({})
  }
  deleteEmployee(id:any){
    return of({})
  }
}
class MockRouter{
  navigate(url:string){
    return url
  }
}
class MockDialogService{
  openConfirmationDialog (){
    return {afterClosed (){
      return of({response:'a'})
    }}
   
  }
}
class MockAuthService{
  message=new BehaviorSubject<any>('')
}
describe('EmployeeTableComponent', () => {
  let component: EmployeeTableComponent;
  let fixture: ComponentFixture<EmployeeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTableComponent,DynTableComponent ],
      providers:[
        {provide:EmployeeService,useClass:MockEmployeeService},
        {provide:Router,useClass:MockRouter},
        {provide:DialogService,useClass:MockDialogService},
        {provide:AuthService,useClass:MockAuthService},
      ],
      imports:[
        MatPaginatorModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        MatTableModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getEmployee', () => {
    component.getEmployee();
    expect(component.getEmployee).toBeDefined();
  });
  it('should call onEdit', () => {
    component.onEdit('a');
    expect(component.onEdit).toBeDefined();
  });
  it('should call onView', () => {
    component.onView('a');
    expect(component.onView).toBeDefined();
  });
  it('should call tableAction onEdit', () => {
    const event={
      method:'onEdit',
      element:'a'
    }
    component.tableAction(event);
    expect(component.tableAction).toBeDefined();
  });
  it('should call tableAction onDelete', () => {
    const event={
      method:'onDelete',
      element:'a'
    }
    component.tableAction(event);
    expect(component.tableAction).toBeDefined();
  });
  it('should call tableAction onView', () => {
    const event={
      method:'onView',
      element:'a'
    }
    component.tableAction(event);
    expect(component.tableAction).toBeDefined();
  });
  it('should call tableAction default', () => {
    const event={
      method:'',
      element:'a'
    }
    component.tableAction(event);
    expect(component.tableAction).toBeDefined();
  });
  
  it('should call onDelete', () => {
    component.onDelete('a');
    expect(component.onDelete).toBeDefined();
  });

});
