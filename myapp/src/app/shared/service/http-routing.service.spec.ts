import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpRoutingService } from './http-routing.service';
import { of } from 'rxjs';
class MockHttpClient{
  get(){
    return of({})
  }
  post(){
    return of({})
  }
}
fdescribe('HttpRoutingService', () => {
  let service: HttpRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpClient,useClass:MockHttpClient}
      ],
    });
    service = TestBed.inject(HttpRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getMethod', () => {
    const url='http://localhost:3000/v1/getEmployees'
    service.getMethod(url);
    expect(service.getMethod).toBeDefined();
  });
  it('should call getJson', () => {
    const url='http://localhost:3000/v1/getEmployees'
    service.getJson(url);
    expect(service.getJson).toBeDefined();
  });
  it('should call postMethod', () => {
    const url='http://localhost:3000/v1/getEmployees';
    const data=''
    service.postMethod(url,data);
    expect(service.postMethod).toBeDefined();
  });
});
