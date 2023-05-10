import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacementAction } from 'src/app/core/model/placement-action.model';
import { TableColumn } from 'src/app/core/model/table-column.model';
import { PlacementData, PlacementService } from 'src/app/shared/service/placement.service';
;

@Component({
  selector: 'app-placement-table',
  templateUrl: './placement-table.component.html',
  styleUrls: ['./placement-table.component.scss']
})
export class PlacementTableComponent {
  constructor(private placementservice: PlacementService, private router: Router, private route: ActivatedRoute) {
  }
  paramData!: string;
  columns!: TableColumn[];
  users: PlacementData[] = [];
  empty!: PlacementData;
  actionArr!: PlacementAction[];
  isAction: boolean = true;
  datas!: any;
  userData!: PlacementData;
  dateArr!: string[];
  ngOnInit() {
    // this.placementservice.getUsers().subscribe((data) => {
    //   this.datas = data
    //   this.users = this.datas
    // });
    this.columns = [
      { name: 'id', displayName: 'Id' },
      { name: 'name', displayName: 'Name' },
      { name: 'startDate', displayName: 'Start Date' },
      { name: 'endDate', displayName: 'End Date' },
      { name: 'action', displayName: 'Action' }
    ]
    this.actionArr = [
      { name: 'edit', toolTip: 'Edit', method: 'onEdit' },
      { name: 'delete', toolTip: 'delete', method: 'onDelete' },
      { name: 'description', toolTip: 'view', method: 'onView' }
    ];
    this.dateArr = [
      'startDate', 'endDate'
    ]
  }
  onDelete(element: PlacementData) {
    // this.placementservice.removeUser(element.id).subscribe()
    this.placementservice.getUsers().subscribe((data) => {
      this.datas = data
      this.users = this.datas
    });
  }
  onView(element: PlacementData) {
    this.router.navigate(['app', 'placement', element.id, 'view'])
  }
  onEdit(element: PlacementData) {
    this.router.navigate(['app', 'placement', element.id, 'edit'])
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
