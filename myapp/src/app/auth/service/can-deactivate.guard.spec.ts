import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuard, FormCanDeactivate } from './can-deactivate.guard';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
let value:boolean;
class MockClass implements FormCanDeactivate{
  returnValue!:boolean|Observable<boolean>;
   canDeactivate(): boolean {
      if(value){
        return false;
      }
      else{
        return true;
      }
  }
}
class MockDialogService{
  openConfirmationDialog( ){
    return{
      afterClosed(){
        return of({})
      }
    }
  }
}
class MockAuthService{
  message=new BehaviorSubject<any>({});

}
describe('CanDeactivateGuard', () => {
  let guard: CanDeactivateGuard;
  let mockClass: MockClass;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        CanDeactivateGuard,
        {provide:DialogService,useClass:MockDialogService},
        {provide:AuthService,useClass:MockAuthService},
        MockClass
      ]
    });
    guard = TestBed.inject(CanDeactivateGuard);
    mockClass = TestBed.inject(MockClass);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should call canDeactivate', () => {
   value=true;
   const canDeactivated$=<Observable<boolean>>(guard.canDeactivate(mockClass));
   canDeactivated$.subscribe((canDeactivate)=>{
    expect(canDeactivate).toBeDefined();
   })
  });
  it('should call canDeactivate else part', () => {
   value=false;
   guard.canDeactivate(mockClass)
  });
});
