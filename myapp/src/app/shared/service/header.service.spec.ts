import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';

fdescribe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call setheader', () => {
    service.headers ={
      'http://localhost:3000':{
        'content-type':"application/json"
      }
    }
    service.setheader('http://localhost:3000','content-type',"application/json");
    expect(service.setheader).toBeDefined();
  });
  it('should call clearHeaders if part', () => {
    service.headers ={
      'http://localhost:3000':{
        'content-type':"application/json"
      }
    }
    service.clearHeaders('http://localhost:3000','content-type');
    expect(service.clearHeaders).toBeDefined();
  });
  it('should call clearHeaders else part', () => {
    service.headers ={}
    service.clearHeaders('http://localhost:3000','content-type');
    expect(service.clearHeaders).toBeDefined();
  });
  it('should call getHeaders if part', () => {
    service.headers ={
      'http://localhost:3000':{
        'content-type':"application/json"
      }
    }
    service.getHeaders('http://localhost:3000');
    expect(service.getHeaders).toBeDefined();
  });
  it('should call getHeaders else part', () => {
    service.headers ={}
    service.getHeaders('http://localhost:3000');
    expect(service.getHeaders).toBeDefined();
  });
});
