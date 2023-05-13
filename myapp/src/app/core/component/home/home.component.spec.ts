import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { AuthService } from 'src/app/auth/service/auth.service';

class MockEmployee{

}
class MockDialog{

}
class MockAuth{

}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[
        {provide:EmployeeService,useClass:MockEmployee},
        {provide:DialogService,useClass:MockDialog},
        {provide:AuthService,useClass:MockAuth},
      ],
      imports:[
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
