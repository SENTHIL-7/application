import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlacementData, PlacementService } from 'src/app/shared/service/placement.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { mergeMap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SnackType } from 'src/app/core/model/snack-bar.model';

@Component({
  selector: 'app-placement-form',
  templateUrl: './placement-form.component.html',
  styleUrls: ['./placement-form.component.scss'],
})
export class PlacementFormComponent implements OnInit, AfterViewInit {
  message!: any;
  placementForm !: FormGroup;
  placementData!: PlacementData;
  name!: any;
  user!: {
    id: string,
    mode: string
  }
  constructor(private router: Router,
    private route: ActivatedRoute,
    private placementservice: PlacementService,
    private snackbarService: SnackbarService,
    private authService: AuthService,
  ) { }
  jopTitle = [
    {
      id: 1,
      name: 'Frontend Developer'
    },
    {
      id: 2,
      name: 'Backend Developer'
    }
  ];
  statusValue = [
    { isActive: 'Active', name: "Active" },
    { isActive: 'Inactive', name: "Inactive" }
  ]
  ngOnInit() {
    this.placementForm = new FormGroup({
      name: new FormControl(this.placementData && this.placementData?.name ? this.placementData?.name : null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      jopTitleId: new FormControl(this.placementData && this.placementData?.jopTitleId ? this.placementData?.jopTitleId : null, Validators.required),
      startDate: new FormControl(this.placementData && this.placementData?.startDate ? this.placementData?.startDate : null, Validators.required),
      endDate: new FormControl(this.placementData && this.placementData?.endDate ? this.placementData?.endDate : null, Validators.required)
    }
    );
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        mode: data['mode']
      }
    })
    if (this.user.id) {
      this.placementservice.getUser(this.user.id).subscribe({
        next: (data: any) => {
          this.placementData = data;
          this.placementForm = new FormGroup({
            name: new FormControl(this.placementData && this.placementData?.name ? this.placementData?.name : null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
            jopTitleId: new FormControl(this.placementData && this.placementData?.jopTitleId ? this.placementData?.jopTitleId : null, Validators.required),
            startDate: new FormControl(this.placementData && this.placementData?.startDate ? this.placementData?.startDate : null, Validators.required),
            endDate: new FormControl(this.placementData && this.placementData?.endDate ? this.placementData?.endDate : null, Validators.required)
          }
          );
          if (this.user && this.user.mode == 'view' && this.user.id) {
            this.placementForm.disable();
          }
          if (this.user && this.user.mode == 'edit' && this.user.id) {
            this.placementForm.addControl("status", new FormControl(this.placementData && this.placementData.status ? this.placementData.status : null, Validators.required));
            this.placementForm.get('name')?.disable()
            this.placementForm.get('jopTitleId')?.disable();
            let datePipe = new DatePipe('en-US');
            let today = new Date()
            var enddateString = String(datePipe.transform(this.placementForm.get('endDate')?.value, 'yyyy-MM-dd'))
            var todayString = String(datePipe.transform(today.toString(), 'yyyy-MM-dd'))
            // patchValue
            if (todayString <= enddateString) {
              this.placementForm.patchValue({
                status: 'Active'
              })
            }
            else {
              this.placementForm.patchValue({
                status: 'Inactive'
              })
            }
          }
        },
        error: (err) => {
          console.log('err', err)
        }
      }
      )
    }
    this.authService.message.subscribe(res => this.message = res);
  }
  ngAfterViewInit(): void {
  }
  onSubmit(form: FormGroup) {
    // if (form.valid) {
    //   if (this.placementData) {
    //     this.placementservice.getUsers().pipe(mergeMap((data: any) => {
    //       let tem = data.find((x: any) => x.id == this.placementData.id);
    //       const mergedData = { ...tem, ...this.placementForm.value };
    //       return this.placementservice.updateUser(this.placementData.id, mergedData)
    //     })).subscribe();
    //   }
    //   else {
    //     this.placementservice.postUser(form.value).subscribe();
    //   }
    //   let snackBarRef = this.snackbarService.openSnackbar({
    //     message: this.message.DATA_SAVE,
    //     snackType: SnackType.Success
    //   }
    //   );
    //   this.router.navigate(['app', 'placement'])
    // }
  }
}
