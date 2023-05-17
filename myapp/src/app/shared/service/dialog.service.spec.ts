import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../component/dialog/dialog.component';
class MockMatDialog{}
fdescribe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:MatDialog ,useValue:{open:()=>{}}}
      ],
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should openConfirmationDialog', () => {
    service.openConfirmationDialog('a','b');
    expect(service.openConfirmationDialog).toBeDefined();
  });
});
