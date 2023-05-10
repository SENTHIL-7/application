import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { PlacementAction } from 'src/app/core/model/placement-action.model';
import { TableColumn } from 'src/app/core/model/table-column.model';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { PlacementData } from 'src/app/shared/service/placement.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})

export class EmployeeTableComponent {
  paramData!: string;
  columns!: TableColumn[];
  actionArr!: PlacementAction[];
  isAction: boolean = true;
  datas: PlacementData[] = [];
  dateColumn!: any[];
  idColumn!: any;
  displayColumn!: any;
  message!: any;

  constructor(
    private dialogservice: DialogService, private authService: AuthService,
    private employeeService: EmployeeService,
    private router: Router) {
  }
  ngOnInit() {
    this.columns = [
      { name: 'id', displayName: 'Id' },
      { name: 'firstName', displayName: 'Name' },
      { name: 'email', displayName: 'Email' },
      { name: 'action', displayName: 'Action' }
    ]
    this.displayColumn = ['id', 'firstName', 'roleId', 'designationId', 'dateOfJoin', 'email', 'action']
    this.actionArr = [
      { name: 'edit', toolTip: 'Edit', method: 'onEdit' },
      { name: 'delete', toolTip: 'delete', method: 'onDelete' },
      { name: 'description', toolTip: 'view', method: 'onView' }
    ];
    this.dateColumn = [
      { name: 'dateOfJoin', displayName: 'Date of Join', dateFormat: 'mediumDate' },
    ]
    this.idColumn = [
      { name: 'roleId', displayName: 'Role', associateTable: 'role' },
      { name: 'designationId', displayName: 'Designation', associateTable: 'designation' }
    ]
    this.authService.message.subscribe(res => this.message = res);
    this.getEmployee();
  }
  getEmployee() {
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.datas = res.response;
    })
  }
  onDelete(element: any) {
    const dialogRef = this.dialogservice.openConfirmationDialog(this.message.DELETE);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.employeeService.deleteEmployee({ id: element.id }).subscribe((res: any) => {
          if (res) {
            const delIndex = this.datas.findIndex(item => item.id === element.id);
            console.log("datas", this.datas);

            console.log('id', delIndex);

            if (delIndex !== -1) {
              this.datas.splice(delIndex, 1);
            }
            this.getEmployee();
          }
        })
      }
    });
  }
  onView(element: any) {
    this.router.navigate(['/app/employees/employee-registration', 'view', element.id])
  }
  onEdit(element: any) {
    this.router.navigate(['/app/employees/employee-registration', 'edit', element.id])
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
