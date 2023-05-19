import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackType } from 'src/app/core/model/snack-bar.model';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:MatSnackBar ,useValue:{openFromComponent:()=>{}}}
      ],
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call openSnackbar', () => {
    let input ={
      snackType: SnackType.Success,
      message:'test'
    }
    service.openSnackbar(input);
    expect(service.openSnackbar).toBeDefined();
  });
  it('should call openSnackbar with panelClass', () => {
    let input ={
      snackType: SnackType.Success,
      message:'test',
      panelClass:'sampleclass'
    }
    service.openSnackbar(input);
    expect(service.openSnackbar).toBeDefined();
  });
});
