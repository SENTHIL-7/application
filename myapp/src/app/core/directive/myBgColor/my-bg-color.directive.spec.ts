import { Component } from '@angular/core';
import { MyBgColorDirective } from './my-bg-color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';


@Component({
  template: `<button appMyBgColor="red">click</button>`
})
class TestComponent {
}
describe('MyBgColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element:any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyBgColorDirective, TestComponent
      ],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement.querySelectorAll('button');
  });
  it('Should call prevFunc', () => {
    fixture.detectChanges();
  })
  // it('should create an instance', () => {
  //   const directive = new MyBgColorDirective();
  //   expect(directive).toBeTruthy();
  // });
});
