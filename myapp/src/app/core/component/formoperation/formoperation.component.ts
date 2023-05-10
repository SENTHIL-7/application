import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacementService } from 'src/app/shared/service/placement.service';

@Component({
  selector: 'app-formoperation',
  templateUrl: './formoperation.component.html',
  styleUrls: ['./formoperation.component.scss']
})
export class FormoperationComponent {
  constructor(private router: Router,
    private placementservice: PlacementService) { }
  placementForm !: FormGroup;
  isExternal: boolean = false;
  ngOnInit() {
    this.placementForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      jopTitleId: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      email: new FormControl(null)
    }
    );
  }
  onExternal() {
    this.isExternal = !this.isExternal;
    if (this.isExternal) {
      this.placementForm.get('email')?.setValidators([Validators.required, Validators.email])
    }
    else {
      this.placementForm.get('email')?.reset();
      this.placementForm.get('email')?.clearValidators();
      this.placementForm.get('email')?.updateValueAndValidity()
    }
  }
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
    { isActive: true, name: "Active" },
    { isActive: false, name: "Inactive" }
  ]
  onSubmit(form: FormGroup) {
    console.log(form)
  }
  onEdit() {
    this.placementForm.addControl("status", new FormControl(null, Validators.required));
    this.placementForm.get('name')?.disable()
  }
  onview() {
    this.placementForm.disable();
  }
  onBack() {
    this.router.navigateByUrl("/app/placement")
  }
}
