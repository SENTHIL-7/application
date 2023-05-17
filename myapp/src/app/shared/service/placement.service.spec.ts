import { TestBed } from '@angular/core/testing';

import { PlacementService } from './placement.service';
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
fdescribe('PlacementService', () => {
  let service: PlacementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:HttpRoutingService,useClass:MockHttpRoutingService}
      ],
    });
    service = TestBed.inject(PlacementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getUsers', () => {
    service.getUsers();
    expect(service.getUsers).toBeDefined();
  });
  it('should call getUser', () => {
    const id ='1';
    service.getUser(id);
    expect(service.getUser).toBeDefined();
  });
  it('should call postUser', () => {
    const value =['a','b'];
    service.postUser(value);
    expect(service.postUser).toBeDefined();
  });
});
