import { Component, DoCheck, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { EmployeeService } from 'src/app/shared/service/employee.service';
export interface EmployeeForm {
  id: number,
  designationId: number,
  roleId: number,
  firstName: string,
  lastName: string,
  email: string,
  alternateEmail: string,
  dateOfJion: any,
  dateOfBirth: any,
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
}
)

export class EmployeeComponent implements OnInit {
  data!: any;
  message!: any;
  ELEMENT_DATA!: EmployeeForm[];
  constructor(
    private dialogservice: DialogService, private authService: AuthService,
    private employeeService: EmployeeService,
    private router: Router) {
  }

  title = "employee";
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,";
  actionArray = [{ lable: "Active Employee", value: "Active" }, { lable: "Inactive Employee", value: "Inactive" }];
  displayedColumns: string[] = ["id", "firstName", "roleId", "designationId", "email", 'action'];
  dataSource = new MatTableDataSource<EmployeeForm>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.data = {
      columns: this.columns,
      data: ''
    }
    this.authService.message.subscribe(res => this.message = res);
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.ELEMENT_DATA = res.response;
      this.data.datas = res.response;
      this.dataSource = new MatTableDataSource<EmployeeForm>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEmit(event: any) {
    console.log("onEmit :", event)
    const filterValue = this.ELEMENT_DATA.filter((item: any) => item.status === event.value);
    this.dataSource = new MatTableDataSource<EmployeeForm>(filterValue);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onDelete(element: any) {
    const dialogRef = this.dialogservice.openConfirmationDialog(this.message.DELETE);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.employeeService.deleteEmployee({ id: element.id }).subscribe((res: any) => {
          if (res) {
            const delIndex = this.ELEMENT_DATA.findIndex(item => item.id === element.id);
            if (delIndex !== -1) {
              this.ELEMENT_DATA.splice(delIndex, 1);
              this.dataSource = new MatTableDataSource<EmployeeForm>(this.ELEMENT_DATA);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
          }
        })

      }
    });
  }
  onEdit(element: any) {
    console.log('element :', element);
    this.router.navigate(['/app/employee-registration', 'edit', element.id])

  }
  onView(element: any) {
    this.router.navigate(['/app/employee-registration', 'view', element.id])
  }
  columns: any[] = [
    { columnDef: 'employeeName', header: 'Employee Name', type: 'Text', sort: true },
    { columnDef: 'leaveTypeName', header: 'Leave Type', type: 'Text', sort: true },
    { columnDef: 'totalUsed', header: ' Total Used', type: 'Number', sort: true },
    { columnDef: 'totalAvailableBalance', header: 'Total Balance', type: 'Number', sort: true }
  ];

}

