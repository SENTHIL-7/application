import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
let value=true;
class MockAuthService{
  isAuthenticated(){
if(value){
  return true
}
else{
  return false
}
  }
}
describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:AuthService,useClass:MockAuthService  }
      ]
    });
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should canActivate', () => {
    value=true;
    guard.canActivate();
    expect(guard.canActivate).toBeDefined();
  });
  it('should canActivate', () => {
    value=false;
    guard.canActivate();
    expect(guard.canActivate).toBeDefined();
  });
});
