import { TestBed } from '@angular/core/testing';

import { BehaviorSubjectService } from './behavior-subject.service';
import { BehaviorSubject } from 'rxjs';

fdescribe('BehaviorSubjectService', () => {
  let service: BehaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call constructor', () => {
    service.message= new BehaviorSubject<any>({})
  });
});
