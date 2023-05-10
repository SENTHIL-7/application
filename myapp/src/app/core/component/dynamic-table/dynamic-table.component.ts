import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { TableColumn } from '../../model/table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { PlacementData } from 'src/app/shared/service/placement.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnChanges, AfterViewInit {
  dataSource!: MatTableDataSource<PlacementData>;
  // @Input() set data(value: PlacementData[]) {
  //   this.dataSource = new MatTableDataSource<PlacementData>(value)
  // };
  @Input() data!: any;
  @Input() columns!: TableColumn[];
  @Input() actionArr!: any[];
  @Input() idColumn!: any[];
  @Input() dateColumn!: any[];
  @Output() Action = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() filter: boolean = false
  @Input() displayColumn!: string[];
  ngOnInit() {
  }
  onAction(method: any, element: any) {
    this.Action.emit({ method, element })
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource<PlacementData>(this.data)
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
