import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../model/table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { PlacementData } from 'src/app/shared/service/placement.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-dyn-table',
  templateUrl: './dyn-table.component.html',
  styleUrls: ['./dyn-table.component.scss']
})
export class DynTableComponent {
  dataSource!: MatTableDataSource<PlacementData>;
  @Input() data!: any;
  @Input() matSort!: boolean;
  @Output() Action = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort!: MatSort;
  @Input() filter: boolean = false
  displayedColumns!: string[];
  ngOnInit() {
    
  }
  onAction(method: any, element: any) {
    this.Action.emit({ method: method, element: element })
  }
  ngOnChanges() {
    this.displayedColumns = this.data?.columns.map((x: any) => x.columnDef);
    this.dataSource = new MatTableDataSource<any>(this.data?.datas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
