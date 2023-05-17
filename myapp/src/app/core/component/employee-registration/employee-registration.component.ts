import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { FormCanDeactivate } from 'src/app/auth/service/can-deactivate.guard';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';
import { SnackType } from '../../model/snack-bar.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncValidatorService } from '../../service/async-validator.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit, FormCanDeactivate {
  constructor(private authService: AuthService,
    private employeeService: EmployeeService,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute,
    private router: Router) { }
  employeeRegistrationForm !: FormGroup;
  todaydate = new Date();
  message!: any;
  role: any;
  designation: any;
  employeeDetails: any;
  paramData = {
    id: '',
    data: ''
  };
  loader!: boolean;
  update = false;
  value!: any;
  ngOnInit() {
    this.authService.message.subscribe((res: any) => {
      this.message = res;
    })

    this.employeeService.getRole().subscribe((res: any) => {
      this.role = res.role;
    })
    this.employeeService.getDesignation().subscribe((res: any) => {
      this.designation = res.designation;
    })
    this.route.params.subscribe((res: any) => {
      if (res && res.id && res.data) {
        this.paramData = {
          id: res.id,
          data: res.data
        }
        this.update = true;
        this.employeeService.getEmployee({ id: +this.paramData.id }).subscribe((res: any) => {
          this.employeeDetails = res.employeeDetails;
          this.formInitial();
        })
      };
      this.formInitial();
    })
  }
  formInitial() {
    this.employeeRegistrationForm = new FormGroup({
      firstName: new FormControl(this.employeeDetails && this.employeeDetails.firstName ? this.employeeDetails.firstName : null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl(this.employeeDetails && this.employeeDetails.lastName ? this.employeeDetails.lastName : null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl(this.employeeDetails && this.employeeDetails.email ? this.employeeDetails.email : null, [Validators.required, Validators.email], this.employeeDetails ? AsyncValidatorService.asyncEmailValidation(this.employeeService, this.employeeDetails.id) : AsyncValidatorService.asyncEmailValidation(this.employeeService)),
      alternateEmail: new FormControl(this.employeeDetails && this.employeeDetails.alternateEmail ? this.employeeDetails.alternateEmail : null),
      dateOfJoin: new FormControl(this.employeeDetails && this.employeeDetails.dateOfJoin ? this.employeeDetails.dateOfJoin : null, Validators.required),
      dateOfBirth: new FormControl(this.employeeDetails && this.employeeDetails.dateOfBirth ? this.employeeDetails.dateOfBirth : null, Validators.required),
      designationId: new FormControl(this.employeeDetails && this.employeeDetails.designationId ? this.employeeDetails.designationId : null, Validators.required),
      roleId: new FormControl(this.employeeDetails && this.employeeDetails.roleId ? this.employeeDetails.roleId : null, Validators.required),
      password: new FormControl(null),
      contacts: new FormArray([])
    }
    );
    this.addContact();
    if (this.paramData.data) {
      if (this.paramData.data === 'view') {
        this.employeeRegistrationForm.disable();
      }
      else {
        this.employeeRegistrationForm.get('firstName')?.disable();
        this.employeeRegistrationForm.get('lastName')?.disable();
        this.employeeRegistrationForm.get('password')?.disable();
        this.employeeRegistrationForm.get('contacts')?.disable();
      }
    }
  }
  addContact() {
    (this.employeeRegistrationForm.get('contacts') as FormArray).push(new FormGroup({
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      pincode: new FormControl(null, Validators.required)
    }));
    this.defaultValue()
  }
  defaultValue() {
    this.employeeRegistrationForm.get('contacts')?.setValue(
      [{
        address: 'veerapandianpattinam',
        city: 'tiruchendur',
        state: 'tamlnadu',
        pincode: 628216
      }]
    )
  }
  removeContact(i: number) {
    (this.employeeRegistrationForm.get('contacts') as FormArray).removeAt(i)
  }
  getContacts() {
    return (this.employeeRegistrationForm.get('contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('contacts').controls[i].controls;
  }
  onSubmit() {
    if (this.employeeRegistrationForm.valid) {
      if (!this.update) {
        // this.loader = true;
        this.employeeService.createEmployee(this.employeeRegistrationForm.value).subscribe((res: any) => {
          // this.loader = false;
          if (res) {
            console.log('res :', res);

            this.employeeRegistrationForm.reset();
            this.snackbarService.openSnackbar({
              message: this.message.DATA_SAVE,
              snackType: SnackType.Success,
            })
          }
        })
      }
      else {
        // this.loader = true;
        this.employeeRegistrationForm.value.id = +this.paramData.id;
        this.employeeService.updateEmployee(this.employeeRegistrationForm.value).subscribe((res: any) => {
          // this.loader = false;
          console.log('outer employeeDetails', res.employeeDetails);
          if (res) {
            console.log('employeeDetails', res.employeeDetails);
            this.employeeRegistrationForm.markAsPristine();
            this.snackbarService.openSnackbar({
              snackType: SnackType.Success,
              message: this.message.DATA_UPDATE
            })
            this.router.navigate(['/app/employees'])
          }
        })

      }
    }
  }
  onReset() {
    this.employeeRegistrationForm.reset();
  }
  canDeactivate() {
    return this.employeeRegistrationForm ? !this.employeeRegistrationForm.dirty : true;
  }

}


