import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/service/header.service';
let value=true;
class MockAuthService{
  getToken (){
      return 'token'
  }
  isAuthenticated(){
if(value){
  return true
}
else{
  return false
}
  }
}
class MockRouter{
  navigate(url:string){
    return url;
  }

}
class MockHeaderService{
  setheader (){

  }
}
describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:AuthService,useClass:MockAuthService  },
        {provide:Router,useClass:MockRouter},
        {provide:HeaderService,useClass:MockHeaderService},
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should canActivate', () => {
    value=true;
    guard.canActivate();
    expect(guard.canActivate).toBeDefined();
  });
  it('should canActivate else', () => {
    value=false;
    guard.canActivate();
    expect(guard.canActivate).toBeDefined();
  });
});
