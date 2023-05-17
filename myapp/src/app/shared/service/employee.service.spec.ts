import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpRoutingService } from './http-routing.service';
import { of } from 'rxjs';
class MockHttpRoutingService{
  getMethod(){
    return of({})
  }
  postMethod(){
    return of({})
  }
}
fdescribe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpRoutingService,useClass:MockHttpRoutingService}
      ],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getRole', () => {
    service.getRole();
    expect(service.getRole).toBeDefined();
  });
  it('should call getDesignation', () => {
    service.getDesignation();
    expect(service.getDesignation).toBeDefined();
  });
  it('should call createEmployee', () => {
    const data={}
    service.createEmployee(data);
    expect(service.createEmployee).toBeDefined();
  });
  it('should call getEmployees', () => {
    service.getEmployees();
    expect(service.getEmployees).toBeDefined();
  });
  it('should call deleteEmployee', () => {
    const data={}
    service.deleteEmployee(data);
    expect(service.deleteEmployee).toBeDefined();
  });
  it('should call getEmployee', () => {
    const data={id:1}
    service.getEmployee(data);
    expect(service.getEmployee).toBeDefined();
  });
  it('should call updateEmployee', () => {
    const data={}
    service.updateEmployee(data);
    expect(service.updateEmployee).toBeDefined();
  });
  it('should call checkEmail', () => {
    const email='senthil@gamil.com';
    const id=2;
    service.checkEmail(email,id);
    expect(service.checkEmail).toBeDefined();
  });
  it('should call checkEmail id is undefined', () => {
    const email='senthil@gamil.com';
    const id=2;
    service.checkEmail(email,undefined);
    expect(service.checkEmail).toBeDefined();
  });
});
