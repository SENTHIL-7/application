import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynTableComponent } from './dyn-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('DynTableComponent', () => {
  let component: DynTableComponent;
  let fixture: ComponentFixture<DynTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynTableComponent ],
      imports:[
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onAction', () => {
    component.onAction("aa","sas");
    expect(component.onAction).toBeDefined();
  });
  it('should call ngOnChanges()', () => {
    const columns = [
      { columnDef: 'column1', header: 'Column 1' },
      { columnDef: 'column2', header: 'Column 2' },
    ];

    component.data = { columns };

    component.ngOnChanges();

    const expectedDisplayedColumns = columns.map(x => x.columnDef);
    expect(component.displayedColumns).toEqual(expectedDisplayedColumns)
  });
  it('should set displayedColumns as undefined when data.columns is undefined', () => {
    component.data= undefined ;
    component.ngOnChanges();

    expect(component.displayedColumns).toBeUndefined();
  });
  it('should call  applyFilter()', () => {
    let filterValue = "action"
    component.dataSource = new MatTableDataSource<any>();
    component.applyFilter(<any>{target:<any>{value:'active'}});
    component.dataSource.filter=filterValue
  });
});
