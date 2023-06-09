import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AsyncValidatorService } from './async-validator.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { of, throwError } from 'rxjs';
let isUserEmail=true;
export class MockEmployeeService{
  checkEmail(email: string,id:number){
    if(isUserEmail){
      return of({
        emailExist:true
      })
    }
    else{
      return of({emailExist:false})
    }
    
  }
}
describe('AsyncValidatorService', () => {
  let service: AsyncValidatorService;
  let employeeService:EmployeeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:EmployeeService,useClass:MockEmployeeService},
      ]
    });
    service = TestBed.inject(AsyncValidatorService);
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call asyncEmailValidation', fakeAsync(() => {
    isUserEmail=true;
    const control= new FormGroup({
      'email': new FormControl('senthil7@gmail.com',[Validators.required],AsyncValidatorService.asyncEmailValidation(employeeService,1))
    });
    tick(500);
    AsyncValidatorService.asyncEmailValidation(employeeService,1);
    expect( AsyncValidatorService.asyncEmailValidation).toBeDefined();
  }));
  it('should call asyncEmailValidation not exist', fakeAsync(() => {
    isUserEmail=false;
    const control= new FormGroup({
      'email': new FormControl('apsenthilkumar2001@gmail.com',[Validators.required],AsyncValidatorService.asyncEmailValidation(employeeService,1))
    });
    tick(500);
    AsyncValidatorService.asyncEmailValidation(employeeService,1);
    expect( AsyncValidatorService.asyncEmailValidation).toBeDefined();
  }));
  // it('should testing the check mail', fakeAsync(() => {
  //   isUserEmail=true;
  //   employeeService.checkEmail("apsenthilkumar2001@gmail.com",1)
  // }));
  // it('should testing the check mail else ', fakeAsync(() => {
  //   isUserEmail=false;
  //   employeeService.checkEmail("apsenthilkumar2001@gmail.com",1)
  // }));
  // it('should call asyncEmailValidation exist and id undefine', fakeAsync(() => {
  //   isUserEmail=true;
  //   const control= new FormGroup({
  //     'email': new FormControl('apsenthilkumar2001@gmail.com',[Validators.required],AsyncValidatorService.asyncEmailValidation(employeeService))
  //   });
  //   tick(500);
  //   AsyncValidatorService.asyncEmailValidation(employeeService);
  //   expect( AsyncValidatorService.asyncEmailValidation).toBeDefined();
  // }));
  // it('should call asyncEmailValidation not exist and id undefine', fakeAsync(() => {
  //   isUserEmail=false;
  //   const control= new FormGroup({
  //     'email': new FormControl('apsenthilkumar2001@gmail.com',[Validators.required],AsyncValidatorService.asyncEmailValidation(employeeService))
  //   });
  //   tick(500);
  //   AsyncValidatorService.asyncEmailValidation(employeeService);
  //   expect( AsyncValidatorService.asyncEmailValidation).toBeDefined();
  // }));
});
