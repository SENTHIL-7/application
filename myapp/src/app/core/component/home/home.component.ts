import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from '../../service/behavior Subject/behavior-subject.service';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { PlacementAction } from '../../model/placement-action.model';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { AuthService } from 'src/app/auth/service/auth.service';

export interface Columns {
  columnDef: string,
  header: string,
  type: string,
  sort: boolean
}
export interface Data {
  datas: any,
  columns: Columns[],
  actions: PlacementAction[]
}
export interface ActionMethod {
  id: number,
  method: string,

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private behaviorsubject: BehaviorSubjectService,
    private employeeService: EmployeeService,
    private router: Router,
    private dialogservice: DialogService,
    private authService: AuthService) { }
  color = 'blue';
  data !: Data;
  columns!: Columns[];
  actionArr!: PlacementAction[];
  message!: any;
  ngOnInit() {
    this.authService.message.subscribe(res => this.message = res);
    this.columns = [
      { columnDef: 'id', header: 'ID', type: 'Text', sort: true },
      { columnDef: 'firstName', header: 'First Name', type: 'Text', sort: true },
      { columnDef: 'email', header: 'Email', type: 'Text', sort: true },
      { columnDef: 'dateOfBirth', header: 'Date Of Birth', type: 'Date', sort: true },
      { columnDef: 'action', header: 'Action', type: 'mat-icon', sort: false }
    ];
    this.actionArr = [
      { name: 'edit', toolTip: 'Edit', method: 'onEdit' },
      { name: 'delete', toolTip: 'delete', method: 'onDelete' },
      { name: 'description', toolTip: 'view', method: 'onView' }
    ];

    this.employeeService.getEmployees().subscribe((res: any) => {
      this.data = {
        datas: res.response,
        columns: this.columns,
        actions: this.actionArr
      }
    })
  }
  getEmployee() {
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.data = {
        datas: res.response,
        columns: this.columns,
        actions: this.actionArr
      }
    })
  }
  onEdit(element: any) {
    this.router.navigate(['/app/employees/employee-registration', 'edit', element.id])

  }
  onDelete(element: any) {
    const dialogRef = this.dialogservice.openConfirmationDialog(this.message.DELETE);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.employeeService.deleteEmployee({ id: element.id }).subscribe((res: any) => {
          if (res) {
            // const delIndex = this.data.datas.findIndex((item: any) => item.id === element.id);

            // if (delIndex !== -1) {
            //   this.data.datas.splice(delIndex, 1);
            // }
            this.getEmployee();
          }
        })
      }
    });
  }
  onView(element: any) {
    this.router.navigate(['/app/employees/employee-registration', 'view', element.id])
  }
  tableAction(event: any) {
    switch (event.method) {
      case 'onEdit': this.onEdit(event.element); break;
      case 'onDelete': this.onDelete(event.element); break;
      case 'onView': this.onView(event.element); break;
      default: console.log("invalid action")
    }

  }


}



