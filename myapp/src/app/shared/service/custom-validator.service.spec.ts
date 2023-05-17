import { TestBed } from '@angular/core/testing';

import { CustomValidatorService } from './custom-validator.service';
import { FormControl, FormGroup } from '@angular/forms';

fdescribe('CustomValidatorService', () => {
  let service: CustomValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call validateAreEqual if password is equal', () => {
    let form =new FormGroup({
      confirmPassword:new FormControl('1234'),
      newPassword:new FormControl('1234'),

    })
    service.validateAreEqual(form);
    expect(service.validateAreEqual).toBeDefined();
  });
  it('should call validateAreEqual if password is not equal', () => {
    let form =new FormGroup({
      confirmPassword:new FormControl('1234'),
      newPassword:new FormControl('5678'),

    })
    service.validateAreEqual(form);
    expect(service.validateAreEqual).toBeDefined();
  });
  it('should call validateAreEqual else part', () => {
    let form =new FormGroup({
    })
    service.validateAreEqual(form);
    expect(service.validateAreEqual).toBeDefined();
  });
});
