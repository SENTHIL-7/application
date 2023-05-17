import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableComponent } from './employee-table.component';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { AuthService } from 'src/app/auth/service/auth.service';
class MockEmployeeService{

}
class MockRouter{

}
class MockDialogService{

}
class MockAuthService{

}
describe('EmployeeTableComponent', () => {
  let component: EmployeeTableComponent;
  let fixture: ComponentFixture<EmployeeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTableComponent ],
      providers:[
        {provide:EmployeeService,useClass:MockEmployeeService},
        {provide:Router,useClass:MockRouter},
        {provide:DialogService,useClass:MockDialogService},
        {provide:AuthService,useClass:MockAuthService},
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
});
