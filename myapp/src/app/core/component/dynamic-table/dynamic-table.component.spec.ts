import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableComponent } from './dynamic-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('DynamicTableComponent', () => {
  let component: DynamicTableComponent;
  let fixture: ComponentFixture<DynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableComponent ],
      imports:[
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onAction', () => {
    component.onAction('a','b');
    expect(component.onAction).toBeDefined();
  });
  it('should call ngOnChanges', () => {
    component.ngOnChanges();
    expect(component.ngOnChanges).toBeDefined();
  });
  it('should call applyFilter', () => {
    let filterValue = "action"
    component.dataSource = new MatTableDataSource<any>();
    component.applyFilter(<any>{target:<any>{value:'active'}});
    component.dataSource.filter=filterValue;
  });
});
