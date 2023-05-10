import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../model/table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { PlacementData } from 'src/app/shared/service/placement.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  dataSource!: MatTableDataSource<PlacementData>;
  @Input() set data(value: PlacementData[]) {
    this.dataSource = new MatTableDataSource<PlacementData>(value)
  };
  @Input() columns!: TableColumn[];
  @Input() actionArr!: any[];
  @Output() actionReport = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() filter: boolean = false
  @Input() dateArr!: string[];
  @Input() dateFormat: string = 'mediumDate';
  column!: string[];
  ngOnInit() {
    this.column = this.columns.map(column => column.name)
  }
  onAction(method: any, element: any) {
    this.actionReport.emit({ method, element })
  }
  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}